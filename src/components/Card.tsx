interface CardProps {
  title: string;
  text: string;
}

export default function Card({ title, text }: CardProps) {
  return (
    <div className="border rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
