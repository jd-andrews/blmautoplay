import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Running from "./running";
import Default from "./default";

const useStyles = makeStyles((theme) => ({
  list: {
    textDecoration: "none",
    listStyleType: "none",
  },
}));

export default function Online(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const openVid = () => {
    window.open("https://linktr.ee/miliberation");
    setCount(count + 1);
  };
  return (
    <Grid container>
      <Grid item xs>
        Online and count {count}
      </Grid>

      {/* <Grid item xs>
        {setInterval(openVid, 6000000)}
      </Grid> */}
      <Router>
        <div>
          <nav>
            <ul className={classes.list}>
              <li>
                <Link className={classes.list} to="/running">
                  running
                </Link>
              </li>
              <li>
                <Link className={classes.list} to="/">
                  default
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/running">
              <Running />
            </Route>
            <Route path="/">
              <Default />
            </Route>
          </Switch>
        </div>
      </Router>
    </Grid>
  );
}
