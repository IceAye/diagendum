import { useMotivationQuote } from '@/features/motivationQuote/model/useMotivationQuote.ts';

export const MotivationQuote = () => {
  const { quote, loading, error } = useMotivationQuote();

  if (loading) {
    return <p className='text-gray-500 italic'>Loading quote...</p>;
  }
  if (error) {
    return <p className='text-red-500'>{error}</p>;
  }
  if (!quote) {
    return null;
  }

  return (
    <blockquote className='italic text-lg'>
      “{quote?.q}” — {quote?.a}
    </blockquote>
  );
};
