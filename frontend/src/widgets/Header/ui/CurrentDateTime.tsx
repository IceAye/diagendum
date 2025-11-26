import { useEffect, useState } from 'react';

export const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const userLocale: string = navigator.language || 'en-GB';

  const formattedDate: string = dateTime.toLocaleDateString(userLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedWeekday: string = dateTime.toLocaleDateString(userLocale, {
    weekday: 'long',
  });

  const formattedTime: string = dateTime.toLocaleTimeString(userLocale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return (
    <div>
      <div>{formattedDate}</div>
      <div>{formattedWeekday}</div>
      <div>{formattedTime}</div>
    </div>
  );
};
