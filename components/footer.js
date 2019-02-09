import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

const styles = theme => ({
  root: {
    padding: "200px 0",
    textAlign: "center"
  },
  link: {
    fontSize: "3rem",
    fontFamily: '"Teko", "Roboto", sans-serif',
    fontWeight: 700,
    color: "#333 !important",
    margin: "0 15px"
  }
});

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div id="menu" className={classes.root}>
        <Link href="/services">
          <a className={classes.link}>#articles</a>
        </Link>
        <Link href="/contact">
          <a className={classes.link}>#get in touch</a>
        </Link>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
