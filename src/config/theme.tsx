import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1680,
    },
  },
  palette: {
    primary: {
      main: "#FFFDD0",
    },
    secondary: {
      main: "#1268F2",
    },
    text: {},
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "inherit",
      },
    },
  },
});
