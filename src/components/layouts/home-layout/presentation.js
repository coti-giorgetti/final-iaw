import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import NotificationIcon from "@material-ui/icons/Notifications";
import useStyle from "./styles";

const Presentation = (props) => {
  const classes = useStyle();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography variant="h4" display="inline">
              LOGO
            </Typography>
            <Button color="inherit">Materias</Button>
            <Button color="inherit">Perfil</Button>
          </div>
          <IconButton color="inherit">
            <NotificationIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Presentation;
