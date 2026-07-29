"use client";

import { FormEvent, useRef, useState } from "react";
import { brand, budgetRanges, projectTypes } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

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
    payload.set("presupuesto", String(formData.get("budget") || ""));
    payload.set("mensaje", String(formData.get("message") || ""));
    payload.set(
      "_subject",
      `IB TechLabs — Consulta de ${formData.get("company") || formData.get("name")}`
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
    <Section id="contacto" className="bg-surface-subtle">
      <FadeIn>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu plataforma."
          description="Contanos qué querés construir. Respondemos con foco en alcance, enfoque y próximos pasos."
        />
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="mx-auto max-w-2xl">
          {status === "success" ? (
            <div
              role="status"
              className="mb-8 border border-border bg-background px-5 py-4 text-sm text-foreground"
            >
              Recibimos tu mensaje. El equipo de IB TechLabs te va a contactar a
              la brevedad.
            </div>
          ) : null}

          {status === "error" ? (
            <div
              role="alert"
              className="mb-8 border border-border bg-background px-5 py-4 text-sm text-foreground"
            >
              No pudimos enviar el mensaje.
              {!endpoint
                ? " El formulario aún no está conectado. "
                : " "}
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

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 border border-border bg-background p-6 md:p-10"
          >
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
                  placeholder="Nombre de la empresa o proyecto"
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

              <div>
                <label htmlFor="projectType" className={labelClass}>
                  Tipo de proyecto
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

              <div>
                <label htmlFor="budget" className={labelClass}>
                  Presupuesto estimado
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccioná un rango
                  </option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
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
                placeholder="Contanos el problema, la plataforma y el contexto."
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
