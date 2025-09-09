import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Monitoring() {
  return (
    <div className="w-full relative">
      <div className="hidden lg:block">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-4 text-highlighted-text uppercase tracking-wide">
              CENTRALES DE MONITOREO
            </h3>
            <h2 className="text-4xl lg:text-5xl text-white mb-8 leading-tight tracking-wider">
              Ofrecé a tus clientes la libertad de{" "}
              <span className="text-highlighted-text">
                gestionar su confianza en tiempo real.
              </span>
            </h2>
          </div>

          <div className="flex-1 flex flex-col items-end">
            <div className="relative">
              <Image
                src="/images/monitoring.svg"
                alt="Monitoreo de accesos"
                width={500}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-3 bg-highlighted-text text-white px-5 py-3 rounded-full font-medium text-lg hover:bg-highlighted-text/90 transition-colors
							absolute top-62 right-80"
            >
              <ArrowUpRightIcon className="w-5 h-5" />
              Contactanos
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16">
          <div className="md:col-span-2 backdrop-blur-sm border border-highlighted-text rounded-2xl px-6 py-14 flex items-center gap-4 transition-colors justify-between">
            <div className="max-w-48">
              <span className="text-white font-bold tracking-wider">SaaS:</span>
              <p className="text-white text-sm font-medium tracking-wider">
                Sin necesidad de infraestructura propia ni instalación.
              </p>
            </div>
            <Image
              src="/icons/SaaSIcon.svg"
              alt="SaaS"
              width={80}
              height={80}
            />
          </div>

          <div className="md:col-span-2 backdrop-blur-sm border border-highlighted-text rounded-2xl px-6 py-14 flex items-center gap-4 transition-colors justify-between">
            <div className="max-w-48">
              <span className="text-white font-bold tracking-wider">
                AllinOne:
              </span>
              <p className="text-white text-sm font-medium tracking-wider">
                Plataforma centralizada integrada a Softguard.
              </p>
            </div>
            <Image
              src="/icons/AppsIcon.svg"
              alt="AllinOne"
              width={50}
              height={50}
            />
          </div>

          <div className="md:col-span-1 bg-highlighted-text rounded-2xl px-6 py-4 flex flex-col justify-between items-start hover:bg-highlighted-text/90 transition-colors relative min-h-[200px]">
            <div className="w-12 h-12  border border-white rounded-full flex items-center justify-center self-end">
              <ArrowUpRightIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white text-2xl font-medium tracking-widest">
                Demo
              </p>
              <p className="text-white text-lg font-medium tracking-widest">
                Plataforma
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-12 justify-start">
          {[
            "Innovación continua",
            "Confianza",
            "Excelencia operativa",
            "Adaptabilidad",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-white text-gray-800 px-8 py-4 rounded-full text-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold mb-4 text-focused-text uppercase tracking-wide">
            CENTRALES DE MONITOREO
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            Ofrecé a tus clientes la libertad de{" "}
            <span className="text-focused-text">
              gestionar su confianza en tiempo real.
            </span>
          </h2>
        </div>

        <div className="relative mb-8 flex justify-center">
          <Image
            src="/images/monitoring.svg"
            alt="Monitoreo de accesos"
            width={400}
            height={320}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex justify-center mb-12">
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-3 bg-focused-text text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-focused-text/90 transition-colors"
          >
            <ArrowUpRightIcon className="w-5 h-5" />
            Contactanos
          </Link>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-focused-text rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SaaS</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">
                <span className="text-focused-text">SaaS:</span> Sin necesidad
                de infraestructura propia ni instalación.
              </p>
            </div>
            <ArrowUpRightIcon className="w-4 h-4 text-white/60" />
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">
                <span className="text-focused-text">AllinOne:</span> Plataforma
                centralizada integrada a Softguard.
              </p>
            </div>
            <ArrowUpRightIcon className="w-4 h-4 text-white/60" />
          </div>

          <div className="bg-focused-text rounded-2xl p-4 flex items-center gap-3">
            <div className="flex-1">
              <p className="text-white text-sm font-medium">
                <span className="font-bold">Demo</span>
                <br />
                <span className="text-white/80">Plataforma</span>
              </p>
            </div>
            <ArrowUpRightIcon className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "Innovación continua",
            "Adaptabilidad",
            "Confianza",
            "Excelencia operativa",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-white text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
