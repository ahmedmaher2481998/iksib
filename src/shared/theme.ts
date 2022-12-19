import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Outfit", "sans-serif", "Source Serif Pro", "serif"].join(),
  },
  palette: {
    primary: {
      main: "#ffd237",
    },
    secondary: {
      main: "#f4f5f7",
    },
    shade: { main: "#a8a8aa" },
  },
});
