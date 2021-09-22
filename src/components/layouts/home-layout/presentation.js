import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Container,
} from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import useStyle from "./styles";
import logo from "../../../assets/images/full-logo.png"

const Presentation = (props) => {
  const classes = useStyle();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div style={{display: "flex"}}>            
            <img src={logo} width="160" height="50" alt="Hubbl Logo"/>
            <Button color="inherit">Materias</Button>
            <Button color="inherit">Perfil</Button>
          </div>
          <IconButton color="inherit" onClick={props.logout}>
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Presentation;
