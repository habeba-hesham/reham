interface Props {
  onStart: () => void;
}

export default function StartScreen({ onStart }: Props) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-50"
      style={{ background: '#FFD8DF' }}
    >
      <img
        src="/bow.png"
        alt="ribbon"
        className="w-80 mb-10 pointer-events-none"
      />

      <button
        onClick={onStart}
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