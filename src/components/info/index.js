import React from "react";

import { Grid, Link, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  links: {
    fontSize: "1.4em",
  },
  desc: {
    paddingLeft: 10,
  },
}));

export default function Info(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3">Info and Resources</Typography>
      </Grid>
      <Grid item xs={8}>
        <Link
          className={classes.links}
          href="https://blacklivesmatter.carrd.co/"
          alt="black lives matter aggregate"
        >
          blacklivesmatter.card.co
        </Link>
        <Typography className={classes.desc}>
          By far the most helpful and a general catchall for everything, most
          questions can be answered here.
        </Typography>
      </Grid>
    </Grid>
  );
}
