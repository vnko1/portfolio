import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface LoaderProps {
  open: boolean;
  handleClose?: () => void;
}
const Loader: React.FC<LoaderProps> = ({ open, handleClose }) => {
  const onClick = () => {
    handleClose && handleClose();
  };
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={onClick}
    >
      <CircularProgress color="inherit" />{" "}
    </Backdrop>
  );
};

export default Loader;
