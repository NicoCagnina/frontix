import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A152B] text-white">
      <div className="hidden lg:block max-w-3/4 mx-auto">
        <div className="px-8 py-12">
          <div className="flex items-center justify-around max-w-7xl mx-auto">
            <Image
              src="/images/FiscData.svg"
              alt="Data Fiscal QR Code"
              width={120}
              height={100}
              className="w-25 h-25"
            />

            <div className="flex items-center">
              <Image
                src="/images/FrontixLogoFooter.svg"
                alt="Frontix Logo"
                width={180}
                height={180}
                className="h-10"
              />
            </div>

            <div className="text-left">
              <h3 className="text-white font-semibold text-md tracking-wider mb-2">
                Oficinas comerciales
              </h3>
              <p className="text-white text-md tracking-wider">
                Santa Fe 2585, Rosario Argentina
              </p>
              <p className="text-white text-md tracking-wider">
                Piso 4, oficina 38
              </p>
            </div>

            <div className="text-left">
              <h3 className="text-white font-semibold text-md tracking-wider mb-2">
                Asistencia técnica
              </h3>
              <p className="text-white text-md tracking-wider">
                +54 9 3415005178
              </p>
              <p className="text-white text-md tracking-wider">
                servicio@frontix.com.ar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="px-6 py-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Frontix Logo"
                width={180}
                height={180}
                className="h-20"
              />
            </div>

            <div className="text-center">
              <h3 className="text-white font-semibold text-sm mb-2">
                Oficinas comerciales
              </h3>
              <p className="text-white text-sm">
                Santa Fe 2585, Rosario Argentina
              </p>
              <p className="text-white text-sm">Piso 4, oficina 38</p>
            </div>

            <div className="text-center">
              <h3 className="text-white font-semibold text-sm mb-2">
                Asistencia técnica
              </h3>
              <p className="text-white text-sm">+54 9 3415005178</p>
              <p className="text-white text-sm">servicio@frontix.com.ar</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#4A90E2] p-4 rounded-lg">
                <Image
                  src="/images/FiscData.svg"
                  alt="Data Fiscal QR Code"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <div className="text-white text-xs font-bold uppercase mt-2 text-center">
                <div>DATA</div>
                <div>FISCAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-8 bg-footer-bg"></div>
    </footer>
  );
}
