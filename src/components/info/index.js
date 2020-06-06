import React from "react";

import { Grid, Link, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  links: {
    fontSize: "1.2em",
  },
  desc: {
    paddingLeft: 10,
  },
  head: {
    fontWeight: "bold",
    fontSize: "1.4em",
  },
}));

export default function Info(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography className={classes.head}>
          helpful links to sites that are way more important
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Link
          className={classes.links}
          href="https://blacklivesmatter.carrd.co/"
          alt="black lives matter aggregate"
        >
          blacklivesmatter.card.co
        </Link>
      </Grid>
      <Grid item xs={8}>
        <Link
          className={classes.links}
          href="https://8cantwait.org/"
          alt="8 cant wait"
        >
          8 Can't Wait
        </Link>
      </Grid>
    </Grid>
  );
}
