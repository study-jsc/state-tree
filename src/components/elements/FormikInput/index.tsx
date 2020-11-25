import { TextField } from "@material-ui/core";
import { useField } from "formik";
import { memo } from "react";

interface IProps {
  name: string;
  label?: string;
  type?: string;
  className?: string;
  fullWidth?: boolean;
  variant?: "filled" | "outlined" | "standard";
}

const FormikInput: React.FC<IProps> = memo((props) => {
  const { name, label, type, className, fullWidth, variant } = props;
  const [field, meta] = useField(props);

  console.log("Re-render ", name);

  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      name={name}
      type={type}
      value={field.value}
      className={className}
      onChange={field.onChange}
      error={meta.touched && !!meta.error}
      helperText={meta.error}
      variant={variant}
    />
  );
});

export { FormikInput };
