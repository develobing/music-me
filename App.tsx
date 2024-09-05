import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrentlyPlayingScreen } from './screens/CurrentlyPlayingScreen';
import { LibraryScreen } from './screens/LibraryScreen';

export type RootStackParamList = {
  Library: undefined;
  CurrentlyPlaying: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Library">
        <RootStack.Screen
          name="Library"
          component={LibraryScreen}
          options={{ title: 'MusicMe' }}
        />
        <RootStack.Screen
          name="CurrentlyPlaying"
          component={CurrentlyPlayingScreen}
          options={{ presentation: 'modal', headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});