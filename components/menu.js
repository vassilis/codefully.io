import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

const styles = theme => ({
  menuVisible: {
    padding: "200px 0",
    textAlign: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, .95)",
    zIndex: 1000,
    "&>div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: 600,
      margin: "0 auto",
      lineHeight: 1.5
    }
  },
  menuHidden: {
    display: "none",
    "&>div": {
      transition: "width 1s",
      width: 100
    }
  },
  link: {
    fontSize: "3rem",
    fontFamily: '"Teko", "Roboto", sans-serif',
    fontWeight: 700,
    color: "#333 !important",
    margin: "0 15px",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, isMenuVisible } = this.props;

    return (
      <div
        id="menu"
        className={isMenuVisible ? classes.menuVisible : classes.menuHidden}
      >
        <div>
          <Link href="/services">
            <a className={classes.link}>#articles</a>
          </Link>
          <Link href="/contact">
            <a className={classes.link}>#get in touch</a>
          </Link>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  isMenuVisible: PropTypes.bool.isRequired
};

export default withStyles(styles)(Menu);
