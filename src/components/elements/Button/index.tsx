import { Button as MuiButton } from "@material-ui/core";

interface IProps {
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ label, onClick }) => {
  return <MuiButton onClick={onClick}>{label}</MuiButton>;
};

export { Button };
