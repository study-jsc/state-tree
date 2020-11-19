import { TextField } from "@material-ui/core";
import { memo, useCallback } from "react";

interface IProps {
  fullWidth?: boolean;
  name?: string;
  label?: string;
  className?: string;
  value?: string;
  type?: string;
  variant?: "filled" | "outlined" | "standard";
  onChange?: (value: string) => void;
}

const Input: React.FC<IProps> = memo(
  ({ fullWidth, name, label, className, value, type, variant, onChange }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <TextField
        fullWidth={fullWidth}
        name={name}
        label={label}
        className={className}
        value={value}
        type={type}
        variant={variant}
        onChange={handleChange}
      />
    );
  }
);

export { Input };
