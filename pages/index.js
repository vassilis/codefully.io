import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar";
import Stack from "../components/stack";
import classnames from "classnames";
// import { Grid } from "@material-ui/core";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
import landing1 from "../images/code-art-3.jpg";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  title: {
    color: theme.palette.primary.main
  },
  text1: {
    fontSize: "1.4rem",
    marginTop: 5,
    maxWidth: 900
  },
  text2: {
    fontSize: "1.2rem",
    marginTop: 5,
    maxWidth: 900
  },
  textWhite: {
    color: "white"
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
        <div className={classnames("landing1-bg", imageStatus)}>
          {
            <img
              ref={this.landing}
              src={landing1}
              alt="Codefully | The art of software engineering"
              className="landing1"
            />
          }
        </div>
        {/* <Navbar /> */}
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
                    className={classnames(classes.text1, classes.textWhite)}
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
                      <a className="hi">Services</a>
                    </Link>
                    <Link href="/services#methodology">
                      <a className="hi" style={{ marginLeft: 10 }}>
                        Methodology
                      </a>
                    </Link>
                    <Link href="/work">
                      <a className="hi" style={{ marginLeft: 10 }}>
                        Work
                      </a>
                    </Link>
                    <Link href="/work#projects">
                      <a className="hi" style={{ marginLeft: 10 }}>
                        Projects
                      </a>
                    </Link>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="container-md" style={{ padding: "5rem 0" }}>
          <Typography className={classes.text1}>
            Our software stack is based on the following technologies and
            frameworks: Ruby on Rails, React, Redux, Node.js, PostgreSQL, Amazon
            Web Services, Heroku.
            <br /> Read more about{" "}
            <Link href="/stack">
              <a className="hi">our stack</a>
            </Link>
            .
          </Typography>
          <Stack />
        </div>
        <div style={{ padding: "100px 0" }} />
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
