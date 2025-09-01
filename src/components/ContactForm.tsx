"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setLoading(false);
    if (res.ok) setMessage("Consulta enviada con éxito ✅");
    else setMessage("Error al enviar, intenta de nuevo ❌");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <input
        name="name"
        placeholder="Nombre y apellido"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="phone"
        placeholder="Celular"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Escribí tu mensaje..."
        className="w-full p-2 border rounded"
        rows={4}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Enviando..." : "Enviar consulta"}
      </button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
