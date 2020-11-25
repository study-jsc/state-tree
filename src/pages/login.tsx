import { Container, Paper, makeStyles } from "@material-ui/core";
import { LoginForm } from "components/forms";
import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/login";
import { useAuth } from "libs/context/AuthContext";

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
