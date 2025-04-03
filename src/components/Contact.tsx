"use client";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    console.log(data);
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-b from-[#1A1A1D] via-[#3B1C32] to-[#1A1A1D]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Contacto
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-[#3B1C32] border border-[#6A1E55] rounded-lg focus:ring-2 focus:ring-[#A64D79] focus:border-transparent text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#A64D79] text-white py-3 px-6 rounded-lg hover:bg-[#6A1E55] transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
