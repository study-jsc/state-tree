import { TextField } from "@material-ui/core";
import { memo } from "react";

interface IInputProps {
  value?: string;
  name?: string;
  type?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<IInputProps> = memo(
  ({
    fullWidth,
    value,
    name,
    label,
    type,
    helperText,
    error,
    touched,
    onChange,
    onBlur,
  }) => {
    console.log("Re-render: ", name);

    return (
      <TextField
        fullWidth={fullWidth}
        variant="outlined"
        name={name}
        type={type}
        label={label}
        value={value}
        error={touched && error}
        helperText={touched && helperText}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  }
);

export { Input };
