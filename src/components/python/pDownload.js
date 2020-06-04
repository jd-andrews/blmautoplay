import React from "react";

import { Grid, Link } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function PDownload(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6} justify="center" alignItems="center">
        <p>
          If you're not up on coding you'll need to download Python and the
          Python Launcher
        </p>
        <p>Which can be found on the python website linked below.</p>
        <Link>Python Download</Link>
        <p>
          After that download the autoplay file, and run it with Python
          Launcher.
        </p>
      </Grid>
      <Grid item xs={6} justify="center" alignItems="center">
        <p>
          If you know how to operate a comand line interface, then it's a simple
          as navigating to the folder and running "python autoplay.py"
        </p>
        <p>
          This build is built with Python 2.7 in mind because that's what's
          native to macOS.
        </p>
      </Grid>
    </Grid>
  );
}
