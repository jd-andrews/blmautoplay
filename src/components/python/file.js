import React from "react";

import { Grid, Typography, Link } from "@material-ui/core";
import autoplay from "../../assets/blmtest.py";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function File(props) {
  return (
    <Grid container spacing={1} direction="column">
      <Grid item xs>
        <Typography>
          For those that know how to use a command line interface, just download
          the file below.
        </Typography>
      </Grid>
      <Grid item xs>
        <Link href={autoplay} download="blmautoplay.py" alt="blm autoplay file">
          Autoplay File Download
        </Link>
      </Grid>
      <Grid item xs>
        <Typography>
          You can run it through the cli be moving to the directory where it's
          located and using the "python" command.
        </Typography>
      </Grid>
    </Grid>
  );
}
