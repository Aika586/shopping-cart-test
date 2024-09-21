import { createTheme } from "@mui/material/styles";

import "@fontsource/inter"; // Imports all weights

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    text: {
      gray: "#5C5C5C",
    },
  },
});
