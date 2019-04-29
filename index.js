/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {AppNavigators} from './navigators/AppNavigators';

let navigationContainer = createAppContainer(AppNavigators);

AppRegistry.registerComponent(appName, () => navigationContainer);
