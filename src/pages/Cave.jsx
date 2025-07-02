
import '../App.css'; // Ensure styles are applied
import CaveImg from '../assets/Cave.svg'; // Import the cave image



export default function Cave() {
  return (
    <div className="justify-items-center h-[90vh] bg-white">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center h-full">
      
        <h1 className="flex items-center mb-8">
          <img src={CaveImg} className="w-100" />
        </h1>
        
        <p className="text-2xl font-light italic text-black text-center mt-8">
          "The Cave you fear to enter holds the treasure you seek."
        </p>
      </main>
    </div>
  );
}
