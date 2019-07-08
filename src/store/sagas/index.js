import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '../ducks/podcasts';
import { PlayerTypes } from '../ducks/player';

import { load } from './podcasts';

import {
  init, setPodcast, play, pause, next, prev, reset,
} from './player';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREV, prev),
    takeLatest(PlayerTypes.RESET, reset),
    takeLatest(PodcastsTypes.LOAD_REQUEST, load),
  ]);
}
