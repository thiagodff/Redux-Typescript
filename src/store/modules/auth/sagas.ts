import { takeLatest, takeEvery, call, put, all } from 'redux-saga/effects';
import { ActionType } from "typesafe-actions";
import * as actions from './actions';

import api from '../../../services/api';

// podemos tipar a action com AnyAction
export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, '/signin', { email, password });

    yield put(actions.signInSuccess({ token: data.token }));
  } catch (error) {
    yield put(actions.signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn), // pega a ultima vez que a action é disparada, tipo throttle, debounce
  takeEvery('@auth/EXAMPLE_TAKE_EVERY', signIn), // pega todas as actions que é disparada (ex: para chat)
]);
