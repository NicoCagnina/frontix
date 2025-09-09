import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  bgColor?: string;
}

export default function Section({
  id,
  children,
  className,
  fullWidth = false,
  bgColor = "bg-bg-secondary",
}: SectionProps) {
  if (fullWidth) {
    return (
      <section
        id={id}
        className={`w-screen relative left-1/2 transform -translate-x-1/2 py-8 ${bgColor} ${className}`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div>{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`py-8 px-4 ${bgColor} ${className}`}>
      <div className="container mx-auto max-w-7xl">
        <div>{children}</div>
      </div>
    </section>
  );
}
