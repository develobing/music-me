import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export function LibraryScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CurrentlyPlaying')}>
      <Text>Library Screen</Text>
    </TouchableOpacity>
  );
}
