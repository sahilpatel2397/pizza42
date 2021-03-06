// src/components/login-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect({
        scope: "create:order"
      })}
    >
      Log In
    </button>
  );
};

export default LoginButton;
