import React, { ReactNode, useContext, useEffect, useState } from 'react';
import TrackPlayer, {
  Capability,
  State,
  Track,
  useActiveTrack,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import defaultTracks from '../data/defaultTracks.json';

type TrackPlayerContextType = {
  tracks: Track[];
  activeTrack?: Track;
  activeTrackIndex: number;
  position: number;
  duration: number;
  isPlaying: boolean;
  isLoading: boolean;
  isBuffering: boolean;
  play: () => void;
  pause: () => void;
  stop: () => void;
  skip: (index: number) => void;
  previous: () => void;
  next: () => void;
  seekTo: (position: number) => void;
};

const TrackPlayerContext = React.createContext({} as TrackPlayerContextType);

export function TrackPlayerProvider({ children }: { children: ReactNode }) {
  const { state } = usePlaybackState();
  const { position, duration } = useProgress();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isPlayerSetup, setIsPlayerSetup] = useState(false);

  const isPlaying = state === State.Playing;
  const isLoading = state === State.Loading;
  const isBuffering = state === State.Buffering;
  const activeTrack = useActiveTrack();
  const activeTrackIndex = activeTrack
    ? tracks.findIndex((track) => track.title === activeTrack.title)
    : -1;

  const play = () => TrackPlayer.play();
  const pause = () => TrackPlayer.pause();
  const stop = () => TrackPlayer.stop();
  const skip = (index: number) => TrackPlayer.skip(index);
  const previous = () => TrackPlayer.skipToPrevious();
  const next = () => TrackPlayer.skipToNext();
  const seekTo = (position: number) => TrackPlayer.seekTo(position);

  useEffect(() => {
    if (!isPlayerSetup) {
      TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      });

      TrackPlayer.reset();
      TrackPlayer.add(defaultTracks);
      setTracks(defaultTracks);
      setIsPlayerSetup(true);
    }
  }, [isPlayerSetup]);

  return (
    <TrackPlayerContext.Provider
      value={{
        tracks,
        activeTrack,
        activeTrackIndex,
        position,
        duration,
        isPlaying,
        isLoading,
        isBuffering,
        play,
        pause,
        stop,
        skip,
        previous,
        next,
        seekTo,
      }}
    >
      {children}
    </TrackPlayerContext.Provider>
  );
}

export const useTrackPlayer = () => useContext(TrackPlayerContext);
