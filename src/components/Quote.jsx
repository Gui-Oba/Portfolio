import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import quotesCSV from '../assets/quotes.csv?url';

export default function QuoteOfTheDay() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    Papa.parse(quotesCSV, {
      download: true,
      header: true,
      complete: (results) => {
        const quotes = results.data;

        // Pick quote based on current day of the month
        const todayIndex = new Date().getDate() % quotes.length;
        const todayQuote = quotes[todayIndex];

        setQuote(todayQuote);
      },
    });
  }, []);

  if (!quote) return <p>Loading quote...</p>;

  return (
    <div className="py-12 px-6 text-center text-gray-800">
      <blockquote className="italic text-gray-600 font-serif text-xl max-w-3xl mx-auto">
        “{quote.quote}”
      </blockquote>
      <p className="mt-4 text-sm"> {quote.author}</p>
    </div>
  );
}
