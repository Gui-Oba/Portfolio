import { useEffect, useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import PhotoCard from '../components/PhotoCard';

const photoImportsVietnam = import.meta.glob('../photos/vietnam/*.{jpg,JPG}', {
  eager: true,
  import: 'default',
});

const photoImportsNYC = import.meta.glob('../photos/new_york/*.{jpg,JPG}', {
  eager: true,
  import: 'default',
});

const photoImportsPT = import.meta.glob('../photos/portugal/*.{jpg,JPG}', {
  eager: true,
  import: 'default',
});

const toPhotoData = (photoEntries) =>
  Object.entries(photoEntries)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, src]) => {
      const fileName = path.split('/').pop() ?? '';
      const frameId = fileName.replace(/\.(jpg|JPG)$/u, '');

      return {
        image: src,
        title: frameId,
      };
    });

const photosViet = toPhotoData(photoImportsVietnam);
const photosNYC = toPhotoData(photoImportsNYC);
const photosPT = toPhotoData(photoImportsPT);

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    if (!activePhoto) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActivePhoto(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activePhoto]);

  const closeOverlay = () => setActivePhoto(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Photo Gallery</h1>
            <p className="text-gray-600 text-md">
              Photography is one of my passions, and it is how I collect moments from my journeys. Most of the photos were taken on Kodak Gold 200 35mm film.
            </p>
          </div>
          <h4 className="text-xl font-bold mb-4 mt-8 text-left">Vietnam | 08-2025</h4>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            {photosViet.map((photo) => (
              <PhotoCard
                key={photo.image}
                {...photo}
                onClick={() => setActivePhoto(photo)}
              />
            ))}
          </div>
          <h4 className="text-xl font-bold mb-4 mt-8 text-left">New York | 03-2025</h4>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            {photosNYC.map((photo) => (
              <PhotoCard
                key={photo.image}
                {...photo}
                onClick={() => setActivePhoto(photo)}
              />
            ))}
          </div>
          <h4 className="text-xl font-bold mb-4 mt-8 text-left">Portugal | 08-2024</h4>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            {photosPT.map((photo) => (
              <PhotoCard
                key={photo.image}
                {...photo}
                onClick={() => setActivePhoto(photo)}
              />
            ))}
          </div>
        </div>
      </main>
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={closeOverlay}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeOverlay}
              className="absolute top-4 right-4 text-white p-2 hover:underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close photo"
            >
              Back
            </button>
            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-semibold">{activePhoto.title}</h3>
              {activePhoto.description && (
                <p className="text-sm text-white/80 mt-1">{activePhoto.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="bg-white mt-auto">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Gui Oba. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
