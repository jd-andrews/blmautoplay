import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import PDownload from "./pDownload";
import File from "./file";

const useStyles = makeStyles((theme) => ({
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
      <Grid item xs={12}>
        <PDownload />
        <File />
      </Grid>
    </Grid>
  );
}
