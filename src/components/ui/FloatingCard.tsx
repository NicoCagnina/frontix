export function FloatingCard({
  title,
  icon,
  className,
  width = "w-full",
}: {
  title: string;
  icon: React.ReactNode;
  className?: string;
  width?: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 px-4 py-2 rounded-xl shadow-lg bg-white/55 backdrop-blur-md border border-white/20 ${width} sm:w-auto ${className} z-10`}
    >
      {icon}
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-medium text-purple-900/80">
          USUARIOS
        </span>
        <span className="text-s font-medium text-gray-800">{title}</span>
      </div>
    </div>
  );
}
