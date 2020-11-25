import { makeStyles, Paper, Typography, Container } from "@material-ui/core";
import { RegisterForm } from "components/forms/RegisterForm";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2, 3),
  },
}));

const Register = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center">
          Register system
        </Typography>
        <RegisterForm />
      </Paper>
    </Container>
  );
};

export default Register;
