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

const styles = theme => ({
  title: {
    color: theme.palette.primary.main
  },
  text1: {
    fontSize: "1.2rem",
    marginTop: 5,
    maxWidth: 1000
  }
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
    this.state = {};
  }

  handleScrollToMain = event => {
    scroll.scrollTo(this.main.current.offsetTop);
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className="landing1" onClick={this.handleScrollToMain}>
          {/* Software engineering is art and logic in balance... */}
        </div>
        <div
          ref={this.main}
          className="container-md"
          style={{ padding: "20px 24px 0" }}
        >
          <Navbar />
          <div className="hero">
            Bring your ideas and let’s work together to build something
            beautiful
          </div>
          <div className={classnames("title", classes.title)}>
            {/* Get in touch and book a seat to the digital transformation journey! */}
            Reason
          </div>
          <Typography className={classes.text1}>
            Codefully is an agile team of software engineers who love to analyze
            business stories and know how to deliver optimal solutions. Some of
            our key services include web and mobile application development,
            data analytics and reporting, business process management, cloud
            infrastructure implementation, and UI / UX design.
            <br />
            Read more about the{" "}
            <Link href="/services">
              <a className="hi">services we offer</a>
            </Link>{" "}
            and{" "}
            <Link href="/services#methodology">
              <a className="hi">our methodology</a>
            </Link>
            .
          </Typography>
          <div className={classnames("title", classes.title)}>Work</div>
          <Typography className={classes.text1}>
            Since 2010 we design and implement solutions for companies of all
            sizes and from different industries. We produced applications that
            dramatically improved aspects of business processes. We helped
            companies turn their data into insights. We solved problems like
            managing complicated sales contracts for distributor networks or
            getting custom sales analytics and reports on demand and on
            schedule. We developed customer rewards management systems, as well
            as risk, and innovation management systems.
            <br />
            Read more about{" "}
            <Link href="/work">
              <a className="hi">our work</a>
            </Link>{" "}
            and view some of{" "}
            <Link href="/work#projects">
              <a className="hi">our projects</a>
            </Link>
            .
          </Typography>
          <div className={classnames("title", classes.title)}>Stack</div>
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
          <div style={{ padding: "100px 0" }} />
        </div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
