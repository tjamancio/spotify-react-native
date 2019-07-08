import '~/config/ReactotronConfig';
import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import player from '~/services/player';
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => player);
