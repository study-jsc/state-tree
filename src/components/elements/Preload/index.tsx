import { Box, CircularProgress, makeStyles } from "@material-ui/core";

interface IProps {
  loading?: boolean;
}

const useStyles = makeStyles(() => ({
  container: {
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));

const Preload: React.FC<IProps> = ({ children, loading }) => {
  const classes = useStyles();

  return !loading ? (
    <>{children}</>
  ) : (
    <Box className={classes.container}>
      <CircularProgress />
    </Box>
  );
};

export { Preload };
