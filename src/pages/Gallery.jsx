import '../App.css';
import Header from '../components/Header';
import PhotoCard from '../components/PhotoCard';

const photoImportsVietnam = import.meta.glob('../photos/vietnam/*.jpg', {
  eager: true,
  import: 'default',
});

const photoImportsNYC = import.meta.glob('../photos/new_york/*.jpg', {
  eager: true,
  import: 'default',
});

const photoImportsPT = import.meta.glob('../photos/portugal/*.JPG', {
  eager: true,
  import: 'default',
});

const photosViet = Object.entries(photoImportsVietnam)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => {
    const fileName = path.split('/').pop() ?? '';
    const frameId = fileName.replace('.jpg', '');

    return {
      image: src,
      title: `${frameId}`,
    };
  });

  const photosNYC = Object.entries(photoImportsNYC)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => {
    const fileName = path.split('/').pop() ?? '';
    const frameId = fileName.replace('.jpg', '');

    return {
      image: src,
      title: `${frameId}`,
    };
  });

   const photosPT = Object.entries(photoImportsPT)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => {
    const fileName = path.split('/').pop() ?? '';
    const frameId = fileName.replace('.JPG', '');

    return {
      image: src,
      title: `${frameId}`,
    };
  });



export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white font-arial">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Photo Gallery</h1>
            <p className="text-gray-600 text-md">
              Here I try my best to capture moments in my life. Most of the photos were taken on Kodak Gold 200 35mm film.
            </p>
          </div>
          <h4 className="text-2xl font-bold mb-4 mt-8 text-left">Vietnam</h4>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            {photosViet.map((photo) => (
              <PhotoCard key={photo.image} {...photo} />
            ))}
          </div>
          <h4 className="text-2xl font-bold mb-4 mt-8 text-left">New York</h4>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            
            {photosNYC.map((photo) => (
              <PhotoCard key={photo.image} {...photo} />
            ))}
          </div>
          <h4 className="text-2xl font-bold mb-4 mt-8 text-left">Portugal</h4>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            
            {photosPT.map((photo) => (
              <PhotoCard key={photo.image} {...photo} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
