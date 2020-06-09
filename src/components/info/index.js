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
          href="https://docs.google.com/document/u/0/d/1S5uckFHCA_XZkxG0Zg5U4GQGbY_RklZARwu43fqJH0E/mobilebasic"
          alt="anti-racism resource list"
        >
          Anti-Racism Resource List
        </Link>
      </Grid>
    </Grid>
  );
}
