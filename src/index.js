import '~/config/StatusBarConfig';

import React from 'react';
import { Provider } from 'react-redux';

import { YellowBox } from 'react-native';
import Routes from '~/routes';

import store from '~/store';

import Player from '~/components/Player';

YellowBox.ignoreWarnings(['Async Storage']);

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

export default App;
