import React from "react";

import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import PDownload from "./pDownload";
import File from "./file";

const useStyles = makeStyles((theme) => ({}));

export default function Python(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        Python
        <Grid item xs>
          <PDownload />
          <File />
        </Grid>
      </Grid>
    </Grid>
  );
}
