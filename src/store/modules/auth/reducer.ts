// import { AnyAction } from "redux";
import { AuthAction, AuthState } from "./types";

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  token: null,
};

export default function auth (
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    // tudo que é retornado pelo reducer fica salvo na store
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
        error: false,
        token: null,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        token: action.payload.token,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: false,
        error: true,
      };
    default:
      return state;
  }
}
