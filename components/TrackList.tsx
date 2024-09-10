import { FlatList } from 'react-native';
import { Track } from 'react-native-track-player';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import { TrackRow } from './TrackRow';

export function TrackList({ tracks }: { tracks: Track[] }) {
  const { play, skip } = useTrackPlayer();

  const handleItemPress = (index: number) => {
    skip(index);
    play();
  };

  return (
    <FlatList
      data={tracks}
      renderItem={({ item, index }) => (
        <TrackRow track={item} onPress={() => handleItemPress(index)} />
      )}
    />
  );
}
