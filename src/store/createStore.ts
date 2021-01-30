/* eslint-disable import/no-anonymous-default-export */
import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';
import { AuthAction, AuthState } from './modules/auth/types';

export interface StoreState {
  auth: AuthState;
}

// pode utilizar o AnyActin do Redux no lugar do StoreActions caso não esteja utilizando a lib typesafe
export type StoreAction = AuthAction | AuthAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
}
