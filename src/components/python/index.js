import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import PDownload from "./pDownload";
import File from "./file";

const useStyles = makeStyles((theme) => ({
  resp: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },

    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  hold: {
    padding: 10,
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {
      width: 300,
    },
    [theme.breakpoints.up("lg")]: {
      width: 400,
    },
  },
  tite: {
    fontSize: "1.2em",
    fontWeight: "bold",
  },
}));

export default function Python(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item xs={12}>
        <Typography className={classes.tite}> Python</Typography>
      </Grid>
      <Grid
        item
        container
        xs
        alignItems="center"
        justify="center"
        className={classes.resp}
      >
        <Grid className={classes.hold}>
          <PDownload />
        </Grid>
        <Grid className={classes.hold}>
          <File />
        </Grid>
      </Grid>
    </Grid>
  );
}
