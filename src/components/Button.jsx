import { Button } from "@mui/material";

const ButtonElement = ({ children, startIcon, endIcon }) => {
  return (
    <Button
      variant="contained"
      endIcon={endIcon}
      startIcon={startIcon}
      sx={{
        mt: "50px",
        "& .MuiButton-startIcon": {
          position: "absolute",
          top: "22px",
          left: "33px", // Adjust dynamically
        },
        "& .MuiButton-endIcon": {
          position: "absolute",
          top: "22px",
          right: "33px",
        },
        textTransform: "none",
        paddingBlock: "18px",
        backgroundColor: "#9DD458",
        borderRadius: "18px",
        fontSize: "16px",
        fontWeight: "600",
        position: "relative",
        justifySelf: "flex-end",
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonElement;
