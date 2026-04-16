import { useState, useEffect } from 'react';

const FRIENDSHIP_START = new Date('2022-09-21T00:00:00');

function getElapsed(from: Date) {
  const now = new Date();
  const diff = now.getTime() - from.getTime();

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;

  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;

  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;

  const days = Math.floor(totalHours / 24);
  const years = Math.floor(days / 365);

  const remainingDays = days % 365;
  const months = Math.floor(remainingDays / 30);
  const finalDays = remainingDays % 30;

  return {
    years,
    months,
    days: finalDays,
    hours,
    minutes,
    seconds,
    totalDays: days,
  };
}

function CountUnit({
  value,
  label,
  delay = '0s',
}: {
  value: number;
  label: string;
  delay?: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-2"
      style={{ opacity: 1, animationDelay: delay }}
    >
      <div
        className="w-20 h-20 flex items-center justify-center rounded-2xl shadow-lg"
        style={{ background: 'linear-gradient(135deg, #ffb6c8, #ff7da0)' }}
      >
        <span className="text-white text-2xl font-bold">
          {value.toString().padStart(2, '0')}
        </span>
      </div>

      <span className="text-rose-500 text-xs font-semibold">
        {label}
      </span>
    </div>
  );
}

export default function Moments() {
  const [elapsed, setElapsed] = useState(() => getElapsed(FRIENDSHIP_START));

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(getElapsed(FRIENDSHIP_START));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-6 text-center">

      <p className="text-rose-400 text-sm mb-1">
        من أول لقاء 🌸
      </p>

      <p className="text-rose-600 text-lg font-bold mb-8">
         عارفين بعض من...
      </p>

      <div className="flex justify-center gap-3 flex-wrap mb-8">
        <CountUnit value={elapsed.years} label="سنوات" delay="0s" />
        <CountUnit value={elapsed.months} label="أشهر" delay="0.1s" />
        <CountUnit value={elapsed.days} label="أيام" delay="0.2s" />
        <CountUnit value={elapsed.hours} label="ساعات" delay="0.3s" />
        <CountUnit value={elapsed.minutes} label="دقائق" delay="0.4s" />
        <CountUnit value={elapsed.seconds} label="ثواني" delay="0.5s" />
      </div>

      <div
        className="rounded-2xl p-5 max-w-xs mx-auto"
        style={{
          background: 'linear-gradient(135deg, rgba(255,182,200,0.2), rgba(255,240,245,0.8))',
          border: '1px solid rgba(255,182,200,0.3)',
        }}
      >
        <p className="text-rose-500 text-sm">إجمالي الأيام </p>

        <p className="text-rose-700 text-3xl font-black">
          {elapsed.totalDays.toLocaleString('ar')}
        </p>

        <p className="text-rose-400 text-xs">
         
        </p>
      </div>

      <p className="text-rose-300 text-xs mt-8">
       كفايه لحد هنا بقي❤️
      </p>

    </div>
  );
}