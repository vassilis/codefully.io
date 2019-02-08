import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Stack from "../components/stack";
import classnames from "classnames";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import LogoIcon from "../images/logo-icon-4.svg";
import { pages } from "../src/content";
import Navbar from "../components/navbar";

const styles = theme => ({
  heroSq: {
    marginTop: 50,
    position: "relative",
    padding: 40,
    [theme.breakpoints.up("md")]: {
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        backgroundColor: "#fff176",
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
      fontSize: "4rem"
    }
  },
  heroText: {
    marginTop: 50,
    [theme.breakpoints.up("md")]: {
      marginLeft: 450
    }
  },
  title: {
    color: theme.palette.primary.main
  },
  text0: {
    fontSize: "1.6rem"
  },
  text1: {
    fontSize: "1.1rem"
  },
  text2: {
    fontSize: "1.2rem"
  },
  link: {
    color: "#333 !important"
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
            <div className={classes.heroText}>
              <Typography className={classes.text1} style={{ marginTop: 10 }}>
                <div dangerouslySetInnerHTML={{ __html: pages.index.text1 }} />
              </Typography>
            </div>
          </div>
          <Stack />
          <Typography className={classes.text2}>
            {pages.stack.text} Read more about{" "}
            <Link href="/stack">
              <a className="hi">our stack</a>
            </Link>
            .
          </Typography>
        </div>
        <div
          style={{
            padding: "100px 0",
            textAlign: "center",
            backgroundColor: "#eee"
          }}
        >
          <a className="logo">
            <img
              src={LogoIcon}
              style={{ height: 35, marginRight: 10 }}
              alt="codefully"
            />
            codefully <br />
            <br />
            <Link href="/contact">
              <a className={classes.link}>#get in touch</a>
            </Link>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
