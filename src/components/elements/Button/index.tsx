import { Button as MuiButton, PropTypes } from "@material-ui/core";

interface IProps {
  fullWidth?: boolean;
  label?: string;
  type?: PropTypes.Color;
  variant?: "text" | "outlined" | "contained";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({
  fullWidth,
  label,
  type,
  variant,
  className,
  onClick,
}) => {
  return (
    <MuiButton
      fullWidth={fullWidth}
      color={type}
      onClick={onClick}
      variant={variant}
      className={className}
    >
      {label}
    </MuiButton>
  );
};

export { Button };
