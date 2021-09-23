import React, { useState } from "react";
import Presentation from "./presentation";
import { firebaseAuth } from "../../config/firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    try {
      firebaseAuth.sendPasswordResetEmail(email)
        .then(() => {
          // Password reset email sent!
          setEmailSent(true);
        })
        .catch((error) => {
          var errorMessage = error.message;
          alert(errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Presentation
      setEmail={setEmail}
      emailSent={emailSent}
      handleSubmit={sendEmail}
    />
  );
};

export default ForgotPassword;
