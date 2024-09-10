import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { TrackPlayerProvider } from './hooks/useTrackPlayer';
import { CurrentlyPlayingScreen } from './screens/CurrentlyPlayingScreen';
import { LibraryScreen } from './screens/LibraryScreen';

export type RootStackParamList = {
  Library: undefined;
  CurrentlyPlaying: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#343a40',
    text: '#fff',
  },
};

export default function App() {
  return (
    <TrackPlayerProvider>
      <NavigationContainer theme={theme}>
        <RootStack.Navigator
          initialRouteName="Library"
          screenOptions={{
            headerStyle: { backgroundColor: '#343a40' },
            headerTitleStyle: { color: '#fff' },
          }}
        >
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
    </TrackPlayerProvider>
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
