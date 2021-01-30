// import { AnyAction } from "redux";
import { AuthAction, AuthState } from "./types";

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
};

export function auth (state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      // tudo que é retornado pelo reducer fica salvo na store
      return {
        ...state,
        loadingSignInRequest: true,
      };
    default:
      return state;
  }
}