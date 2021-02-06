import { CssBaseline, Grid, MuiThemeProvider } from "@material-ui/core";
import Appbar from "./Appbar";
import Intro from "./Intro";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container alignItems="center" justify="center">
          <Appbar />
          <Intro />
        </Grid>
      </MuiThemeProvider>
    </>
  );
}
export default App;
