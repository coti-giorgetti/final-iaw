import React, { useState } from "react";
import Presentation from "./Login";
import { firebaseAuth } from "../../config/firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const history = useHistory();

  const login = async (event) => {
    event.preventDefault();
    try {
      const userCredentials = await firebaseAuth.signInWithEmailAndPassword(
        email,
        password
      );

      if (userCredentials) {
        localStorage.setItem("user_id", userCredentials.user.uid);
        history.push("/home");
        setSignedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Presentation
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={login}
      signedIn={signedIn}
    />
  );
};

export default Login;
