import Image from "next/image";

export default function Customers() {
  return (
    <div className="w-full justify-center items-center flex flex-col gap-4">
      <h3 className="text-sm font-semibold mb-4 text-section-title uppercase tracking-wide text-center">
        CON LA <span className="font-bold italic">CONFIANZA</span> DE MÁS DE
        10.000 ACCESOS
      </h3>
      <Image
        src="/images/Customers.svg"
        alt="Customers"
        width={1200}
        height={1200}
      />
      <div className="w-full h-px bg-section-title mt-20" />
    </div>
  );
}
