import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const photos = [
  { src: '/22.jpeg' },
  { src: '/31.jpeg' },
  { src: '/23.jpeg' },
  { src: '/24.jpeg' },
  { src: '/25.jpeg' },
  { src: '/32.jpeg' },
  { src: '/27.jpeg' },
  { src: '/28.jpeg' },
  { src: '/29.jpeg' },
  { src: '/30.jpeg' },
];

export default function Conversation() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + photos.length) % photos.length);
  };

  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % photos.length);
  };

  return (
    <div className="p-5">
      <p className="text-center text-rose-400 text-sm mb-6">
        اضغطي على أي صورة عشان تكبير 
      </p>
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            style={{ aspectRatio: i % 3 === 0 ? '1/1.2' : '1/1' }}
            onClick={() => setLightbox(i)}
          >
            <img
              src={photo.src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && photos[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.85)' }}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
            onClick={close}
          >
            <X size={20} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={22} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={22} />
          </button>

          <div className="max-w-lg w-full px-16">
            <img
              src={photos[lightbox].src}
              alt=""
              className="w-full rounded-2xl shadow-2xl animate-scale-in"
              style={{ maxHeight: '70vh', objectFit: 'contain' }}
            />

            <p className="text-white/50 text-center text-xs mt-2">
              {lightbox + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}