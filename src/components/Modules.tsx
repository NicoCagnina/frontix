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
              <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-tight font-normal text-description mb-5 tracking-widest lg:whitespace-nowrap">
                ¿Qué puedo
                <span className="font-extralight italic"> hacer </span>
                en
                <span className="font-bold"> frontix®?</span>
              </h2>
            </div>
            <div className="flex flex-row gap-3 xl:gap-0">
              <Link
                href="/faq"
                className="text-center w-36 h-10 py-2 px-5
                xl:mx-4 rounded-full bg-highlighted-text text-white text-md tracking-wide flex items-center justify-center xl:mt-5 font-light
                lg:w-48 lg:h-12"
              >
                Contacto
              </Link>
              <Link
                href="/#contacto"
                className=" text-sm text-center w-36 h-10 py-2 px-5 border border-border tracking-wider
                bg-[#E0E0E0] xl:mx-4 rounded-full text-highlighted-text-secondary flex items-center justify-center xl:mt-5 font-light
                lg:w-48 lg:h-12"
              >
                <ArrowRightIcon className="w-10 h-10 text-highlighted-text-secondary p-2 -ml-3" />
                Más
              </Link>
            </div>
          </div>
          <div className="w-full h-px bg-section-title mt-8" />
        </div>
      </div>
      <div className="relative w-full hidden xl:grid xl:grid-cols-2 pr-20">
        <div className="flex flex-row justify-start items-start mt-6 gap-4">
          <div className="absolute w-50 h-75 top-20 rounded-2xl left-65 z-1 bg-service-card justify-end pt-6 pr-6 flex" />
          <div className="absolute right-190 xl:flex z-0 top-25">
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
        <div className="flex flex-col justify-center order-1 xl:order-2">
          <div className="mb-6">
            <h3 className="text-xl font-light mb-4 text-highlighted-text uppercase tracking-wide">
              USUARIOS
            </h3>
            <h2 className="text-4xl sm:text-5xl xl:text-5xl leading-tight text-gray-800 mb-6">
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

      <div className="relative w-full flex flex-col xl:hidden">
        <div className="flex justify-center items-center mt-6 mb-8 relative px-4">
          <div className="relative w-full max-w-[450px]">
            {/* Gradiente de fondo */}
            <div className="absolute -top-5 -left-5 -right-5 -bottom-5 z-0">
              <div
                className="w-full h-full rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "linear-gradient(265.01deg, rgba(153, 0, 255, 0.8) 25.78%, rgba(197, 220, 255, 0.8) 79.19%)",
                }}
              />
            </div>
            {/* Imagen principal */}
            <Image
              src="/images/ModulesImg.svg"
              alt="Module 1"
              width={600}
              height={600}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/7 z-10 mx-auto w-[600px] h-[600px] object-cover overflow-visible"
            />
            {/* FloatingCard */}
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
              width="w-[60%]"
              className="absolute top-70 left-1/2 transform -translate-x-1/2 z-20"
            />
          </div>
        </div>

        <div className="flex flex-col items-start text-start px-4 mt-[500px]">
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

          <div className="flex flex-row gap-4 items-center justify-center">
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
