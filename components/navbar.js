import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Button } from "@material-ui/core";
import LogoIcon from "../images/logo-icon-3.svg";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    padding: "20px 0"
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
        <Button style={{ marginLeft: 10 }}>Contact</Button>
      </Link>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
