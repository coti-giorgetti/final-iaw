import React from "react";
import {
  AppBar,
  Avatar,
  Grid,
  Paper,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { History, Star } from "@material-ui/icons";
import profileStyles from "./styles";
import TabPanel from "../../components/tabPanel";

const Presentation = (props) => {
  const classes = profileStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <ProfileCard />
        </Grid>
        <Grid item md={9}>
          <AppBar position="static">
            <Tabs
              value={props.activeTab}
              onChange={props.onTabChange}
              variant="fullWidth"
            >
              <Tab label="Reuniones" icon={<History />} />
              <Tab label="Recomendaciones" icon={<Star />} />
            </Tabs>
          </AppBar>
          <TabPanel value={props.activeTab} index={0}>
            <Typography>Sin reuniones por el momento.</Typography>
          </TabPanel>
          <TabPanel value={props.activeTab} index={1}>
            <Typography>Sin recomendaciones por el momento.</Typography>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

const ProfileCard = () => {
  const classes = profileStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Avatar className={classes.avatar}>CG</Avatar>
      <Typography variant="h5">
        <b>Constanza Giorgetti</b>
      </Typography>
      <Typography>Ingeniería en Sistemas de Información</Typography>
    </Paper>
  );
};

export default Presentation;
