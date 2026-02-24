export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-deep-ink">
      {/* ── 3D Background Layer (Spline scene will go here) ── */}
      <div
        id="spline-background"
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        {/* Placeholder gradient that echoes the brand palette —
            will be replaced with the Spline 3D interactive scene */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-ink via-[#2a1f4e] to-deep-ink" />
      </div>

      {/* ── Geometric Pattern Overlay ── */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle, var(--lilac) 1.5px, transparent 1.5px),
            radial-gradient(circle, var(--hot-pink) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 32px 32px",
          backgroundPosition: "0 0, 16px 16px",
          animation: "drift 60s linear infinite",
        }}
      />

      {/* ── Main Content ── */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
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

        {/* ── Media Player Placeholder ── */}
        <section
          id="player"
          className="w-full max-w-2xl animate-fade-in-up-delayed"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] shadow-2xl backdrop-blur-xl">
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
                      Album Art
                    </span>
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
                    01 / 12
                  </span>
                  <h2 className="text-2xl font-bold tracking-[-0.01em] text-soft-white sm:text-3xl">
                    Track Title
                  </h2>
                  <p className="mt-1 text-base text-warm-gray">Mumblypeg</p>

                  {/* Progress bar */}
                  <div className="mt-6 w-full">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.08]">
                      <div
                        className="h-full w-[35%] rounded-full bg-sunflower transition-all duration-300"
                      />
                    </div>
                    <div
                      className="mt-2 flex justify-between font-mono text-xs text-warm-gray"
                      style={{
                        fontFamily:
                          "var(--font-mono), 'Courier New', monospace",
                      }}
                    >
                      <span>1:24</span>
                      <span>4:02</span>
                    </div>
                  </div>

                  {/* Playback controls */}
                  <div className="mt-6 flex items-center gap-6">
                    {/* Shuffle */}
                    <button
                      aria-label="Shuffle"
                      className="text-warm-gray transition-colors duration-200 hover:text-soft-white"
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

                    {/* Play */}
                    <button
                      aria-label="Play"
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-hot-pink text-soft-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#ff5a90] active:scale-95"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="6 3 20 12 6 21" />
                      </svg>
                    </button>

                    {/* Next */}
                    <button
                      aria-label="Next track"
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
                      className="text-warm-gray transition-colors duration-200 hover:text-soft-white"
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
                  {[
                    { num: "01", title: "Track One", dur: "3:42" },
                    { num: "02", title: "Track Two", dur: "4:18" },
                    { num: "03", title: "Track Three", dur: "3:05" },
                    { num: "04", title: "Track Four", dur: "5:11" },
                    { num: "05", title: "Track Five", dur: "3:58" },
                    { num: "06", title: "Track Six", dur: "4:32" },
                    { num: "07", title: "Track Seven", dur: "2:47" },
                    { num: "08", title: "Track Eight", dur: "4:02" },
                    { num: "09", title: "Track Nine", dur: "3:33" },
                    { num: "10", title: "Track Ten", dur: "4:45" },
                    { num: "11", title: "Track Eleven", dur: "3:20" },
                    { num: "12", title: "Track Twelve", dur: "5:30" },
                  ].map((track, i) => (
                    <li
                      key={track.num}
                      className={`group flex cursor-pointer items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-200 ${
                        i === 0
                          ? "bg-hot-pink/[0.12] text-soft-white"
                          : "text-warm-gray hover:bg-white/[0.04] hover:text-soft-white"
                      }`}
                    >
                      <span
                        className={`w-6 font-mono text-xs ${
                          i === 0 ? "text-hot-pink" : "text-warm-gray"
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
                      {i === 0 && (
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
                        {track.dur}
                      </span>
                    </li>
                  ))}
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
