import Image from "next/image";
import { FloatingCard } from "./ui/FloatingCard";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      {/* mobile */}
      <section className="flex flex-col lg:hidden relative w-[88%] min-h-[76vh] items-center justify-start text-white mt-6 pt-4">
        <div className="relative mx-auto px-6 pt-6 pb-24 text-left w-[94%] flex flex-col items-center justify-center">
          <div className="mb-8 space-y-1">
            <div className="flex flex-row gap-3 flex-wrap tracking-tight justify-start">
              <span className="font-extrabold text-4xl md:text-5xl leading-none">
                your
              </span>
              <span className="font-light italic text-white/90 text-4xl md:text-5xl leading-none">
                access
              </span>
            </div>

            <div className="flex flex-row gap-3 flex-wrap tracking-tight justify-start ml-4">
              <span className="font-extralight italic text-white/90 text-4xl md:text-5xl leading-none">
                your
              </span>
              <span className="font-extrabold text-4xl md:text-5xl leading-none">
                control
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 -z-10 w-[94%] rounded-[2rem] overflow-hidden">
          <Image
            src="/images/HeroImg.svg"
            alt="Hero background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <Image
          src="/images/FrontixF.svg"
          alt="Hero Card"
          width={250}
          height={250}
          className="z-4 opacity-90 left-[25%] top-[25%] absolute md:left-[35%] md:top-[20%] md:w-[350px] md:h-[350px]"
        />
        <FloatingCard
          title="Reservar Espacios"
          icon={
            <Image
              src="/icons/CalendarIcon.svg"
              alt="User"
              width={24}
              height={24}
            />
          }
          width="w-[65%]"
          className="absolute top-[63%] left-0 md:left-[15%] md:top-[65%]"
        />
        <FloatingCard
          title="Habilitar usuario"
          icon={
            <Image
              src="/icons/UsersIcon.svg"
              alt="User"
              width={24}
              height={24}
            />
          }
          width="w-[65%]"
          className="absolute top-[23%] -left-[4%] md:left-[18%] md:top-[30%]"
        />
        <FloatingCard
          title="Solicitar llave"
          icon={
            <Image src="/icons/KeyIcon.svg" alt="User" width={24} height={24} />
          }
          width="w-[55%]"
          className="absolute top-[40%] left-[50%] md:left-[65%] md:top-[43%] md:w-[30%]"
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="flex flex-row gap-4 justify-center opacity-60">
            <button className="hover:cursor-pointer transition-opacity duration-200">
              <Image
                src="/icons/AppStoreIcon.svg"
                alt="App Store"
                width={116}
                height={32}
                className="brightness-200 contrast-200 filter-white"
              />
            </button>
            <button className="hover:cursor-pointer transition-opacity duration-200">
              <Image
                src="/icons/GooglePlayIcon.svg"
                alt="Google Play"
                width={116}
                height={32}
                className="brightness-200 contrast-200 filter-white"
              />
            </button>
          </div>

          <button className="group flex items-center justify-center gap-3 text-white text-xl font-semibold min-w-[250px]">
            Solicitar demo
            <span className="w-9 h-9 rounded-full flex items-center justify-center transition-colors">
              <Image
                src="/icons/GetDemoIcon.svg"
                alt="Arrow Right"
                width={18}
                height={18}
              />
            </span>
          </button>
        </div>
      </section>
      {/* desktop */}
      <section className="hidden lg:flex relative w-full min-h-[80vh] sm:min-h-[70vh] items-center justify-center text-white mt-6">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 -z-10 w-[94%] sm:w-[92%] md:w-[90%] lg:w-[88%] xl:w-[84%] rounded-[2rem] overflow-hidden">
          <Image
            src="/images/HeroImg.svg"
            alt="Hero background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="relative mx-auto px-6 md:px-10 lg:px-2 py-10 sm:py-12 md:py-14 text-center md:text-left w-[94%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-5xl">
          <p className="uppercase text-xs md:text-sm lg:text-base font-semibold tracking-wider text-white/70 mb-2">
            Gestión smart de accesos electrónicos
          </p>

          <div className="flex flex-row gap-3 flex-wrap tracking-tight justify-center md:justify-start">
            <span className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              your
            </span>
            <span className="font-light italic text-white/90 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              access
            </span>
          </div>

          <div className="flex flex-row gap-3 flex-wrap tracking-tight justify-center md:justify-start lg:ml-14 xl:ml-24 -mt-5 ">
            <span className="font-extralight italic text-white/90 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              your
            </span>
            <span className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              control
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center md:items-start sm:flex-row sm:items-center gap-4 py-3">
            <button className="flex items-center gap-2 px-6 text-white text-lg sm:text-xl font-semibold hover:cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200">
              Solicitar demo
              <Image
                src="/icons/GetDemoIcon.svg"
                alt="Arrow Right"
                width={20}
                height={20}
              />
            </button>

            <div className="hidden sm:flex flex-col sm:flex-row gap-4">
              <button className="hover:cursor-pointer flex flex-col sm:flex-row gap-4 opacity-70 hover:opacity-100 transition-opacity duration-200">
                <Image
                  src="/icons/AppStoreIcon.svg"
                  alt="App Store"
                  width={120}
                  height={26}
                  className="brightness-200 contrast-200 filter-white"
                />
              </button>
              <button className="hover:cursor-pointer flex flex-col sm:flex-row gap-4 opacity-70 hover:opacity-100 transition-opacity duration-200">
                <Image
                  src="/icons/GooglePlayIcon.svg"
                  alt="Google Play"
                  width={120}
                  height={26}
                  className="brightness-200 contrast-200 filter-white"
                />
              </button>
            </div>
          </div>

          <div className="z-10">
            <Image
              src="/images/FrontixF.svg"
              alt="Hero Card"
              width={200}
              height={200}
              className="absolute lg:top-12 lg:left-[73%] xl:left-[65%] xl:top-4 w-56 md:w-60 lg:w-3/6 z-4 opacity-90"
            />
            <FloatingCard
              title="Reservar Espacios"
              icon={
                <Image
                  src="/icons/CalendarIcon.svg"
                  alt="User"
                  width={24}
                  height={24}
                />
              }
              className="absolute lg:top-12 lg:left-[73%] xl:left-[85%] xl:top-13 w-56 md:w-60 lg:w-64 xl:w-56"
            />
            <FloatingCard
              title="Habilitar usuario"
              icon={
                <Image
                  src="/icons/UsersIcon.svg"
                  alt="User"
                  width={24}
                  height={24}
                />
              }
              className="absolute lg:top-34 lg:left-[65%] xl:left-[60%] xl:top-25 w-56 md:w-60 lg:w-64 xl:w-56"
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
              className="absolute lg:top-56 lg:left-[70%] xl:left-[80%] xl:top-68 w-56 md:w-60 lg:w-64 xl:w-56"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
