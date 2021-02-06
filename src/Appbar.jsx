import {
  Grid,
  makeStyles,
  IconButton,
  Button,
  ButtonGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    expand: { flexGrow: 1 },
    button: { marginLeft: 47, Weight: "100" },
    Button2: {
      fontWeight: 700,
      marginTop: -9,
      marginLeft: 87,
      height: 30,
      borderRadius: 100,
    },
    button1: {
      paddingLeft: 60,

      fontSize: 20,
      fontWeight: 350,
      color: " rgb(73, 9, 49)",
    },

    logo: { marginLeft: 580, width: 60, marginTop: 3 },
  };
});

export default function Appbar() {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Grid container className={classes.appbarContainer}>
        <div className={classes.expand} />
      </Grid>
      <Button className={classes.Button2} variant="contained" color="primary">
        ورود به حساب
      </Button>
      <ButtonGroup
        className={classes.button}
        size="large"
        color="primary"
        aria-label="none"
        variant="none"
      >
        <Button className={classes.button1}>پیگیری سفارش</Button>
        <Button className={classes.button1}>درباره ما</Button>
        <Button className={classes.button1}>محصولات</Button>
        <Button className={classes.button1}>خانه</Button>
      </ButtonGroup>
      <img className={classes.logo} src="/static/media/logo.png" width="100%" />
    </Grid>
  );
}
