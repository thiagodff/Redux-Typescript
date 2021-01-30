import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StoreState } from "../../store/createStore";
import { signInRequest } from "../../store/modules/auth/actions";

import logo from "../../assets/logo.png";

import "./index.css";

const SignIn: React.FC = () => {
  const { loadingSignInRequest } = useSelector(
    (state: StoreState) => state.auth
  );
  const dispatch = useDispatch();

  function handleSignIn() {
    dispatch(
      signInRequest({
        email: "test@email.com",
        password: "12345678",
      })
    );
  }

  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo" />
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />

      <button onClick={handleSignIn}>
        {loadingSignInRequest ? "Carregando..." : "Entrar"}
      </button>
    </div>
  );
};

export default SignIn;
