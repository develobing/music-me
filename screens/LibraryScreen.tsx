import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useTrackPlayer } from '../hooks/useTrackPlayer';

export function LibraryScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isPlaying, play, stop } = useTrackPlayer();

  return (
    <View>
      <Text>Play Track</Text>

      <TouchableOpacity
        onPress={() => {
          if (isPlaying) stop();
          else play();
        }}
      >
        <Text
          style={{
            backgroundColor: 'blue',
            borderRadius: 20,
            padding: 10,
            color: 'white',
          }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
