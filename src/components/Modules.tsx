import { ArrowRightIcon, ArrowUpIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { FloatingCard } from "./ui/FloatingCard";
import ModulesCarousel from "./ui/ModulesCarousel";

export default function Modules() {
  return (
    <div className="w-full relative overflow-visible">
      <div className="container relative z-10 ">
        <div className="text-center lg:text-left">
          <h3 className="text-sm font-semibold mb-4 text-section-title uppercase tracking-wide">
            EXPLORA NUESTROS MÓDULOS
          </h3>

          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-4 lg:mb-8">
            <div className="w-full">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-tight font-normal text-description mb-5 tracking-wider lg:whitespace-nowrap">
                ¿Qué puedo
                <span className="font-extralight italic"> hacer </span>
                en
                <span className="font-bold"> frontix®?</span>
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0">
              <Link
                href="/faq"
                className="text-center w-48 h-12 py-2 px-12
                lg:mx-4 rounded-full bg-highlighted-text text-white text-m tracking-wide flex items-center justify-center lg:mt-5 font-light"
              >
                Contacto
              </Link>
              <Link
                href="/#contacto"
                className=" text-sm text-center w-48 h-12 py-2 px-12 border border-border tracking-wider
                bg-[#E0E0E0] lg:mx-4 rounded-full text-highlighted-text-secondary flex items-center justify-center lg:mt-5 font-light"
              >
                <ArrowRightIcon className="w-10 h-10 text-highlighted-text-secondary p-2 -ml-3" />
                Más
              </Link>
            </div>
          </div>
          <div className="w-full h-px bg-section-title" />
        </div>
      </div>
      <div className="relative w-full hidden lg:grid lg:grid-cols-2 pr-20">
        <div className="flex flex-row justify-start items-start mt-6 gap-4">
          <div className="absolute w-50 h-75 top-20 rounded-2xl left-65 z-1 bg-service-card justify-end pt-6 pr-6 flex" />
          <div className="absolute right-190 lg:flex z-0 top-25">
            <div
              className="w-[1000px] h-[450px] rounded-full blur-3xl opacity-60"
              style={{
                background:
                  "linear-gradient(265.01deg, rgba(153, 0, 255, 0.8) 36.78%, rgba(197, 220, 255, 0.8) 103.19%)",
              }}
            />
          </div>
          <Image
            src="/images/ModulesImg.svg"
            alt="Module 1"
            width={500}
            height={500}
            className="object-cover z-10"
          />
          <FloatingCard
            title="Solicitar llave"
            icon={
              <Image
                src="/icons/KeyIcon.svg"
                alt="User"
                width={24}
                height={24}
              />
            }
            className="absolute top-85 left-30 z-1 opacity-100 "
          />
        </div>
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <div className="mb-6">
            <h3 className="text-xl font-light mb-4 text-highlighted-text uppercase tracking-wide">
              USUARIOS
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-tight text-gray-800 mb-6">
              Solicitar llaves
            </h2>
          </div>
          <p className="text-lg text-text leading-relaxed mb-8 font-light">
            El usuario de la unidad, con previa autorización del administrador,
            dispone de los permisos para solicitar nuevas llaves, activar y
            desactivar llaves existentes, garantizando un control en tiempo real
            de sus accesos de confianza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <Image
                src="/icons/AppStoreIcon.svg"
                alt="App Store"
                width={120}
                height={40}
                className="h-10 w-auto opacity-70"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="/icons/GooglePlayIcon.svg"
                alt="Google Play"
                width={135}
                height={40}
                className="h-10 w-auto opacity-70"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-col lg:hidden">
        <div className="flex justify-center items-center mt-6 mb-8 relative">
          <div className="relative">
            <Image
              src="/images/ModulesImg.svg"
              alt="Module 1"
              width={400}
              height={400}
              className="object-cover z-10 mx-auto"
            />
            <FloatingCard
              title="Solicitar llave"
              icon={
                <Image
                  src="/icons/KeyIcon.svg"
                  alt="User"
                  width={24}
                  height={24}
                />
              }
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            />
            <div className="absolute -top-10 -left-10 -right-10 -bottom-10 z-0">
              <div
                className="w-full h-full rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "linear-gradient(265.01deg, rgba(153, 0, 255, 0.6) 36.78%, rgba(197, 220, 255, 0.6) 103.19%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <div className="mb-6">
            <h3 className="text-lg font-light mb-4 text-highlighted-text uppercase tracking-wide">
              USUARIOS
            </h3>
            <h2 className="text-3xl sm:text-4xl leading-tight text-gray-800 mb-6">
              Solicitar llaves
            </h2>
          </div>
          <p className="text-base text-text leading-relaxed mb-8 font-light max-w-md">
            El usuario de la unidad, con previa autorización del administrador,
            dispone de los permisos para solicitar nuevas llaves, activar y
            desactivar llaves existentes, garantizando un control en tiempo real
            de sus accesos de confianza.
          </p>

          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center">
              <Image
                src="/icons/AppStoreIcon.svg"
                alt="App Store"
                width={120}
                height={40}
                className="h-10 w-auto opacity-70"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="/icons/GooglePlayIcon.svg"
                alt="Google Play"
                width={135}
                height={40}
                className="h-10 w-auto opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
      <ModulesCarousel className="my-8" />
    </div>
  );
}
