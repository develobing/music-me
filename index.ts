import { registerRootComponent } from 'expo';
import App from './App';
import TrackPlayer from 'react-native-track-player';
import { trackPlayerService } from './service';

TrackPlayer.registerPlaybackService(() => trackPlayerService);

registerRootComponent(App);
