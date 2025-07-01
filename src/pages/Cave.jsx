
import '../App.css'; // Ensure styles are applied
import CaveImg from '../assets/Cave.svg'; // Import the cave image



export default function Cave() {
  return (
    <div className="justify-items-center h-[90vh] bg-white">
      {/* Main Content */}
      <main className="flex-grow">
      
          <h1 className="flex sm:translate-y-[16vh] items-center mb-8">
            <img src={CaveImg} className="w-100" />
          </h1>
        
        <h1 className="text-2xl font-light italic text-black text-center mt-8">
          "The Cave you fear to enter holds the treasure you seek."
        </h1>
      </main>
    </div>
  );
}
