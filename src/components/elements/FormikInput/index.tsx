import { TextField } from "@material-ui/core";
import { useField } from "formik";

interface IProps {
  name: string;
  label?: string;
  type?: string;
  className?: string;
  fullWidth?: boolean;
  variant?: "filled" | "outlined" | "standard";
}

const FormikInput: React.FC<IProps> = ({
  name,
  label,
  type,
  className,
  fullWidth,
  variant,
}) => {
  const [field, meta] = useField({ name });

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
};

export { FormikInput };
