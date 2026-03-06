'use client';

import { useRef, useEffect } from 'react';
import { SplineBackground } from '@/components/SplineBackground';
import { useAudioPlayer, Track } from '@/hooks/useAudioPlayer';

const tracks: Track[] = [
  { num: "01", title: "Bugrabom", src: "/Underbelly/01-Bugrabom.m4a" },
  { num: "02", title: "Center Of Town", src: "/Underbelly/02-Center-Of-Town.m4a" },
  { num: "03", title: "Mystery Girl", src: "/Underbelly/03-Mystery-Girl.m4a" },
  { num: "04", title: "I Tasted Your Kiss", src: "/Underbelly/04-I-Tasted-Your-Kiss.m4a" },
  { num: "05", title: "Marmalade", src: "/Underbelly/05-Marmalade.m4a" },
  { num: "06", title: "I Don't Like Music (She Said)", src: "/Underbelly/06-I-Dont-Like-Music-She-Said.m4a" },
  { num: "07", title: "Beautiful Girl", src: "/Underbelly/07-Beautiful-Girl.m4a" },
  { num: "08", title: "Say What You Want", src: "/Underbelly/08-Say-What-You-Want.m4a" },
  { num: "09", title: "Oh, Tangerine", src: "/Underbelly/09-Oh-Tangerine.m4a" },
  { num: "10", title: "Why Why Why", src: "/Underbelly/10-Why-Why-Why.m4a" },
  { num: "11", title: "Terrible Dragonfly Vs. '80s Brunch", src: "/Underbelly/11-Terrible-Dragonfly-Vs.-80s-Brunch.m4a" },
  { num: "12", title: "Lady Entropy", src: "/Underbelly/12-Lady-Entropy.m4a" },
];

