import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import ClearIcon from "@material-ui/icons/Clear";
import classnames from "classnames";

const styles = theme => ({
  menu: {
    textAlign: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, .95)",
    zIndex: 1000,
    "&>div": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      height: "100%",
      padding: "20px",
      lineHeight: 1.5
    }
  },
  link: {
    fontSize: "4rem",
    fontWeight: 900,
    letterSpacing: 1,
    color: "#333 !important",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  clear: {
    position: "absolute",
    top: 30,
    right: 30,
    fontSize: 64,
    cursor: "pointer"
  }
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, isMenuVisible, onClickClearIcon } = this.props;

    return (
      <React.Fragment>
        {isMenuVisible && (
          <div id="menu" className={classnames(classes.menu)}>
            <div className="container-md">
              <Link href="/">
                <a className={classes.link}>#home</a>
              </Link>
              <Link href="/services">
                <a className={classes.link}>#articles</a>
              </Link>
              <Link href="/contact">
                <a className={classes.link}>#get in touch</a>
              </Link>
              <ClearIcon
                className={classes.clear}
                onClick={() => onClickClearIcon()}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  onClickClearIcon: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);
