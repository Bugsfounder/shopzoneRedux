'use client';
import { useState, useEffect } from 'react';

export default function RandomQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        setLoading(true);
        const res = await fetch('https://dummyjson.com/quotes/random');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setQuote(data.quote);
        setAuthor(data.author);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchQuote();
  }, []);

  if (loading) return <div data-testid="quote-loading">Loading quote...</div>;
  if (error) return <div data-testid="quote-error" className="text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl my-4 italic border-l-4 border-blue-500">
      <p className="text-gray-700 dark:text-gray-300">"{quote}"</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-right">- {author}</p>
    </div>
  );
}