export default function Home() {
  const player = useAudioPlayer(tracks);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Space bar toggles playback
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;
      // Don't hijack space when user is typing in an input/textarea
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      e.preventDefault();
      player.toggle();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [player.toggle]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressBarRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    player.seek(Math.max(0, Math.min(1, fraction)));
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #8B6DB7 0%, #5E3D7A 100%)' }}>
      {/* ── 3D Background Layer ── */}
      <SplineBackground />

      {/* ── Geometric Pattern Overlay ── */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle, var(--soft-white) 1.5px, transparent 1.5px),
            radial-gradient(circle, var(--sunflower) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 32px 32px",
          backgroundPosition: "0 0, 16px 16px",
          animation: "drift 60s linear infinite",
        }}
      />

      {/* ── Main Content ── */}
      <main className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        {/* ── Header / Branding ── */}
        <header className="mb-12 text-center animate-fade-in-up">
          {/* Decorative arch */}
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="block h-[2px] w-12 bg-hot-pink rounded-full" />
            <span className="block h-[2px] w-6 bg-sunflower rounded-full" />
            <span className="block h-[2px] w-12 bg-hot-pink rounded-full" />
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-warm-gray">
            Mumblypeg presents
          </p>

          <h1 className="text-6xl font-extrabold leading-none tracking-[-0.02em] text-soft-white sm:text-8xl md:text-[112px]">
            Under
            <span className="text-hot-pink">belly</span>
          </h1>

          <p className="mt-5 max-w-md mx-auto text-lg leading-relaxed text-warm-gray">
            Rock, pop, funk, disco, indie — all at once.
          </p>
        </header>

        {/* ── Media Player ── */}
        <section
          id="player"
          className="w-full max-w-2xl animate-fade-in-up-delayed"
        >
          <div className="pointer-events-auto relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] shadow-2xl backdrop-blur-xl">
            {/* Color-block accent bar */}
            <div className="flex h-1.5">
              <div className="flex-1 bg-lilac" />
              <div className="flex-1 bg-hot-pink" />
              <div className="flex-1 bg-sunflower" />
              <div className="flex-1 bg-sky-blue" />
              <div className="flex-1 bg-spearmint" />
            </div>

            <div className="p-8 sm:p-10">
              {/* Album art + now playing */}
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                {/* Album art placeholder */}
                <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-lilac via-hot-pink to-sunflower shadow-lg sm:h-52 sm:w-52">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Geometric pattern inside album art */}
                    <svg
                      viewBox="0 0 100 100"
                      className="h-full w-full opacity-20"
                      aria-hidden="true"
                    >
                      <pattern
                        id="zigzag"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <polyline
                          points="0,10 10,0 20,10"
                          fill="none"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                      </pattern>
                      <rect width="100" height="100" fill="url(#zigzag)" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/underbelly-cover-art.png"
                      alt="Underbelly album cover"
                      className="w-[70%] h-auto object-contain"
                      style={{ filter: 'drop-shadow(0 8px 12px rgba(58, 36, 80, 0.6))' }}
                    />
                  </div>
                </div>

                {/* Track info + controls */}
                <div className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left">
                  <span
                    className="mb-1 font-mono text-xs tracking-wider text-warm-gray"
                    style={{
                      fontFamily: "var(--font-mono), 'Courier New', monospace",
                    }}
                  >
                    {player.currentTrack.num} / {String(tracks.length).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl font-bold tracking-[-0.01em] text-soft-white sm:text-3xl">
                    {player.currentTrack.title}
                  </h2>
                  <p className="mt-1 text-base text-warm-gray">Mumblypeg</p>

                  {/* Progress bar */}
                  <div className="mt-6 w-full">
                    <div
                      ref={progressBarRef}
                      className="h-2 w-full cursor-pointer overflow-hidden rounded-full bg-white/[0.08]"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="h-full rounded-full bg-sunflower transition-[width] duration-150"
                        style={{ width: `${player.progress * 100}%` }}
                      />
                    </div>
                    <div
                      className="mt-2 flex justify-between font-mono text-xs text-warm-gray"
                      style={{
                        fontFamily:
                          "var(--font-mono), 'Courier New', monospace",
                      }}
                    >
                      <span>{player.formattedCurrentTime}</span>
                      <span>{player.formattedDuration}</span>
                    </div>
                  </div>

                  {/* Playback controls */}
                  <div className="mt-6 flex items-center gap-6">
                    {/* Shuffle */}
                    <button
                      aria-label="Shuffle"
                      onClick={player.toggleShuffle}
                      className={`transition-colors duration-200 ${
                        player.shuffle
                          ? 'text-sunflower'
                          : 'text-warm-gray hover:text-soft-white'
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 3 21 3 21 8" />
                        <line x1="4" y1="20" x2="21" y2="3" />
                        <polyline points="21 16 21 21 16 21" />
                        <line x1="15" y1="15" x2="21" y2="21" />
                        <line x1="4" y1="4" x2="9" y2="9" />
                      </svg>
                    </button>

                    {/* Previous */}
                    <button
                      aria-label="Previous track"
                      onClick={player.prev}
                      className="text-soft-white transition-colors duration-200 hover:text-hot-pink"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <rect x="3" y="5" width="3" height="14" rx="1" />
                        <polygon points="20 5 20 19 8 12" />
                      </svg>
                    </button>

                    {/* Play/Pause */}
                    <button
                      aria-label={player.isPlaying ? 'Pause' : 'Play'}
                      onClick={player.toggle}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-hot-pink text-soft-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#ff5a90] active:scale-95"
                    >
                      {player.isPlaying ? (
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="6 3 20 12 6 21" />
                        </svg>
                      )}
                    </button>

                    {/* Next */}
                    <button
                      aria-label="Next track"
                      onClick={player.next}
                      className="text-soft-white transition-colors duration-200 hover:text-hot-pink"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <rect x="18" y="5" width="3" height="14" rx="1" />
                        <polygon points="4 5 4 19 16 12" />
                      </svg>
                    </button>

                    {/* Repeat */}
                    <button
                      aria-label="Repeat"
                      onClick={player.toggleRepeat}
                      className={`transition-colors duration-200 ${
                        player.repeat
                          ? 'text-sunflower'
                          : 'text-warm-gray hover:text-soft-white'
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="17 1 21 5 17 9" />
                        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                        <polyline points="7 23 3 19 7 15" />
                        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* ── Tracklist ── */}
              <div className="mt-10 border-t border-white/[0.06] pt-6">
                <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-warm-gray">
                  Tracklist
                </h3>
                <ul className="space-y-1" role="list">
                  {tracks.map((track, i) => {
                    const isActive = i === player.currentTrackIndex;
                    const dur = player.trackDurations[i];
                    return (
                      <li
                        key={track.num}
                        onClick={() => player.playTrack(i)}
                        className={`group flex cursor-pointer items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-200 ${
                          isActive
                            ? "bg-hot-pink/[0.12] text-soft-white"
                            : "text-warm-gray hover:bg-white/[0.04] hover:text-soft-white"
                        }`}
                      >
                        <span
                          className={`w-6 font-mono text-xs ${
                            isActive ? "text-hot-pink" : "text-warm-gray"
                          }`}
                          style={{
                            fontFamily:
                              "var(--font-mono), 'Courier New', monospace",
                          }}
                        >
                          {track.num}
                        </span>
                        <span className="flex-1 text-sm font-medium">
                          {track.title}
                        </span>
                        {isActive && player.isPlaying && (
                          <span className="mr-2 flex items-center gap-[3px]">
                            <span className="inline-block h-3 w-[2px] animate-pulse rounded-full bg-hot-pink" />
                            <span className="inline-block h-4 w-[2px] animate-pulse rounded-full bg-hot-pink [animation-delay:0.15s]" />
                            <span className="inline-block h-2 w-[2px] animate-pulse rounded-full bg-hot-pink [animation-delay:0.3s]" />
                          </span>
                        )}
                        <span
                          className="font-mono text-xs"
                          style={{
                            fontFamily:
                              "var(--font-mono), 'Courier New', monospace",
                          }}
                        >
                          {dur ? player.formatTime(dur) : '--:--'}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer accent ── */}
        <footer className="mt-12 flex flex-col items-center gap-3 animate-fade-in-up-delayed-3">
          <div className="flex items-center gap-2">
            <span className="block h-2 w-2 rounded-full bg-lilac" />
            <span className="block h-2 w-2 rounded-full bg-hot-pink" />
            <span className="block h-2 w-2 rounded-full bg-sunflower" />
            <span className="block h-2 w-2 rounded-full bg-sky-blue" />
            <span className="block h-2 w-2 rounded-full bg-spearmint" />
          </div>
          <p className="text-xs text-warm-gray/60">
            &copy; {new Date().getFullYear()} Mumblypeg
          </p>
        </footer>
      </main>
    </div>
  );
}
