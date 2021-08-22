import React, { useState } from "react";
import Presentation from "./presentation";
import { firebaseAuth, firestore } from "../../config/firebase";
import { useHistory } from "react-router-dom";

const EMAIL_IN_USE = "Ya existe un usuario registrado con este email";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const register = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      const userCredentials = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredentials && userCredentials.additionalUserInfo.isNewUser) {
        firestore
          .collection("Users")
          .doc(userCredentials.user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setError(EMAIL_IN_USE);
            } else {
              firestore
                .collection("Users")
                .doc(userCredentials.user.uid)
                .set({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  career: null,
                })
                .then((doc) => {
                  history.push("/home");
                })
                .catch((err) => {
                  setError("Se produjo un error. Intente de nuevo.");
                });
            }
          })
          .catch((error) => {
            setError("Se produjo un error. Intente de nuevo.");
          });
      } else {
        setError(EMAIL_IN_USE);
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError(EMAIL_IN_USE);
      } else {
        setError("Se produjo un error. Intente de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Presentation
      setters={{ setFirstName, setLastName, setEmail, setPassword }}
      isLoading={loading}
      handleSubmit={register}
      error={error}
    />
  );
};

export default SignUp;
