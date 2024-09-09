import React, { ReactNode, useContext, useEffect, useState } from 'react';
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
} from 'react-native-track-player';
import defaultTracks from '../data/defaultTracks.json';

type TrackPlayerContextType = {
  isPlaying: boolean;
  play: () => void;
  stop: () => void;
};

const TrackPlayerContext = React.createContext({} as TrackPlayerContextType);

export function TrackPlayerProvider({ children }: { children: ReactNode }) {
  const [isPlayerSetup, setIsPlayerSetup] = useState(false);
  const { state } = usePlaybackState();
  const isPlaying = state === State.Playing;

  const play = () => TrackPlayer.play();
  const stop = () => TrackPlayer.stop();

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
      setIsPlayerSetup(true);
    }
  }, [isPlayerSetup]);

  return (
    <TrackPlayerContext.Provider
      value={{
        isPlaying,
        play,
        stop,
      }}
    >
      {children}
    </TrackPlayerContext.Provider>
  );
}

export const useTrackPlayer = () => useContext(TrackPlayerContext);
