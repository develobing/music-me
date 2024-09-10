import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Track } from 'react-native-track-player';

type TrackRowProps = {
  track: Track;
  onPress: () => void;
};

export function TrackRow({ track, onPress }: TrackRowProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: track.artwork }} style={styles.artwork} />
      <Text style={styles.title}>{track.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  artwork: {
    height: 50,
    width: 50,
  },
  title: {
    marginLeft: 10,
    color: 'white',
  },
});
