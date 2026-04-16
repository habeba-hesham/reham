import { useState } from 'react';
import Modal from './Modal';
import Journey from './sections/Journey';
import Moments from './sections/Moments';
import Gift from './sections/Gift';
import Message from './sections/Message';
import Playlist from './sections/Playlist';
import Certificate from './sections/Certificate';
import Conversation from './sections/Conversation';
type Section =
  | 'journey'| 'moments'| 'gift'| 'message'| 'playlist'| 'Conversation'| 'Certificate'| null;

interface CardItem {
  id: Section;
  icon: string;
  label: string;
  modalTitle: string;
}

const cards: CardItem[] = [
  { id: 'journey', icon: '📸', label: 'Journey', modalTitle: 'Our Journey' },
  { id: 'moments', icon: '⏳', label: 'Moments', modalTitle: 'Our Moments' },
  { id: 'gift', icon: '🎟️', label: 'Tickets', modalTitle: 'Your Tickets' },
  { id: 'message', icon: '💌', label: 'Message', modalTitle: 'A Message' },
  { id: 'playlist', icon: '🎵', label: 'Playlist', modalTitle: 'Playlist' },
  { id: 'Conversation', icon: '💬', label: 'Conversation', modalTitle: 'Conversation' },
  { id: 'Certificate', icon: '🏅', label: 'Certificate', modalTitle: 'Certificate' },
];

export default function MainPage() {
  const [active, setActive] = useState<Section>(null);
  const activeCard = active ? cards.find(c => c.id === active) : null;

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#FFD8DF' }}
    >
      <div className="text-center">

        

        {/* Icons فقط */}
        <div className="flex justify-center gap-14 flex-wrap">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col items-center">

              <button
                onClick={() => setActive(card.id)}
                className="text-7xl transition-all duration-300 hover:scale-125 hover:-translate-y-2"
              >
                {card.icon}
              </button>

              <p
                className="mt-4 text-lg font-medium"
                style={{ color: '#CA6180' }}
              >
                {card.label}
              </p>

            </div>
          ))}
        </div>
      </div>
      <p
        className="absolute bottom-12 w-full text-center text-6xl font-semibold tracking-wide"
        style={{ color: '#CA6180' }}
      >
        Made with love
      </p>
      {/* Modal */}
      {active && activeCard && (
        <Modal
          title={activeCard.modalTitle}
          icon={activeCard.icon}
          onClose={() => setActive(null)}
          fullHeight={active === 'journey' || active === 'playlist'|| active === 'Conversation'}
        >
          {active === 'journey' && <Journey />}
          {active === 'moments' && <Moments />}
          {active === 'gift' && <Gift />}
          {active === 'message' && <Message />}
          {active === 'playlist' && <Playlist />}
          {active === 'Certificate' && <Certificate />}
          {active === 'Conversation' && <Conversation />}
        </Modal>
      )}
    </div>
  );
}