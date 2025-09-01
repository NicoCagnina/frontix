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
    <section id={id} className={`py-16 px-4 bg-bg-secondary ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            {title}
          </h2>
        )}
        <div>{children}</div>
      </div>
    </section>
  );
}
