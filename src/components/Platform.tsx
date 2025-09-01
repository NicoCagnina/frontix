import Image from "next/image";
import Carousel from "./ui/carousel";

const data = [
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

const Card = ({ item }: { item: any }) => (
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
    <div className="w-full py-8 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left mb-8 lg:mb-12">
          <h3 className="text-sm font-semibold mb-4 text-gray-600 uppercase tracking-wide">
            TODO EN UNA SOLA APP
          </h3>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start mb-12 lg:mb-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-light text-gray-900 mb-4">
                Tu <span className="font-bold italic">plataforma</span> de{" "}
                <span className="font-bold italic">confianza.</span>
              </h2>
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold">frontix®</span> permite conectar en
                cada comunidad a los distintos participantes solucionando la
                gestión de usuarios y el monitoreo de accesos en una sola
                plataforma.
              </p>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
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

        <div className="hidden lg:block">
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
