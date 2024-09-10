import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import { IconButton } from '../components/IconButton';
import { PlayPauseButton } from '../components/PlayPauseButton';

export function CurrentlyPlayingScreen() {
  const { activeTrack, isLoading, isBuffering, previous, next } =
    useTrackPlayer();
  const loading = isLoading || isBuffering;

  if (!activeTrack) return null;

  return (
    <View style={styles.container}>
      <View style={styles.topControls}>
        <IconButton name="chevron-left" size={20} />
      </View>

      <View style={styles.content}>
        <View style={styles.trackDetailsContainer}>
          {isLoading ? (
            <ActivityIndicator size={250} color="white" />
          ) : (
            <Image
              source={{ uri: activeTrack.artwork }}
              style={styles.artwork}
            />
          )}
          <Text style={styles.title}>{activeTrack.title}</Text>

          <View style={styles.controlsContainer}>
            <IconButton name="arrow-left" size={35} onPress={previous} />
            <PlayPauseButton
              size={50}
              disabled={loading}
              style={{ opacity: loading ? 0.5 : 1 }}
            />
            <IconButton name="arrow-right" size={35} onPress={next} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  topControls: {
    padding: 15,
  },

  content: {
    flex: 41,
  },

  trackDetailsContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },

  artwork: {
    width: 250,
    height: 250,
  },

  title: {
    margin: 10,
    fontSize: 24,
    color: 'white',
  },

  controlsContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
