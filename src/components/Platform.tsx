import Image from "next/image";
import Carousel from "./ui/Carousel";

interface PlatformItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const data: PlatformItem[] = [
  {
    id: 1,
    image: "/images/platform/1.svg",
    title: "VANGUARDIA",
    description: "Garantía de compatibilidad tecnológica.",
  },
  {
    id: 2,
    image: "/images/platform/2.svg",
    title: "AUTONOMÍA",
    description: "Gestión de contratos de alquiler con suspensión automática.",
  },
  {
    id: 3,
    image: "/images/platform/3.svg",
    title: "SEGURIDAD",
    description: "Pedidos de llave centralizados desde la app.",
  },
  {
    id: 4,
    image: "/images/platform/4.svg",
    title: "AGILIDAD",
    description:
      "Puertas virtuales para cambiar dispositivos sin perder configuraciones.",
  },
];

const Card = ({ item }: { item: PlatformItem }) => (
  <div className="w-full h-[360px] sm:h-[380px] lg:h-[400px] rounded-2xl border border-gray-200 p-4 bg-white overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="w-full h-48 sm:h-52 lg:h-56 mb-4 rounded-xl overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={200}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex flex-col gap-3 flex-1">
      <h5 className="text-sm font-bold text-purple-600 uppercase tracking-wide">
        {item.title}
      </h5>
      <p className="text-base text-gray-700 leading-relaxed flex-1">
        {item.description}
      </p>
    </div>
  </div>
);

export default function Platform() {
  return (
    <div className="w-full py-8 lg:py-16 relative overflow-visible">
      <div className="absolute right-290 lg:flex z-0 top-30">
        <div className="w-150 h-[350px] bg-gradient-to-r from-gradient-second to-gradient-first rounded-full blur-3xl opacity-20" />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left mb-8 lg:mb-12">
          <h3 className="text-start text-sm font-semibold mb-4 text-section-title uppercase tracking-wide">
            TODO EN UNA SOLA APP
          </h3>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start mb-4 lg:mb-6">
            <div className="flex lg:block justify-center lg:justify-start w-full lg:w-1/2">
              <h2 className="w-80 lg:w-full text-start text-5xl sm:text-5xl lg:text-6xl leading-tight font-light text-description mb-0 lg:mb-4">
                Tu <span className="font-bold italic">plataforma</span> de{" "}
                <span className="font-bold italic">confianza.</span>
              </h2>
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-description text-start text-lg leading-relaxed mt-2 lg:mt-10">
                <span className="font-bold">frontix®</span> permite conectar en
                cada comunidad a los distintos participantes solucionando la
                gestión de usuarios y el monitoreo de accesos en una sola
                plataforma.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-section-title" />

        <div className="block lg:hidden mt-4 ">
          <div className="overflow-hidden -mx-4">
            <div className="px-4">
              <Carousel
                loop={true}
                showDots={false}
                itemClassName="w-[65vw] max-w-[320px] flex-shrink-0"
              >
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="hidden lg:block mt-12">
          <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
