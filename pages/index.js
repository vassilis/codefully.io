import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar";
import Stack from "../components/stack";
import classnames from "classnames";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import landing1 from "../images/code-art-3.jpg";
import loading from "../images/loading.gif";
import { Grid, Button } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import lime from "@material-ui/core/colors/lime";
import teal from "@material-ui/core/colors/teal";
import deepOrange from "@material-ui/core/colors/deepOrange";
import LogoIcon from "../images/logo-icon-4.svg";
import BackgroundImage from "react-background-image-loader";

const styles = theme => ({
  landing: {
    height: "100vh",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    backgroundPosition: "50%"
  },
  title: {
    color: theme.palette.primary.main
  },
  text0: {
    fontSize: "1.6rem"
  },
  text1: {
    fontSize: "1.4rem"
  },
  text2: {
    fontSize: "1.2rem"
  },
  textWhite: {
    color: "white"
  },
  blue: {
    color: theme.palette.getContrastText(blue[100]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700]
    }
  },
  lime: {
    color: theme.palette.getContrastText(lime[100]),
    backgroundColor: lime[500],
    "&:hover": {
      backgroundColor: lime[700]
    }
  },
  teal: {
    color: theme.palette.getContrastText(teal[100]),
    backgroundColor: teal[500],
    "&:hover": {
      backgroundColor: teal[700]
    }
  },
  deepOrange: {
    color: theme.palette.getContrastText(deepOrange[100]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700]
    }
  }
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.landing = React.createRef();
    this.main = React.createRef();
    this.state = { imageStatus: "loading" };
  }

  componentDidMount() {
    const image = this.landing.current;
    if (image && image.complete) {
      this.handleImageLoaded();
    }
  }

  handleScrollToMain = event => {
    scroll.scrollTo(this.main.current.offsetTop - 180);
  };

  handleImageLoaded = () => {
    this.setState({ imageStatus: "loaded" });
  };

  render() {
    const { classes } = this.props;
    const { imageStatus } = this.state;

    return (
      <React.Fragment>
        <BackgroundImage
          src={landing1}
          placeholder={loading}
          className={classes.landing}
        />
        <div className="hero" ref={this.main}>
          <div className="container-md">
            {/* Bring your ideas and let’s work together to build something beautiful */}
            Let us turn your ideas into inspiring software
            <Typography className={classes.text1} style={{ marginTop: 50 }}>
              Codefully is an agile team of software engineers who love to
              analyze business stories and know how to deliver optimal
              solutions.
            </Typography>
          </div>
        </div>
        <div style={{ backgroundColor: "#000" }}>
          <div className="container-md">
            <Grid container spacing={24}>
              <Grid item md={6} style={{ borderRight: "3px white solid" }}>
                <div style={{ padding: "5rem 5rem 5rem 0" }}>
                  <Typography
                    className={classnames(classes.text0, classes.textWhite)}
                  >
                    Since 2010 we design and implement solutions for companies
                    of all sizes and from different industries.
                    <br />
                    <br />
                  </Typography>
                  <Typography
                    className={classnames(classes.text2, classes.textWhite)}
                  >
                    - We produced applications that dramatically improved
                    aspects of business processes.
                    <br />- We helped companies turn their data into insights.
                    <br />- We solved problems like managing complicated sales
                    contracts for distributor networks or getting custom sales
                    analytics and reports on demand and on schedule.
                    <br />- We developed customer rewards management systems, as
                    well as risk, and innovation management systems.
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} style={{ borderLeft: "3px white solid" }}>
                <div style={{ padding: "5rem 0 5rem 5rem" }}>
                  <Typography
                    className={classnames(classes.text1, classes.textWhite)}
                  >
                    Some of our key services include web and mobile application
                    development, data analytics and reporting, business process
                    management, cloud infrastructure implementation, and UI / UX
                    design.
                    <br />
                    <br />
                    <br />
                    <Link href="/services">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.deepOrange}
                      >
                        Services
                      </Button>
                    </Link>
                    <Link href="/services#methodology">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.blue}
                        style={{ marginLeft: 10 }}
                      >
                        Methodology
                      </Button>
                    </Link>
                    <Link href="/work">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.lime}
                        style={{ marginLeft: 10 }}
                      >
                        Work
                      </Button>
                    </Link>
                    <Link href="/work#projects">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.teal}
                        style={{ marginLeft: 10 }}
                      >
                        Projects
                      </Button>
                    </Link>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="container-md" style={{ padding: "5rem 0" }}>
          <Stack />
          <Typography className={classes.text1}>
            Our software stack is based on the following technologies and
            frameworks: Ruby on Rails, React, deepOrangeux, Node.js, PostgreSQL,
            Amazon Web Services, Heroku.
            <br />
            <br /> Read more about{" "}
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
          <a className="logo-v">
            <img src={LogoIcon} style={{ height: 120 }} alt="codefully" />
            codefully
          </a>
          <br />
          <br />
          <Link href="/contact">
            <Button>get in touch</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequideepOrange
};

export default withStyles(styles)(Index);
