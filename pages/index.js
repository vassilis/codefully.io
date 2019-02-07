import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Stack from "../components/stack";
import classnames from "classnames";
import Link from "next/link";
import landing1 from "../images/code-art-3.jpg";
import loading from "../images/loading.gif";
import { Grid, Button } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import lime from "@material-ui/core/colors/lime";
import teal from "@material-ui/core/colors/teal";
import deepOrange from "@material-ui/core/colors/deepOrange";
import LogoIcon from "../images/logo-icon-4.svg";
import BackgroundImage from "react-background-image-loader";
import { pages } from "../src/content";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  landing: {
    height: "100vh",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    backgroundPosition: "50% 0",
    backgroundAttachment: "fixed"
  },
  title: {
    color: theme.palette.primary.main
  },
  text0: {
    fontSize: "1.6rem"
  },
  text1: {
    fontSize: "1.1rem",
    columnCount: 2,
    columnGap: 80,
    columnRule: "1px solid rgba(0, 0, 0, 0.12)"
  },
  text2: {
    fontSize: "1.2rem"
  },
  textWhite: {
    color: "white"
  },
  blue: {
    color: theme.palette.getContrastText(blue[100]),
    "&:hover": {
      borderColor: blue[500],
      backgroundColor: blue[300]
    }
  },
  lime: {
    color: theme.palette.getContrastText(lime[100]),
    "&:hover": {
      borderColor: lime[500],
      backgroundColor: lime[300]
    }
  },
  teal: {
    color: theme.palette.getContrastText(teal[100]),
    "&:hover": {
      borderColor: teal[500],
      backgroundColor: teal[300]
    }
  },
  deepOrange: {
    color: theme.palette.getContrastText(deepOrange[100]),
    "&:hover": {
      borderColor: deepOrange[500],
      backgroundColor: deepOrange[300]
    }
  },
  btn: {
    borderColor: "rgba(0, 0, 0, 0.12)",
    fontFamily: "Advent Pro",
    padding: "3rem",
    fontSize: "1.5rem"
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
        <BackgroundImage
          src={landing1}
          placeholder={loading}
          className={classes.landing}
        />
        <div className="hero" ref={this.main}>
          <div className="container-md">
            {pages.index.title2}
            <Typography className={classes.text1} style={{ marginTop: 50 }}>
              {pages.index.text1}
            </Typography>
            <Grid
              container
              spacing={24}
              style={{ textAlign: "center", marginTop: 100 }}
            >
              <Grid item xs={12} md={3}>
                <Link href="/services">
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classnames(classes.deepOrange, classes.btn)}
                    fullWidth
                  >
                    Services
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/services#methodology">
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classnames(classes.blue, classes.btn)}
                    fullWidth
                  >
                    Methodology
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/work">
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classnames(classes.lime, classes.btn)}
                    fullWidth
                  >
                    Work
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/work#projects">
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classnames(classes.teal, classes.btn)}
                    fullWidth
                  >
                    Projects
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <Divider />
        <div className="container-md" style={{ padding: "5rem 0" }}>
          <Stack />
          <Typography className={classes.text2}>
            {pages.stack.text}
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
