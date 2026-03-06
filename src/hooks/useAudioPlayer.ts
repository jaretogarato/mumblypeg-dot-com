'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export interface Track {
  num: string;
  title: string;
  src: string;
}

interface AudioPlayerState {
  currentTrackIndex: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  shuffle: boolean;
  repeat: boolean;
  trackDurations: Record<number, number>;
}

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function useAudioPlayer(tracks: Track[]) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioPlayerState>({
    currentTrackIndex: 0,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    shuffle: false,
    repeat: false,
    trackDurations: {},
  });

  // Create audio element once
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.preload = 'metadata';
    audio.src = tracks[0].src;

    return () => {
      audio.pause();
      audio.src = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync source when track index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const track = tracks[state.currentTrackIndex];
    if (audio.src !== new URL(track.src, window.location.origin).href) {
      audio.src = track.src;
      if (state.isPlaying) {
        audio.play().catch(() => {});
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentTrackIndex]);

  // Attach event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setState(s => ({ ...s, currentTime: audio.currentTime }));
    };

    const onLoadedMetadata = () => {
      setState(s => ({
        ...s,
        duration: audio.duration,
        trackDurations: { ...s.trackDurations, [s.currentTrackIndex]: audio.duration },
      }));
    };

    const onEnded = () => {
      setState(s => {
        if (s.repeat) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
          return s;
        }

        let nextIndex: number;
        if (s.shuffle) {
          do {
            nextIndex = Math.floor(Math.random() * tracks.length);
          } while (nextIndex === s.currentTrackIndex && tracks.length > 1);
        } else {
          nextIndex = s.currentTrackIndex + 1;
          if (nextIndex >= tracks.length) {
            // Album finished — stop playback
            return { ...s, isPlaying: false, currentTime: 0 };
          }
        }

        return { ...s, currentTrackIndex: nextIndex };
      });
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [tracks]);

  // Preload durations for all tracks
  useEffect(() => {
    tracks.forEach((track, i) => {
      const tmp = new Audio();
      tmp.preload = 'metadata';
      tmp.src = track.src;
      tmp.addEventListener('loadedmetadata', () => {
        setState(s => ({
          ...s,
          trackDurations: { ...s.trackDurations, [i]: tmp.duration },
        }));
      });
    });
  }, [tracks]);

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {});
    setState(s => ({ ...s, isPlaying: true }));
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setState(s => ({ ...s, isPlaying: false }));
  }, []);

  const toggle = useCallback(() => {
    if (audioRef.current?.paused) {
      play();
    } else {
      pause();
    }
  }, [play, pause]);

  const playTrack = useCallback((index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[index].src;
    audio.play().catch(() => {});
    setState(s => ({ ...s, currentTrackIndex: index, isPlaying: true, currentTime: 0 }));
  }, [tracks]);

  const next = useCallback(() => {
    setState(s => {
      let nextIndex: number;
      if (s.shuffle) {
        do {
          nextIndex = Math.floor(Math.random() * tracks.length);
        } while (nextIndex === s.currentTrackIndex && tracks.length > 1);
      } else {
        nextIndex = (s.currentTrackIndex + 1) % tracks.length;
      }
      const audio = audioRef.current;
      if (audio) {
        audio.src = tracks[nextIndex].src;
        if (s.isPlaying) audio.play().catch(() => {});
      }
      return { ...s, currentTrackIndex: nextIndex, currentTime: 0 };
    });
  }, [tracks]);

  const prev = useCallback(() => {
    const audio = audioRef.current;
    // If more than 3 seconds in, restart current track
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    setState(s => {
      const prevIndex = (s.currentTrackIndex - 1 + tracks.length) % tracks.length;
      if (audio) {
        audio.src = tracks[prevIndex].src;
        if (s.isPlaying) audio.play().catch(() => {});
      }
      return { ...s, currentTrackIndex: prevIndex, currentTime: 0 };
    });
  }, [tracks]);

  const seek = useCallback((fraction: number) => {
    const audio = audioRef.current;
    if (!audio || !isFinite(audio.duration)) return;
    audio.currentTime = fraction * audio.duration;
  }, []);

  const toggleShuffle = useCallback(() => {
    setState(s => ({ ...s, shuffle: !s.shuffle }));
  }, []);

  const toggleRepeat = useCallback(() => {
    setState(s => ({ ...s, repeat: !s.repeat }));
  }, []);

  return {
    ...state,
    currentTrack: tracks[state.currentTrackIndex],
    formattedCurrentTime: formatTime(state.currentTime),
    formattedDuration: formatTime(state.duration),
    progress: state.duration ? state.currentTime / state.duration : 0,
    formatTime,
    play,
    pause,
    toggle,
    playTrack,
    next,
    prev,
    seek,
    toggleShuffle,
    toggleRepeat,
  };
}
