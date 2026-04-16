import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface Props {
  title: string;
  icon: string;
  onClose: () => void;
  children: ReactNode;
  fullHeight?: boolean;
}

export default function Modal({ title, icon, onClose, children, fullHeight }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{
        background: 'rgba(255, 200, 215, 0.35)',
        backdropFilter: 'blur(12px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`animate-slide-up w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl ${
          fullHeight ? 'max-h-[75vh]' : ''
        }`}
        style={{
          background: 'linear-gradient(160deg, #fff8fa 0%, #fff0f5 100%)',
          boxShadow: '0 15px 70px rgba(255, 100, 150, 0.25)',
          border: '1px solid rgba(202, 97, 128, 0.15)',
        }}
      >
        {/* الهيدر */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid rgba(255, 182, 200, 0.25)' }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <h2 className="text-lg font-bold" style={{ color: '#CA6180' }}>
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(255, 182, 200, 0.25)',
              color: '#CA6180',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* المحتوى */}
        <div
          className={`overflow-y-auto ${
            fullHeight ? 'max-h-[calc(75vh-70px)]' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}