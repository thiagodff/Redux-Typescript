import { action } from "typesafe-actions"

interface SignInRequestPayload {
  email: string;
  password: string;
}

export function signInRequest({ email, password }: SignInRequestPayload) {
  return action('@auth/SIGN_IN_REQUEST', {
    email,
    password,
  })
}

export function signInSuccess({ token }: { token: string; }) {
  return action('@auth/SIGN_IN_SUCCESS', {
    token
  })
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE')
}
