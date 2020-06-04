import React from "react";

import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function Default(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs>
        Default
      </Grid>
    </Grid>
  );
}
