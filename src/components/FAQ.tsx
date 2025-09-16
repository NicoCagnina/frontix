import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

export default function FAQ() {
  return (
    <div className="relative pb-16">
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
          <div className="flex flex-col lg:flex-row justify-between items-start w-full">
            <div className="w-full">
              <h4 className="text-white mb-2 text-4xl lg:text-5xl font-normal mt-4 leading-tight tracking-wider">
                Preguntas frecuentes
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start">
            <div className="mt-6 lg:mt-16">
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
                      <span>¿Qué es Frontix y para qué sirve?</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9 pr-2 pb-6 text-white/80 leading-relaxed">
                      Frontix es una plataforma inteligente de control de
                      accesos. Permite a los vecinos de un edificio, barrio o
                      comunidad autorizar ingresos desde su celular, ver quién
                      entró, generar invitaciones y mantener el control de la
                      seguridad sin complicaciones.
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
                      <span>¿Necesito instalar algo para usar Frontix?</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9 pr-2 pb-6 text-white/80 leading-relaxed">
                      No necesitas instalar nada especial. Frontix funciona
                      directamente desde tu navegador web en cualquier
                      dispositivo móvil o computadora. Solo necesitas acceso a
                      internet y tu cuenta de usuario para gestionar los accesos
                      de forma segura y eficiente.
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
                      <span>
                        ¿Es seguro autorizar ingresos desde el celular?
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9 pr-2 pb-6 text-white/80 leading-relaxed">
                      Sí, es completamente seguro. Frontix utiliza encriptación
                      de extremo a extremo y autenticación de dos factores para
                      proteger todas las transacciones. Cada autorización
                      requiere tu confirmación explícita y queda registrada en
                      el sistema para auditoría y control de seguridad.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
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
                      <span>¿Qué pasa si no tengo señal o batería?</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9 pr-2 pb-6 text-white/80 leading-relaxed">
                      Frontix cuenta con un sistema de respaldo que permite
                      autorizaciones previamente programadas y códigos de acceso
                      temporales. Además, puedes configurar contactos de
                      emergencia que puedan autorizar ingresos en tu nombre. El
                      sistema también mantiene un registro de todas las
                      actividades para que puedas revisarlas cuando recuperes la
                      conectividad.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
