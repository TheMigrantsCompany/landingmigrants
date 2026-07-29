"use client";

import { FormEvent, useRef, useState } from "react";
import { brand, hero, projectTypes } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

const labelClass = "mb-2 block text-sm font-medium text-foreground";

function getFormspreeEndpoint(): string | null {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim();
  if (!endpoint || endpoint.includes("TU_FORM_ID")) return null;
  return endpoint;
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);
  const endpoint = getFormspreeEndpoint();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const formData = new FormData(e.currentTarget);

    const payload = new FormData();
    payload.set("empresa", String(formData.get("company") || ""));
    payload.set("nombre", String(formData.get("name") || ""));
    payload.set("email", String(formData.get("email") || ""));
    payload.set("tipo_proyecto", String(formData.get("projectType") || ""));
    payload.set("mensaje", String(formData.get("message") || ""));
    payload.set(
      "_subject",
      `IB TechLabs — ${formData.get("company") || formData.get("name")}`
    );

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contacto">
      <FadeIn>
        <p className="mb-4 text-xs font-medium tracking-[0.22em] text-ink uppercase">
          Contacto
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Hablemos de tu producto.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Contanos qué querés construir. Respondemos con foco en alcance y
          próximos pasos.
        </p>
        <p className="mt-4 max-w-xl text-sm text-muted">{hero.trustLine}</p>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="mx-auto mt-14 max-w-2xl md:mt-16">
          {status === "success" ? (
            <div
              role="status"
              className="mb-8 border border-border bg-surface-subtle px-5 py-4 text-sm text-foreground"
            >
              Recibimos tu mensaje. IB TechLabs te contactará a la brevedad.
            </div>
          ) : null}

          {status === "error" ? (
            <div
              role="alert"
              className="mb-8 border border-border bg-surface-subtle px-5 py-4 text-sm text-foreground"
            >
              No pudimos enviar el mensaje.
              {!endpoint ? " El formulario aún no está conectado. " : " "}
              Escribinos a{" "}
              <a
                href={`mailto:${brand.email}`}
                className="font-medium text-ink underline-offset-2 hover:underline"
              >
                {brand.email}
              </a>
              .
            </div>
          ) : null}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="company" className={labelClass}>
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div>
                <label htmlFor="name" className={labelClass}>
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="projectType" className={labelClass}>
                  Qué querés construir
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={inputClass}
                placeholder="El problema, el producto y el contexto."
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando…" : "Empezar conversación"}
            </Button>
          </form>
        </div>
      </FadeIn>
    </Section>
  );
}
