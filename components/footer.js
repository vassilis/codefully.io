import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

const styles = theme => ({
  root: {
    padding: "100px 0",
    textAlign: "center",
    backgroundColor: "#eee"
  },
  link: {
    fontSize: "3rem",
    fontFamily: '"Teko", "Roboto", sans-serif',
    fontWeight: 700,
    color: "#333 !important"
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
      <div className={classes.root}>
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
