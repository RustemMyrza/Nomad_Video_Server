import React, { useState, useEffect } from 'react';

function DateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = now.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const weekday = now.toLocaleDateString('ru-RU', { weekday: 'long' });
  const date = now.toLocaleDateString('ru-RU');

  return (
    <div className="bg-white text-black rounded-xl border border-black px-4 py-2 mx-auto shadow-md">
      <div className="text-center text-3xl font-semibold mb-2">
        {time}
      </div>
      <div className="flex justify-between text-sm font-medium">
        <div className="text-3xl">{weekday.charAt(0).toUpperCase() + weekday.slice(1)}</div>
        <div className="text-3xl">{date}</div>
      </div>
    </div>
  );
}

export default DateTime;
