import { Button, Grid, makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
import Link from "next/link";
import { Input } from "./Input";

interface IFormValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
type TError = Partial<Record<keyof IFormValue, string>>;

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
  },
}));

const validators = (value: IFormValue): TError => {
  const errors: TError = {};
  if (!value.firstName) errors["firstName"] = "Required";
  if (!value.lastName) errors["lastName"] = "Required";
  if (!value.email) errors["email"] = "Required";
  if (!value.password) errors["password"] = "Required";
  return errors;
};

const RegisterForm = () => {
  const classes = useStyles();

  const formik = useFormik<IFormValue>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: validators,
    onSubmit: (value) => {
      console.log({ registerValue: value });
    },
  });
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Input
            fullWidth
            label="First name"
            touched={formik.touched.firstName}
            error={!!formik.errors.firstName}
            helperText={formik.errors.firstName}
            {...formik.getFieldProps("firstName")}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            fullWidth
            label="Last name"
            touched={formik.touched.lastName}
            error={!!formik.errors.lastName}
            helperText={formik.errors.lastName}
            {...formik.getFieldProps("lastName")}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            label="Email"
            touched={formik.touched.email}
            error={!!formik.errors.email}
            helperText={formik.errors.email}
            {...formik.getFieldProps("email")}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            label="Password"
            touched={formik.touched.password}
            error={!!formik.errors.password}
            helperText={formik.errors.password}
            {...formik.getFieldProps("password")}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth color="primary" variant="contained" type="submit">
            Register
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export { RegisterForm };
