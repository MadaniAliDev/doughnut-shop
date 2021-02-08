import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: { default: "#ffebee" },
    primary: { main: "#e0f7fa" },
    secondary: { main: "#ad1457" },
    white: { main: "#fce4ec" },
  },
  typography: { fontFamily: "IRANSans" },
});

export default theme;
