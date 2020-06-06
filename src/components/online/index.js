import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Running from "./running";

const useStyles = makeStyles((theme) => ({}));

export default function Online(props) {
  return (
    <Grid container>
      <Running />
    </Grid>
  );
}
