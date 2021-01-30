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
