import { Music, ExternalLink, Play } from 'lucide-react';

interface Song {
  title: string;
  url: string;
}

const songs: Song[] = [
  { title: 'Track 1', url: 'https://open.spotify.com/track/10UqRIs3ADAMYBsLN5NZTW' },
  { title: 'Track 2', url: 'https://open.spotify.com/track/2TKRLhUZxSQgIuDVrtfx9a' },
  { title: 'Track 3', url: 'https://open.spotify.com/track/0ZJ2vlWyCoMA52VbECDMEL' },
  { title: 'Track 4', url: 'https://open.spotify.com/track/1Z2EZuhLqHvLXlhYs2McXy' },
  { title: 'Track 5', url: 'https://open.spotify.com/track/7bJUDeSABh3Ej1EFnafDGL' },
  { title: 'Track 6', url: 'https://open.spotify.com/track/4hDWCmaD5nZBAtaTYfWVlO' },
  { title: 'Track 7', url: 'https://open.spotify.com/track/5OcVGQFVNvHt25O5ko22tF' },
  { title: 'Track 8', url: 'https://open.spotify.com/track/0AljsXDnXma3TRIEwaAa5o' },
  { title: 'Track 9', url: 'https://open.spotify.com/track/1Gvh0RpX1LUEshIdm5tcQk' },
  { title: 'Track 10', url: 'https://open.spotify.com/track/6ObNEe2SWfuJ0NMp1xC6uX' },
  { title: 'Track 11', url: 'https://open.spotify.com/track/6u5F7iulJgzOswzPix4riq' },
];

export default function Playlist() {
  return (
    <div className="p-5">

      <div className="flex items-center justify-center gap-2 mb-4">
        <Music size={18} style={{ color: '#CA6180' }} />
        <p className="text-sm font-semibold" style={{ color: '#CA6180' }}>
          A playlist made just for you 🎵
        </p>
        <Music size={18} style={{ color: '#CA6180' }} />
      </div>

      <div className="space-y-3">
        {songs.map((song) => (
          <a
            key={song.url}
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(202,97,128,0.2)',
            }}
          >
            {/* 🎵 أيقونة بلون ثابت */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background: 'linear-gradient(135deg, #CA6180, #FCB7C7)',
              }}
            >
              <Play size={18} color="white" />
            </div>

            <div className="flex-1 text-left">
              <p className="font-bold text-sm" style={{ color: '#CA6180' }}>
                {song.title}
              </p>
            </div>

            <ExternalLink size={14} style={{ color: '#CA6180' }} />
          </a>
        ))}
      </div>

    </div>
  );
}