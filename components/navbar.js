import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Button, Fab } from "@material-ui/core";
import LogoIcon from "../images/logo-icon-4.svg";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50
  },
  grow: {
    flexGrow: 1
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.grow}>
        <Link href="/">
          <a className="logo" style={{ margin: 0 }}>
            <img
              src={LogoIcon}
              style={{ height: 36, marginRight: 10, verticalAlign: -8 }}
              alt="codefully"
            />
            codefully
          </a>
        </Link>
      </div>
      <Link href="/services">
        <Button style={{ marginLeft: 10 }}>Services</Button>
      </Link>
      <Link href="/work">
        <Button style={{ marginLeft: 10 }}>Work</Button>
      </Link>
      <Link href="/about">
        <Button style={{ marginLeft: 10 }}>About</Button>
      </Link>
      <Link href="/contact">
        <Fab
          style={{ marginLeft: 20 }}
          variant="extended"
          color="primary"
          elevation={2}
        >
          Contact
        </Fab>
      </Link>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
