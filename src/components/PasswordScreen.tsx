import { useState } from 'react';

interface Props {
  onStart: () => void;
}

const PASSWORD = 'العباسية';

export default function StartScreen({ onStart }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleStart = () => {
    if (value === PASSWORD) {
      onStart();
    } else {
      setError(true);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-50"
      style={{ background: '#FFD8DF' }}
    >
      <img
        src="/bow.png"
        alt="ribbon"
        className="w-80 mb-8 pointer-events-none"
      />

      {/* input الباسورد */}
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError(false);
        }}
        placeholder="ادخلي كلمة السر"
        className="mb-4 px-6 py-3 rounded-full text-center outline-none"
        style={{
          border: '2px solid #CA6180',
          background: 'white',
          color: '#CA6180',
          width: '220px',
        }}
      />

      {/* الهنت */}
      {error && (
        <p className="text-sm mb-4" style={{ color: '#CA6180' }}>
          مساعده:مكان المفروض نكون فيه
        </p>
      )}

      <button
        onClick={handleStart}
        className="px-10 py-4 rounded-full text-lg font-bold cursor-pointer"
        style={{
          background: '#CA6180',
          color: 'white',
        }}
      >
        START
      </button>
    </div>
  );
}