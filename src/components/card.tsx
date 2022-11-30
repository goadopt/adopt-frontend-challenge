export interface CookieProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}

export function Card({ image, name, description, price }: CookieProps) {
  return (
    <div className="rounded-md mb-4 flex items-center shadow-[2px_4px_10px_rgba(0,0,0,0.25)] px-6 py-4 gap-4">
      <img className="max-w-24 max-h-24" src={image} alt="" />
      <div>
        <h4 className="text-lg">
          {name} <label className="text-gray-500 ml-1">R$ {price}</label>
        </h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
