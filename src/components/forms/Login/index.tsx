import { makeStyles, Typography } from "@material-ui/core";
import { Button, Input } from "components/elements";
import { useFormik } from "formik";

interface IProps {}

const useStyles = makeStyles((theme) => ({
  mt2: {
    marginTop: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  return (
    <form>
      <Typography align="center" component="h5" variant="h5">
        Login system
      </Typography>
      <Input
        fullWidth
        name="username"
        label="Username"
        variant="outlined"
        className={classes.mt2}
        value={values.username}
        onChange={handleChange}
      />
      <Input
        fullWidth
        name="password"
        label="Password"
        variant="outlined"
        type="password"
        className={classes.mt2}
        value={values.password}
        onChange={handleChange}
      />
      <Button
        fullWidth
        label="Login"
        type="primary"
        variant="outlined"
        className={classes.mt2}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default LoginForm;
