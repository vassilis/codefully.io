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
import amber from "@material-ui/core/colors/amber";
import portraits from "../components/portraits";

const styles = theme => ({
  heroSq: {
    cursor: "crosshair",
    marginTop: 50,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: 40,
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        backgroundColor: amber[100],
        // backgroundImage: `url(${bg})`,
        width: 450,
        height: 450,
        top: 0,
        left: 0,
        zIndex: -1
      }
    }
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1
  },
  heroTitle: {
    position: "relative",
    zIndex: 2,
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
    this.state = {
      image: null,
      timeoutIsCleared: true
    };
  }

  onmousemove = e => {
    const { timeoutIsCleared } = this.state;
    if (typeof end !== "undefined") {
      clearTimeout(end);
    }
    if (timeoutIsCleared) {
      const n = Math.floor(Math.random() * portraits.length);
      this.setState({ timeoutIsCleared: false });
      const t = setTimeout(() => {
        window.end = setTimeout(() => {
          this.setState({ image: null, timeoutIsCleared: true });
        }, 2000);
        this.setState({ image: portraits[n], timeoutIsCleared: true });
        clearTimeout(t);
      }, 100);
    }
  };

  render() {
    const { classes } = this.props;
    const { image } = this.state;

    return (
      <React.Fragment>
        <div
          className="container-md"
          style={{ padding: "0 20px", margin: "0 auto 50px" }}
        >
          <Navbar />
          <div className={classes.heroSq} onMouseMove={this.onmousemove}>
            <img src={image} alt="" className={classes.img} />
            <div className={classnames("hero", classes.heroTitle)}>
              {pages.index.title2}
            </div>
            <Typography className={classes.heroText}>
              <span dangerouslySetInnerHTML={{ __html: pages.index.text1 }} />
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
