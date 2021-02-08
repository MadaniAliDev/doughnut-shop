import {
  Button,
  Grid,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import "./App.css";
import React from "react";
import { ChevronRight } from "@material-ui/icons";
import { ChevronLeft } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 275,
      backgroundColor: "#fce4ec",
      borderRadius: 40,
      marginBottom: 20,
      marginLeft: 205,
    },
    root1: {
      maxWidth: 275,
      backgroundColor: "#fce4ec",
      borderRadius: 40,
      marginBottom: 20,
      marginLeft: 605,
      marginTop: -302,
    },
    root2: {
      maxWidth: 275,
      backgroundColor: "#fce4ec",
      borderRadius: 40,
      marginBottom: 20,
      marginLeft: 1005,
      marginTop: -302,
    },

    media: {
      height: 180,
    },
    mah: {
      width: 1040,
      height: 160,
      marginLeft: -10,
      marginTop: -20,
    },
    ghe: {
      fontSize: 30,
      fontWeight: 700,
      marginLeft: 80,
      marginTop: 10,
    },
    Icon: {
      marginLeft: 1330,
      marginTop: -375,
      backgroundColor: "#ad1457",
      color: "white",
    },
    Icon1: {
      marginLeft: -1270,
      marginTop: -375,
      backgroundColor: "#ad1457",
      color: "white",
    },
    name: { marginTop: -40, marginLeft: 30, color: "rgb(73, 9, 49)" },
    name2: { marginTop: -40, marginLeft: 55, color: "rgb(73, 9, 49)" },
    name3: { marginTop: -40, marginLeft: 63, color: "rgb(73, 9, 49)" },
    Button: {
      color: "white",
      borderRadius: 20,
      fontSize: 15,
      marginLeft: 95,
      fontWeight: 700,
      backgroundColor: "#ad1457",
      marginTop: -20,
    },
  };
});

export default function Intro() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <h5>پر طرفدارامون</h5>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static//media/mah.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                className={classes.name}
                gutterBottom
                variant="h5"
                component="h2"
              >
                دونات توت فرنگی
              </Typography>

              <Typography className={classes.ghe}> ۲۰۰۰۰t </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.Button} size="small" color="red">
              سفارش
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root1}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static//media/choco.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                className={classes.name2}
                gutterBottom
                variant="h5"
                component="h2"
              >
                دونات شکلاتی
              </Typography>

              <Typography className={classes.ghe}> ۲۰۰۰۰t </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.Button} size="small" color="red">
              سفارش
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static//media/vanila.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                className={classes.name3}
                gutterBottom
                variant="h5"
                component="h2"
              >
                دونات وانیلی
              </Typography>

              <Typography className={classes.ghe}> ۲۰۰۰۰t </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.Button} size="small" color="red">
              سفارش
            </Button>
          </CardActions>
        </Card>

        <IconButton className={classes.Icon}>
          <ChevronRight color="white" size="large" />
        </IconButton>
        <IconButton className={classes.Icon1}>
          <ChevronLeft color="white" size="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
