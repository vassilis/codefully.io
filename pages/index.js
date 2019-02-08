import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Stack from "../components/stack";
import classnames from "classnames";
import Link from "next/link";
import { pages } from "../src/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import deepPurple from "@material-ui/core/colors/deepPurple";

const styles = theme => ({
  heroSq: {
    marginTop: 50,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: 40,
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        backgroundColor: deepPurple[100],
        width: 450,
        height: 450,
        top: 0,
        left: 0,
        zIndex: -1
      }
    }
  },
  heroTitle: {
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem"
    }
  },
  heroText: {
    marginTop: 50,
    fontSize: "1.2rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: 450
    }
  },
  stackText: {
    maxWidth: 900,
    fontSize: "1.2rem",
    margin: "0 auto"
  }
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.landing = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    const image = this.landing.current;
    if (image && image.complete) {
      this.handleImageLoaded();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div
          className="container-md"
          style={{ padding: "0 20px", margin: "0 auto 50px" }}
        >
          <Navbar />
          <div className={classes.heroSq}>
            <div className={classnames("hero", classes.heroTitle)}>
              {pages.index.title2}
            </div>
            <Typography className={classes.heroText}>
              <div dangerouslySetInnerHTML={{ __html: pages.index.text1 }} />
            </Typography>
          </div>
          <Stack />
          <Typography className={classes.stackText}>
            {pages.stack.text}
            <br />
            Read more about{" "}
            <Link href="/stack">
              <a className="hi">our stack</a>
            </Link>
            .
          </Typography>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
