import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles((theme) => {
  return {
    don: {
      width: 650,

      marginTop: 30,
      marginLeft: -199,
    },
    Button2: {
      fontWeight: 700,
      marginTop: -169,
      marginLeft: -130,
      height: 30,
      borderRadius: 100,
    },
    Button3: {
      fontWeight: 700,
      marginTop: 139,
      marginLeft: -140,
      height: 30,
      borderRadius: 100,
    },
  };
});

export default function Intro() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={6}>
        <img
          className={classes.don}
          src="/static/media/donat.png"
          width="100%"
        />
      </Grid>
      <h1>خاطراتتو خوشمزه تر بساز</h1>

      <Button className={classes.Button2} variant="contained" color="secondary">
        دنبال چی میگردی
      </Button>
      <h2>اگه میخوای یه کادو تولد خوشمزه بدی</h2>
      <h3>..و کلی حال کنی به سایت خوش آمدی</h3>
      <Button className={classes.Button3} variant="contained" color="primary">
        مشاهده محصولات
      </Button>
    </Grid>
  );
}
