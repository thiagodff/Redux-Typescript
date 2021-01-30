import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StoreState } from "../../store/createStore";
import { signInRequest } from "../../store/modules/auth/actions";

import logo from "../../assets/logo.png";

import "./index.css";

const SignIn: React.FC = () => {
  const { loadingSignInRequest, isSignedIn, error, token } = useSelector(
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

      <p style={{ color: "white", marginTop: "14px" }}>
        {isSignedIn
          ? "Bem vindo de volta, Thiago, autenticado por " + token
          : ""}
      </p>

      <p style={{ color: "white", marginTop: "14px" }}>
        {error ? "Email ou senha incorreto" : ""}
      </p>
    </div>
  );
};

export default SignIn;
