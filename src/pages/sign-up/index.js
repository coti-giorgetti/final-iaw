import React, { useState } from "react";
import Presentation from "./presentation";
import { firebaseAuth } from "../../config/firebase";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (event) => {
    event.preventDefault();
    try {
      const userCredentials = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredentials) {
        alert("Registro exitoso!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Presentation
      setters={{ setFirstName, setLastName, setEmail, setPassword }}
      handleSubmit={register}
    />
  );
};

export default SignUp;
