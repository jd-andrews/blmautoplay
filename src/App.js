import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Python from "./components/python";
import Online from "./components/online";
import Info from "./components/info";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import HTH from "./assets/HTH.png";

const useStyles = makeStyles((theme) => ({
  list: {
    textDecoration: "none",
    listStyleType: "none",
    color: "#000000",
  },
  main: {
    padding: 40,
    margin: 40,
  },
  text: {
    fontSize: "1.3em",
  },
  image: {
    height: 150,
    paddingTop: 20,
    marginBottom: -20,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <Grid container justify="center" alignContent="center">
        <a href="https://www.hope-this-helps.info/" alt="hth">
          <img className={classes.image} src={HTH} alt="Hope This Helps" />
        </a>
      </Grid>
      <Paper className={classes.main} elevation={10}>
        <Grid container justify="center">
          <ButtonGroup>
            <Button variant="contained">
              <Link className={classes.list} to="/">
                About
              </Link>
            </Button>
            <Button variant="contained">
              <Link className={classes.list} to="/python">
                Python Version
              </Link>
            </Button>
            <Button variant="contained">
              <Link className={classes.list} to="/online">
                Online Version
              </Link>
            </Button>
          </ButtonGroup>
        </Grid>
      </Paper>
      <Paper className={classes.main} elevation={10}>
        <Switch>
          <Route path="/python">
            <Python />
          </Route>
          <Route path="/online">
            <Online />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Paper>
      <Paper className={classes.main} elevation={10}>
        <Info />
      </Paper>
    </Router>
  );
  function Home() {
    return (
      <Grid
        item
        xs={12}
        container
        spacing={3}
        justiyf="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={12}>
          <Typography className={classes.text}>
            Zoe Amira put together an incredible video that offers a way to
            contribute to Black Lives Matter for those that don't have money to
            donate. All of the ad revenue is donated to a mulititude of
            organizations in relation to Blak Lives Matter. It's an amazing
            video that I highly recommend you watch take the time and watch it.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text}>
            The purpose of this app and website are to help automate it. After
            my first watch I decided to keep it playing in another tab to
            (hopefully) continue to get served ads. After a couple times of
            forgetting it was playing in the background and not remembering how
            long it had been over for, I decide to make this app.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text}>
            It's fairly simple, and there are two versions: one in browser and
            one Python file. The in browser option will open a new tab (popup)
            with the video every two hours. The Python version runs a script
            locally that does the same thing.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            ** note - I'm definitely not the best programmer in any of these
            languages, this was just something I wanted to put together and ship
            fast so that other people could use it if they wanted. If you have
            comments, concerns, questions, tips, etc. please email -{" "}
            <Link
              href="hopethishelpsinfo@gmail.com"
              alt="hopethishelpsinfo@gmail.com"
            >
              hopethishelpsinfo@gmail.com
            </Link>
            **
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
