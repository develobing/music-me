import React, { ReactNode, useContext, useEffect, useState } from 'react';
import TrackPlayer, {
  Capability,
  State,
  Track,
  useActiveTrack,
  usePlaybackState,
} from 'react-native-track-player';
import defaultTracks from '../data/defaultTracks.json';

type TrackPlayerContextType = {
  tracks: Track[];
  activeTrack?: Track;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  stop: () => void;
  skip: (index: number) => void;
};

const TrackPlayerContext = React.createContext({} as TrackPlayerContextType);

export function TrackPlayerProvider({ children }: { children: ReactNode }) {
  const { state } = usePlaybackState();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isPlayerSetup, setIsPlayerSetup] = useState(false);

  const isPlaying = state === State.Playing;
  const activeTrack = useActiveTrack();

  const play = () => TrackPlayer.play();
  const pause = () => TrackPlayer.pause();
  const stop = () => TrackPlayer.stop();
  const skip = (index: number) => TrackPlayer.skip(index);

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
        isPlaying,
        play,
        pause,
        stop,
        skip,
      }}
    >
      {children}
    </TrackPlayerContext.Provider>
  );
}

export const useTrackPlayer = () => useContext(TrackPlayerContext);
