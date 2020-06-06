import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function PDownload(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.resp} direction="column" spacing={1}>
      <Grid item xs>
        <Typography>
          If you don't know Python, then you'll need to download it as well as
          the Python Launcher, link below.
        </Typography>
      </Grid>
      <Grid item xs>
        <Link
          href="https://www.python.org/downloads/"
          alt="python download website"
        >
          Python Download
        </Link>
      </Grid>
      <Grid item xs>
        <Typography>
          Python is super simple and the website makes it easy to understand how
          to download and get started.
        </Typography>
      </Grid>
    </Grid>
  );
}
