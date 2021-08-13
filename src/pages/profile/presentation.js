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
  Hidden,
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
            {props.meetings.length > 0 ? (
              props.meetings.map((meeting) => <MeetingCard data={meeting} />)
            ) : (
              <Typography>Sin reuniones por el momento.</Typography>
            )}
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

const MeetingCard = ({ data }) => {
  const classes = profileStyles();
  return (
    <Paper>
      <div className={classes.meetingCard}>
        <Hidden mdDown>
          <Avatar
            className={classes.meetingAvatar}
            style={{ backgroundColor: randomColor() }}
          >
            {data.subject.charAt(0)}
          </Avatar>
        </Hidden>
        <div className={classes.meetingInfo}>
          <Typography>
            <b>{data.subject}</b>
          </Typography>
          <Typography>{data.user}</Typography>
        </div>
        <Typography className={classes.meetingDate}>
          {data.date.getDate()}/{data.date.getMonth()}/{data.date.getFullYear()}
        </Typography>
      </div>
    </Paper>
  );
};

const randomColor = () => {
  let hex = Math.floor(Math.random() * 0xffffff);
  return "#" + hex.toString(16);
};

export default Presentation;
