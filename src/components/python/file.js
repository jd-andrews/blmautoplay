import React from "react";

import { Grid, Link } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function File(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs>
        <Link href="" alt="blm">
          Link to the file on GitHub.
        </Link>
      </Grid>
    </Grid>
  );
}
