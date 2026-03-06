'use client';

import { Suspense, lazy, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Fallback visible until the 3D scene loads */}
      <div
        className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-1000"
        style={{ opacity: loaded ? 0 : 1 }}
      />

      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <span className="spline-spinner" />
          </div>
        }
      >
        <div
          className="h-full w-full origin-center transition-opacity duration-1000 scale-100 md:scale-125"
          style={{
            opacity: loaded ? 1 : 0,
          }}
        >
          <Spline
            scene="/scene.splinecode"
            onLoad={(splineApp) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const app = splineApp as any;
              const renderer = app._renderer;

              // Set the renderer clear color to transparent black
              // so the scene's purple background is replaced with transparency,
              // letting the page CSS background show through.
              try {
                renderer.setClearColor(0x000000, 0);
                console.log('✅ Set renderer clear color to transparent');
              } catch (e) {
                console.log('❌ setClearColor failed:', e);
              }

              setLoaded(true);
            }}
          />
        </div>
      </Suspense>
    </div>
  );
}
