import { Container, makeStyles, Paper, Typography } from "@material-ui/core";
import { LoginForm } from "components/forms";
import { useAuth } from "libs/context/AuthContext";
import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/login";

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
  const store = useStore();
  const authStore = useAuth();

  reaction(
    () => store.authorization,
    (authorization) => {
      authorization && authStore?.authorize(authorization);
    }
  );

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center">
          Login system
        </Typography>
        <LoginForm
          initValue={{
            username: "",
            password: "",
          }}
          onLogin={store.login}
        />
      </Paper>
    </Container>
  );
};

export default observer(Login);
