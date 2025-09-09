"use client";

import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    userType: "",
    terms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario submitted:", formData);
    // Send logic here
  };
  return (
    <div className="w-full z-20 relative">
      <h4 className="text-description mb-2 text-5xl font-light leading-tight tracking-wider">
        Solicitar
        <span className="font-bold"> asesoramiento</span>
      </h4>
      <div className="w-full h-px bg-section-title my-10" />

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/5">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="names"
                className="block text-sm font-medium text-text mb-2 placeholder-placeholder-text/70"
              >
                Nombres y apellido
              </label>
              <input
                type="text"
                id="names"
                name="names"
                value={formData.names}
                onChange={handleInputChange}
                placeholder="Nombres"
                className="w-full px-3 py-2 border-b-2 border-gray-300 bg-white focus:border-purple-500 focus:outline-none transition-colors placeholder-placeholder-text/70 text-text"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text mb-2 placeholder-placeholder-text/70"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tucorreo@mail.com"
                className="w-full px-3 py-2 border-b-2 border-gray-300 bg-white focus:border-purple-500 focus:outline-none transition-colors placeholder-placeholder-text/70 text-text"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-text mb-2 placeholder-placeholder-text/70"
              >
                Celular
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Número de celular"
                className="w-full px-3 py-2 border-b-2 border-gray-300 bg-white focus:border-purple-500 focus:outline-none transition-colors placeholder-placeholder-text/70 text-text"
              />
            </div>

            <div>
              <label
                htmlFor="userType"
                className="block text-sm font-medium text-text mb-2 placeholder-placeholder-text/70"
              >
                Tipo de usuario
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border-b-2 border-gray-300 bg-white focus:border-purple-500 focus:outline-none transition-colors appearance-none cursor-pointer ${
                  formData.userType ? "text-text" : "text-placeholder-text/70"
                }`}
              >
                <option value="empresa-seguridad">Empresa de seguridad</option>
                <option value="empresa-privada">Empresa privada</option>
                <option value="gobierno">Gobierno</option>
                <option value="particular">Particular</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 -mt-6">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <label
              htmlFor="terms"
              className="text-sm text-text leading-relaxed"
            >
              Acepto los{" "}
              <a
                href="#"
                className="underline hover:text-purple-600 transition-colors"
              >
                Términos y Condiciones
              </a>{" "}
              y{" "}
              <a
                href="#"
                className="underline hover:text-purple-600 transition-colors"
              >
                Políticas de Privacidad
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="bg-highlighted-text text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <ArrowUpRightIcon className="w-4 h-4" />
            Enviar consulta
          </button>

          <div className="flex gap-3 justify-end items-center w-1/3">
            <Link
              href="#"
              className="block hover:cursor-pointer"
              aria-label="Descargar en Google Play"
            >
              <Image
                src="/icons/PlayStoreIconColored.svg"
                alt="Google Play"
                width={184}
                height={184}
              />
            </Link>
            <Link
              href="#"
              className="block hover:cursor-pointer"
              aria-label="Descargar en App Store"
            >
              <Image
                src="/icons/AppStoreIconColored.svg"
                alt="App Store"
                width={184}
                height={184}
              />
            </Link>
          </div>
        </div>
      </form>
      <div className="w-full h-px bg-section-title my-10" />
      <div className="grid grid-cols-5 w-full justify-between my-20">
        <div className="col-span-2">
          <h4 className="text-border text-5xl font-light leading-snug tracking-wider">
            Recibí información sobre actualizaciones.
          </h4>
          <div className="flex items-center mt-14">
            <input
              type="email"
              placeholder="tucorreo@mail.com"
              className="w-3/4 px-3 py-3 pr-20 border-b-2 border-gray-300 bg-white focus:border-purple-500 focus:outline-none transition-colors placeholder-placeholder-text/70 text-text rounded-full"
            />
            <button
              type="submit"
              className="bg-highlighted-text text-white px-10 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center gap-2 -ml-10"
            >
              <ArrowUpRightIcon className="w-4 h-4" />
              Suscribirse
            </button>
          </div>
        </div>

        <div className="col-span-3 w-[600px] h-[250px] justify-self-end rounded-lg overflow-hidden relative">
          <Image
            src="/images/ContactFormImg.svg"
            alt="Contact form image"
            fill
            className="object-fit"
          />
        </div>
      </div>
    </div>
  );
}
