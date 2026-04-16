const tickets = [
  { title: 'CINEMA' },
  { title: 'WALK' },
  { title: 'HANG OUT' },
];

export default function Gift() {
  return (
    <div className="p-6 flex flex-col items-center gap-5 bg-[#FFD8DF]">
      {tickets.map((ticket, index) => (
        <div
          key={index}
          className="flex w-full max-w-[360px] h-[110px]"
          style={{
            flexDirection: 'row-reverse',
            filter: 'drop-shadow(0 4px 12px rgba(180,60,100,0.18))',
          }}
        >
          {/* Main ticket body */}
          <div
            className="flex-1 relative flex flex-col justify-center items-end px-4 pr-5"
            style={{
              background: '#C94F72',
              borderRadius: '0 12px 12px 0',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 55%, -10px 50%, 0 45%)',
            }}
          >
            {/* Inner dashed border */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '7px 7px 7px 0',
                border: '1.5px dashed rgba(255,255,255,0.45)',
                borderLeft: 'none',
                borderRadius: '0 8px 8px 0',
              }}
            />

            {/* Notch circle */}
            <div
              className="absolute z-10 rounded-full"
              style={{
                left: -10,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 20,
                height: 20,
                background: '#FFD8DF',
              }}
            />

            {/* Top label */}
            <span
              className="text-white/70 font-medium text-right w-full"
              style={{
                fontSize: 10,
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 4,
              }}
            >
              * this is good for one *
            </span>

            {/* Title */}
            <h2
              className="text-white font-black uppercase text-right w-full leading-tight"
              style={{ fontSize: 22, letterSpacing: 3 }}
            >
              {ticket.title}
            </h2>

            {/* Number */}
            <span
              className="absolute bottom-3 left-5 text-white/50 font-medium tracking-widest"
              style={{ fontSize: 9 }}
            >
              01234
            </span>
          </div>

          {/* Stub */}
          <div
            className="w-[52px] relative flex items-center justify-center"
            style={{
              background: '#B8395A',
              borderRadius: '12px 0 0 12px',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, calc(100% + 10px) 50%, 100% 55%, 100% 100%, 0 100%)',
            }}
          >
            {/* Inner dashed border */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '7px 0 7px 7px',
                border: '1.5px dashed rgba(255,255,255,0.3)',
                borderRight: 'none',
                borderRadius: '8px 0 0 8px',
              }}
            />

            {/* Stub text */}
            <span
              className="font-bold text-white/55 uppercase"
              style={{
                fontSize: 9,
                letterSpacing: 2,
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
            >
              LOVE TOKEN
            </span>
          </div>

        </div>
      ))}
    </div>
  );
}