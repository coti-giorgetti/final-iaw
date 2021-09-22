import React, { useEffect, useState } from "react";
import Presentation from "./presentation";
import { firebaseAuth } from "../../config/firebase";
import { useHistory } from "react-router";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [oobCode, setoobCode] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('oobCode');
    setoobCode(code);
  }, [])

  const submitNewPassword = async (event) => {
    event.preventDefault();
    try {
      // Verify the password reset code is valid.
      firebaseAuth.verifyPasswordResetCode(oobCode).then((email) => {
        // Save the new password.
        firebaseAuth.confirmPasswordReset(oobCode, password).then((resp) => {
          // Password reset has been confirmed and new password updated.
          history.push('login');
        }).catch((error) => {
          // Error occurred during confirmation. The code might have expired or the
          // password is too weak.
          alert(error.message);
        });
      }).catch((error) => {
        // Invalid or expired action code. Ask user to try to reset the password
        // again.
        alert(error.message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Presentation
      setPassword={setPassword}
      handleSubmit={submitNewPassword}
    />
  );
};

export default ResetPassword;
