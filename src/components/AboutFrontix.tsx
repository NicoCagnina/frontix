import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/TextAccordion";

export default function AboutFrontix() {
  return (
    <div className="relative">
      <div className="absolute top-0 z-0 w-screen h-full left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/AboutFrontixBg.svg"
          alt="Fondo de About Frontix"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="w-full py-10 z-20 relative">
        <div className="w-full">
          <h3 className="text-sm font-semibold mb-2 text-text">
            QUÉ ES FRONTIX
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-start w-full">
            <div className="w-full lg:w-1/2">
              <h4 className="text-white mb-6 text-4xl lg:text-5xl font-normal mt-4 lg:mt-10 leading-tight">
                <span className="text-focused-text">Autogestión</span> escalable
                garantizando seguridad y autonomía.
              </h4>
            </div>
            <div className="w-full lg:w-lg -mr-0 lg:-mr-5 mt-4 lg:mt-12 hidden lg:block">
              <p className="text-white text-lg leading-relaxed tracking-wider">
                <strong>frontix®</strong> es una plataforma de acceso
                inteligente para comunidades. Conectamos vecinos, consorcios y
                empresas de seguridad en una experiencia{" "}
                <strong className="italic">
                  fluida, segura y 100% digital.
                </strong>
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-white" />
          <div className="flex items-center sm:justify-around lg:justify-start space-x-6 text-white sm:gap-0 lg:gap-4 mt-6 lg:mt-8">
            <div className="flex flex-col items-start">
              <p>
                <span className="text-primary text-2xl lg:text-3xl font-bold">
                  +
                </span>
                <span className="text-white ml-1 text-3xl lg:text-4xl">
                  20K
                </span>
              </p>
              <p className="text-white text-md font-extralight">Usuarios</p>
            </div>
            <div className="w-px h-8 bg-white" />
            <div className="flex flex-col items-start">
              <p>
                <span className="text-primary text-2xl lg:text-3xl font-bold">
                  +
                </span>
                <span className="text-white ml-1 text-3xl lg:text-4xl">
                  15K
                </span>
              </p>
              <p className="text-white text-md font-extralight">Accesos</p>
            </div>
            <div className="w-px h-8 bg-white" />
            <div className="flex flex-col items-start">
              <p>
                <span className="text-primary text-2xl lg:text-3xl font-bold">
                  +
                </span>
                <span className="text-white ml-1 text-3xl lg:text-4xl">
                  511
                </span>
              </p>
              <p className="text-white text-md font-extralight">Comunidades</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="mt-10 lg:mt-30">
              <div className="w-full border-y border-white/40">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-white"
                >
                  <AccordionItem
                    value="item-1"
                    className="border-t border-white/40 first:border-t-0"
                  >
                    <AccordionTrigger className="group w-full flex items-center gap-3 py-6 text-lg lg:text-2xl font-normal text-white">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/70">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-white transition-transform group-data-[state=open]:rotate-90"
                        >
                          <path
                            d="M8 5L16 12L8 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>Consorcios y administraciones.</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9 pr-2 pb-6 text-white/80 leading-relaxed">
                      Permite el monitoreo y gestión de ingresos a las
                      comunidades y la gestión de los espacios comunes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-t border-white/40 first:border-t-0"
                  >
                    <AccordionTrigger className="group w-full flex items-center gap-3 py-6 text-lg lg:text-2xl font-normal text-white">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/70">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-white transition-transform group-data-[state=open]:rotate-90"
                        >
                          <path
                            d="M8 5L16 12L8 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>Propietarios e inquilinos.</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9 pr-2 pb-6 text-white/80 leading-relaxed">
                      Acceso rápido y seguro a los espacios, con herramientas de
                      autogestión pensadas para cada residente.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-t border-white/40 first:border-t-0"
                  >
                    <AccordionTrigger className="group w-full flex items-center gap-3 py-6 text-lg lg:text-2xl font-normal text-white">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/70">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-white transition-transform group-data-[state=open]:rotate-90"
                        >
                          <path
                            d="M8 5L16 12L8 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>Empresas e industrias.</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9 pr-2 pb-6 text-white/80 leading-relaxed">
                      Integración con sistemas corporativos para control de
                      accesos en plantas y oficinas, garantizando seguridad y
                      escalabilidad.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="lg:hidden mt-6">
              <p className="text-white text-base leading-relaxed tracking-wider">
                <strong>frontix®</strong> es una plataforma de acceso
                inteligente para comunidades. Conectamos vecinos, consorcios y
                empresas de seguridad en una experiencia{" "}
                <strong className="italic">
                  fluida, segura y 100% digital.
                </strong>
              </p>
            </div>
            <div className="flex justify-center items-center mt-6 lg:-mt-10 rounded-xl">
              <div className="w-full max-w-full h-72 lg:h-120 rounded-xl overflow-hidden">
                <Image
                  src="/images/VideoPlaceholderImg.svg"
                  alt="Video placeholder"
                  width={800}
                  height={480}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
