import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../App';
import { CurrentlyPlayingBar } from '../components/CurrentlyPlayingBar';
import { TrackList } from '../components/TrackList';
import { useTrackPlayer } from '../hooks/useTrackPlayer';

export function LibraryScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { activeTrack, tracks, isPlaying, play, stop } = useTrackPlayer();

  return (
    <View style={styles.container}>
      <View style={styles.trackListContainer}>
        <TrackList tracks={tracks} />
      </View>

      {activeTrack && (
        <View style={styles.currentlyPlayingBarContainer}>
          <CurrentlyPlayingBar />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },

  trackListContainer: {
    flex: 1,
  },

  currentlyPlayingBarContainer: {
    height: 65,
  },
});
