export default function PhotoCard({ image, title, description }) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-1">
        <h3 className="font-semibold text-left text-sm text-gray-900 ">{title}</h3>
      </div>
    </div>
  );
}
