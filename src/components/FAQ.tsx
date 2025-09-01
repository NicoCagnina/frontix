"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es Frontix y para qué sirve?",
    answer:
      "Frontix es una plataforma inteligente de control de accesos. Permite a los vecinos de un edificio, barrio o comunidad autorizar ingresos desde su celular, ver quién entró, generar invitaciones y mantener el control de la seguridad sin complicaciones.",
  },
  {
    question: "¿Necesito instalar algo para usar Frontix?",
    answer:
      "No es necesario instalar infraestructura adicional. Podés acceder desde tu celular con la app o vía web.",
  },
  {
    question: "¿Es seguro autorizar ingresos desde el celular?",
    answer:
      "Sí, Frontix utiliza autenticación segura y encriptación para garantizar la seguridad de tus accesos.",
  },
  {
    question: "¿Qué pasa si no tengo señal o batería?",
    answer:
      "Podés configurar accesos alternativos o llaves físicas de respaldo. Además, el sistema mantiene registros en la nube.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg p-4 bg-white">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="font-medium text-gray-800">{faq.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
