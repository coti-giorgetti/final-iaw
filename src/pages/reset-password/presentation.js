import React from "react";
import {
  Avatar,
  Button,
  Typography,
  Container,
  TextField,
  CssBaseline,
} from "@material-ui/core";
import LockOutlined from "@material-ui/icons/LockOutlined";
import loginStyles from "./styles";

const Presentation = (props) => {
  const classes = loginStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>  
      <Avatar className={classes.avatar}>
        <LockOutlined/>
      </Avatar>                  
              <Typography component="h1" variant="h5">
                Ingresa una nueva contraseña
              </Typography>
              <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nueva contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => props.setPassword(event.target.value)}
              />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Guardar
                </Button>
              </form>
            </div>
    </Container>
  );
};

export default Presentation;
