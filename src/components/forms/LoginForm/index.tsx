import { Button, makeStyles } from "@material-ui/core";
import { FormikInput } from "components/elements";
import { Form, Formik } from "formik";
import { IAuthor } from "@types";

interface IProps {
  initValue: IAuthor;
  onLogin: (value: IAuthor) => void;
}

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: theme.spacing(2),
  },
  btn: {
    marginTop: theme.spacing(3),
  },
}));

const LoginForm: React.FC<IProps> = ({ initValue, onLogin }) => {
  const classes = useStyles();
  return (
    <Formik initialValues={initValue} onSubmit={onLogin}>
      <Form>
        <FormikInput
          fullWidth
          name="username"
          variant="outlined"
          label="Username"
          className={classes.input}
        />
        <FormikInput
          fullWidth
          name="password"
          variant="outlined"
          label="Password"
          className={classes.input}
          type="password"
        />
        <Button
          fullWidth
          type="submit"
          className={classes.btn}
          color="primary"
          variant="contained"
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export { LoginForm };
