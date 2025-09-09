"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Carousel from "./Carousel";
import Image from "next/image";

interface ModuleData {
  title: string;
  type: "USER" | "ADMIN";
  icon: React.ReactNode;
}

const moduleData: ModuleData[] = [
  {
    title: "Solicitar llaves",
    type: "USER",
    icon: (
      <Image
        src="/icons/KeyIcon.svg"
        alt="Key"
        width={42}
        height={42}
        className="ml-4"
      />
    ),
  },
  {
    title: "Activar llaves",
    type: "USER",
    icon: (
      <Image
        src="/icons/KeyStarIcon.svg"
        alt="Key Star"
        width={42}
        height={42}
        className="ml-4"
      />
    ),
  },
  {
    title: "Reservar Espacios",
    type: "USER",
    icon: (
      <Image
        src="/icons/CalendarIcon.svg"
        alt="Calendar"
        width={42}
        height={42}
        className="ml-4"
      />
    ),
  },
  {
    title: "Reservar Espacio",
    type: "USER",
    icon: (
      <Image
        src="/icons/CalendarIcon.svg"
        alt="Calendar"
        width={42}
        height={42}
        className="ml-4"
      />
    ),
  },
  {
    title: "Registrar Unidad",
    type: "ADMIN",
    icon: (
      <Image
        src="/icons/BuildingIcon.svg"
        alt="Building"
        width={42}
        height={42}
        className="ml-4"
      />
    ),
  },
  {
    title: "Agregar Usuario",
    type: "ADMIN",
    icon: (
      <Image
        src="/icons/UsersIcon.svg"
        alt="Users"
        width={32}
        height={32}
        className="ml-4"
      />
    ),
  },
  {
    title: "Renovar Contrato",
    type: "ADMIN",
    icon: (
      <Image
        src="/icons/ContractIcon.svg"
        alt="Contract"
        width={42}
        height={42}
        className="ml-4"
      />
    ),
  },
  {
    title: "Renovar Contratos",
    type: "ADMIN",
    icon: (
      <Image
        src="/icons/ContractIcon.svg"
        alt="Contract"
        width={42}
        height={42}
        className="ml-4"
      />
    ),
  },
];

interface ModulesCarouselProps {
  className?: string;
}

export default function ModulesCarousel({
  className = "",
}: ModulesCarouselProps) {
  const lightCards = moduleData.filter((item) => item.type === "USER");
  const darkCards = moduleData.filter((item) => item.type === "ADMIN");

  return (
    <div className={`w-full space-y-6 ${className}`}>
      <div className="w-full flex flex-col lg:flex-row items-center lg:justify-around gap-4 lg:gap-6">
        <div className="w-5 h-5 text-highlighted-text border border-highlighted-text rounded-full flex items-center justify-center hover:bg-highlighted-text/10 transition-colors cursor-pointer">
          <ChevronLeftIcon className="w-6 h-6" />
        </div>
        <Carousel
          autoplay={false}
          loop={false}
          showDots={false}
          className="w-full lg:flex-1"
          itemClassName="w-[280px] sm:w-[320px] lg:w-[280px]"
          gap={16}
        >
          {lightCards.map((item, index) => (
            <ModulesFloatingCard
              key={`user-${index}`}
              title={item.title}
              type={item.type}
              icon={item.icon}
              className="py-5 my-1"
              shadowClassName="shadow-sm"
              width="w-full"
            />
          ))}
        </Carousel>
        <div className="w-5 h-5 text-text border border-text rounded-full flex items-center justify-center hover:bg-highlighted-text/10 transition-colors cursor-pointer">
          <ChevronRightIcon className="w-6 h-6" />
        </div>
      </div>

      <div className="w-full h-px bg-section-title/10" />

      <div className="w-full flex flex-col lg:flex-row items-center lg:justify-around gap-4 lg:gap-6">
        <div className="w-5 h-5 text-highlighted-text border border-highlighted-text rounded-full flex items-center justify-center hover:bg-highlighted-text/10 transition-colors cursor-pointer">
          <ChevronLeftIcon className="w-6 h-6" />
        </div>
        <Carousel
          autoplay={false}
          loop={false}
          showDots={false}
          className="w-full lg:flex-1"
          itemClassName="w-[280px] sm:w-[320px] lg:w-[280px]"
          gap={16}
        >
          {darkCards.map((item, index) => (
            <ModulesFloatingCard
              key={`dark-${index}`}
              title={item.title}
              type={item.type}
              icon={item.icon}
              className="py-5 my-1 bg-primary"
              shadowClassName="shadow-sm"
              width="w-full"
            />
          ))}
        </Carousel>
        <div className="w-5 h-5 text-text border border-text rounded-full flex items-center justify-center hover:bg-highlighted-text/10 transition-colors cursor-pointer">
          <ChevronRightIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

function ModulesFloatingCard({
  title,
  icon,
  className,
  width = "w-full",
  shadowClassName,
  type = "USER",
}: {
  title: string;
  icon: React.ReactNode;
  className?: string;
  width?: string;
  label?: string;
  type?: "USER" | "ADMIN";
  shadowClassName?: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 px-4 py-6 rounded-xl ${
        shadowClassName ? "shadow-lg" : ""
      } ${shadowClassName ? "shadow-lg" : ""} bg-${
        type === "USER" ? "white" : "primary"
      }/55 backdrop-blur-md border border-white/20 ${width} sm:w-auto ${className} ${shadowClassName} z-10
			items-center`}
    >
      {icon}
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-medium text-highlighted-text">
          {type === "USER" ? "USUARIOS" : "ADMINISTRADOR"}
        </span>
        <span
          className={`text-s font-medium ${
            type === "USER" ? "text-text" : "text-white"
          }`}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
