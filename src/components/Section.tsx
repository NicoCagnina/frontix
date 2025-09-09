import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`py-8 px-4 bg-bg-secondary ${className}`}>
      <div className="container mx-auto max-w-7xl">
        <div>{children}</div>
      </div>
    </section>
  );
}
