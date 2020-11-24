import { Container, Paper, makeStyles } from "@material-ui/core";
import { LoginForm } from "components/forms";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2, 3),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper}>
        <LoginForm
          initValue={{
            username: "",
            password: "",
          }}
          onLogin={(value) => {
            console.log({ value });
          }}
        />
      </Paper>
    </Container>
  );
};

export default Login;
