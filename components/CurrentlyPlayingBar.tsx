import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import { TrackRow } from './TrackRow';
import { IconButton } from './IconButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { PlayPauseButton } from './PlayPauseButton';

export function CurrentlyPlayingBar() {
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { activeTrack, isPlaying, play, pause } = useTrackPlayer();

  if (!activeTrack) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.trackDetailsContainer}>
        <TrackRow
          track={activeTrack}
          onPress={() => navigator.navigate('CurrentlyPlaying')}
        />
      </View>

      <View style={styles.playPauseButtonContainer}>
        <PlayPauseButton size={35} />
      </View>
    </View>
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
