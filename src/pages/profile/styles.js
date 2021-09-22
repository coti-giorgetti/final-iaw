import { makeStyles } from "@material-ui/core/styles";

const profileStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  avatar: {
    marginBottom: "10px",
    padding: "25px",
    backgroundColor: theme.palette.secondary.main,
  },
  meetingAvatar: {
    margin: "5px",
    padding: "10px",
    backgroundColor: theme.palette.secondary.main,
  },
  meetingCard: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "15px",
    padding: "10px",
  },
  meetingInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "10px",
  },
  meetingDate: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    padding: "5px",
  },
}));

export default profileStyles;
