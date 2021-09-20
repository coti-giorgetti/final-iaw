import React from "react";
import {
  Avatar,
  Button,
  Typography,
  Container,
  TextField,
  CssBaseline,
} from "@material-ui/core";
import loginStyles from "./styles";
import { Check } from "@material-ui/icons";

const Presentation = (props) => {
  const classes = loginStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>  
      <Avatar className={classes.avatar}>
        {props.emailSent ? <Check/> : '?'}
      </Avatar>      
        {
          !props.emailSent && 
            <div>               
              <Typography component="h1" variant="h5">
                ¿Olvidaste tu contraseña?
              </Typography>
              <br/>
              <Typography component="sub" variant="subtitle1">
                ¡No hay problema! Ingresa tu email para que te enviemos los pasos a seguir para crear una nueva.
              </Typography>
              <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(event) => props.setEmail(event.target.value)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Enviar
                </Button>
              </form>
            </div>
        }
        {
          props.emailSent && 
            <div> 
              <Typography component="h1" variant="h5">
                Email enviado
              </Typography>
              <br/>
              <Typography component="sub" variant="subtitle1">
                Abre tu casilla de correo y sigue los pasos para crear una nueva contraseña
              </Typography>
            </div>
        }
      </div>
    </Container>
  );
};

export default Presentation;
