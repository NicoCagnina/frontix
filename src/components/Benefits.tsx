import { ArrowUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";

export default function Benefits() {
  return (
    <div>
      <div className="absolute right-0 hidden lg:flex z-0 top-310 -translate-y-2/2">
        <div className="w-150 h-[250px] bg-gradient-to-r from-white to-secondary rounded-full blur-3xl opacity-35" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 items-end relative overflow-hidden">
        <div className="bg-focused-text p-6 rounded-lg shadow-md flex flex-col justify-center min-h-[300px] z-10">
          <Image
            src="/icons/KeysIcon.svg"
            alt="Beneficio 1"
            width={60}
            height={60}
          />
          <p className="text-white text-3xl max-w-64 font-extralight pt-1 pb-3">
            Activación y bloqueo de llaves.
          </p>
          <div className="flex gap-2">
            <p className="text-[10px] text-center border border-white py-1 px-2 rounded-xl bg-focused-text text-white">
              ADMITIDO
            </p>
            <p className="text-[10px] text-center border border-white py-1 px-2 rounded-xl bg-focused-text text-white">
              BLOQUEADO
            </p>
          </div>
        </div>

        <div
          className="relative p-6 rounded-lg shadow-md flex flex-col items-center justify-end gap-10 min-h-[400px] bg-cover bg-center z-10"
          style={{ backgroundImage: "url('/images/ServiceCardImg.svg')" }}
        >
          <ArrowUpIcon className="w-10 h-10 text-white border border-white rounded-full p-2 rotate-45" />
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-white text-3xl max-w-64 font-extralight">
              En control
            </p>
            <p className="text-white text-3xl max-w-64 font-extralight text-center">
              todo el tiempo.
            </p>
          </div>
        </div>

        <div className="bg-focused-text p-6 rounded-lg shadow-md flex flex-col items-start justify-center min-h-[300px] z-10">
          <Image
            src="/icons/CalendarIcon.svg"
            alt="Beneficio 3"
            width={55}
            height={55}
          />
          <p className="text-white text-3xl max-w-64 font-extralight pt-1 pb-3">
            Reservas de espacios comunes.
          </p>
          <p className="text-[10px] text-center border border-white py-1 px-2 rounded-xl bg-focused-text text-white">
            RESERVADO
          </p>
        </div>
      </div>
    </div>
  );
}
