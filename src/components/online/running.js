import React, { useState } from "react";
import Counter from "./useInterval";
import { Grid, Button, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  psst: {
    fontSize: ".7em",
  },
  tite: {
    fontSize: "1.2em",
    fontWeight: "bold",
  },
}));

export default function Running(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const firstRun = () => {
    setCount(count + 1);
    console.log(count);
    window.open("https://youtu.be/bCgLa25fDHM");
  };

  const runningScript = () => {
    if (count % 2 === 0) {
      return <div>click button to start</div>;
    } else {
      return (
        <div>
          <Counter />
        </div>
      );
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={3}
      direction="column"
    >
      <Grid item xs>
        <Typography className={classes.tite}>Online Version</Typography>
      </Grid>
      <Grid item xs>
        <Typography>
          This version runs after you click the button. A new window will open
          (usually caught as a popup) with the video playing every two hours.
          Also apparently if you just spam one video youtube will flag you as
          spam. Shocking, I know. To combat that just play a different video
          every now and then. Sorry it's not fully automated.
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={3}
      >
        <Grid item xs>
          <Button
            variant="contained"
            onClick={() => {
              firstRun();
            }}
          >
            Watch
          </Button>
        </Grid>
        <Grid item xs>
          {runningScript()}
        </Grid>
      </Grid>
      <Grid item xs>
        <Typography className={classes.psst}>
          **still working on this, so for now hit the button below and then the
          autoplay function will work.
        </Typography>
      </Grid>
    </Grid>
  );
}
