import { useEffect, useState } from 'react';

interface Quote {
  q: string;
  a: string;
}

export const useMotivationQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/quotes');
        const data: Quote[] = await res.json();
        setQuote(data[0]);
      } catch (err) {
        console.log(err);
        setError('Failed to load a quote');
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return { quote, loading, error };
};
