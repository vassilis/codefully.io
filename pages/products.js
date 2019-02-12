import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Navbar from "../components/navbar";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Navbar />
      <div className="container-md" style={{ marginTop: 50 }} />
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
