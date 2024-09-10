import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import { TrackRow } from './TrackRow';
import { IconButton } from './IconButton';

export function CurrentlyPlayingBar() {
  const { activeTrack, isPlaying, play, pause } = useTrackPlayer();

  if (!activeTrack) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.trackDetailsContainer}>
        <TrackRow track={activeTrack} onPress={() => {}} />
      </View>

      <View style={styles.playPauseButtonContainer}>
        {isPlaying ? (
          <IconButton name="pause-circle" size={35} onPress={pause} />
        ) : (
          <IconButton name="play-circle" size={35} onPress={play} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
    backgroundColor: '#1e1e1e',
  },

  trackDetailsContainer: {
    flex: 1,
  },

  playPauseButtonContainer: {
    paddingHorizontal: 15,
  },
});
