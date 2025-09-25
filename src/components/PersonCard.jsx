import React from "react";

export default function PersonCard({ person }) {
  return (
    <div className="w-60 bg-white shadow-lg rounded-2xl hover:shadow-xl transition duration-300 p-4 md:p-6 text-center">
      <h2 className="text-lg md:text-xl font-semibold mb-1 leading-snug">
        {person.name}
      </h2>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        {person.description}
      </p>
    </div>
  );
}
