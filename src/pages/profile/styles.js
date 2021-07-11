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
}));

export default profileStyles;
