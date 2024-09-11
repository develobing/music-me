import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { Artwork } from '../components/Artwork';
import { IconButton } from '../components/IconButton';
import { PlayPauseButton } from '../components/PlayPauseButton';
import { useTrackPlayer } from '../hooks/useTrackPlayer';

export function CurrentlyPlayingScreen() {
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    tracks,
    activeTrack,
    activeTrackIndex,
    isLoading,
    position,
    duration,
    previous,
    next,
    seekTo,
  } = useTrackPlayer();
  const loading = isLoading;

  if (!activeTrack) return null;

  return (
    <View style={styles.container}>
      <View style={styles.topControls}>
        <IconButton
          name="chevron-left"
          size={32}
          onPress={() => navigator.navigate('Library')}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.trackDetailsContainer}>
          <View>
            <Artwork
              source={{ uri: activeTrack.artwork }}
              style={styles.artwork}
            />

            {isLoading && (
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <ActivityIndicator size={250} color="white" />
              </View>
            )}
          </View>
          <Text style={styles.title}>{activeTrack.title}</Text>

          <Slider
            minimumTrackTintColor="purple"
            maximumTrackTintColor="white"
            thumbTintColor="white"
            minimumValue={0}
            maximumValue={duration}
            value={position}
            style={styles.slider}
            onValueChange={seekTo}
          />

          <View style={styles.controlsContainer}>
            <IconButton
              name="arrow-left"
              size={35}
              onPress={previous}
              disabled={activeTrackIndex <= 0}
            />
            <PlayPauseButton size={50} disabled={loading} />
            <IconButton
              name="arrow-right"
              size={35}
              onPress={next}
              disabled={activeTrackIndex === tracks.length - 1}
            />
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

  slider: {
    width: 250,
  },

  controlsContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
