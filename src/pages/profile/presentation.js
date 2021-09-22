import React,{useState, useEffect} from "react";
import {
  AppBar,
  Avatar,
  Grid,
  Paper,
  Container,
  Tab,
  Tabs,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import {History} from "@material-ui/icons";
import profileStyles from "./styles";
import TabPanel from "../../components/tabPanel";

const Presentation = ({getSubjects, activeTab}) => {
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)
  const classes = profileStyles();
 
  useEffect(() => {
    const loadSubjects = () => {
      const loggedUser = JSON.parse(localStorage.getItem('user'));
      const userId = loggedUser.id;
      getSubjects(userId).then(
        subj => {setSubjects(subj)
            setLoading(false)
        }
    )};
    loadSubjects()
  }, [])

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <ProfileCard />
        </Grid>
        <Grid item md={9}>
          <AppBar position="static">
            <Tabs 
              value={activeTab}
              variant="fullWidth"
            >
              <Tab label="Mis Postulaciones activas" icon={<History />} />
            </Tabs>
          </AppBar>
          <TabPanel value={activeTab} index={0}>
              { (loading)
                  ? <CircularProgress />
                  : (subjects.length>0)
                    ? subjects.map((subject) => <SubjectCard data={subject} key={subject.code} />)
                    : <b>Sin postulaciones por el momento.</b>
              }
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}

const ProfileCard = () => {
  const classes = profileStyles();
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const firstName = loggedUser.firstName;
  const lastName = loggedUser.lastName;
  return (
    <Paper elevation={3} className={classes.paper}>
      <Avatar className={classes.avatar}>{firstName.charAt(0)}{lastName.charAt(0)}</Avatar>
      <Typography component={'span'} variant="h5">
        <b> {firstName} {lastName}</b>
      </Typography>
      <Typography component={'span'}>{loggedUser.email}</Typography>
    </Paper>
  );
};

const SubjectCard = ({ data }) => {
  const classes = profileStyles();
  return (
    <Paper>
      <div className={classes.meetingCard}>
        <div className={classes.meetingInfo}>
            <b>{data.name} ({data.code})</b>
        </div>
      </div>
    </Paper>
  );
};

export default Presentation;
