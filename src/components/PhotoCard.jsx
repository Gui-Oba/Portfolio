export default function PhotoCard({ image, title, description, onClick }) {
  const interactive = typeof onClick === 'function';

  const handleKeyDown = (event) => {
    if (!interactive) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`bg-white overflow-hidden ${
        interactive
          ? 'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900'
          : ''
      }`}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={interactive ? handleKeyDown : undefined}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full cursor-zoom-in object-cover transition-transform hover:-translate-y-1"
        />
      </div>
      <div className="p-1">
        <h3 className="font-semibold text-left text-sm text-white">{title}</h3>
        {description && <p className="text-xs text-gray-600 mt-1">{description}</p>}
      </div>
    </div>
  );
}
