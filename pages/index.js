import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Stack from "../components/stack";
import Values from "../components/values";
import classnames from "classnames";
import { pages } from "../src/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import amber from "@material-ui/core/colors/amber";
import portraits from "../components/portraits";
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
        backgroundColor: amber[100],
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
  drop: {
    position: "absolute",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: deepPurple[50],
    borderRadius: "50%",
    zIndex: -1
  }
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      image: null,
      timeoutIsCleared: false
    };
  }

  componentDidMount() {
    portraits.forEach(picture => {
      const img = new Image();
      img.src = picture;
    });
    for (let i = 0; i < portraits.length; i++) {
      setTimeout(() => {
        window.end = setTimeout(() => {
          this.setState({ image: portraits[i] });
        }, i * 100);
      });
    }
    setTimeout(() => {
      this.setState({ image: null, timeoutIsCleared: true });
      this.slider.current.addEventListener("mousemove", this.play);
    }, portraits.length * 100);
    document.body.addEventListener("mousemove", this.draw);
  }

  componentWillUnmount() {
    document.body.removeEventListener("mousemove", this.draw);
  }

  draw = e => {
    const { classes } = this.props;
    const drop = document.createElement("span");
    let size = Math.floor(Math.random() * 500);
    const top = e.pageY - size / 2 + "px";
    const left = e.pageX - size / 2 + "px";
    size += "px";
    drop.className = classes.drop;
    drop.style.cssText = `top: ${top};left: ${left};width: ${size};height: ${size};`;
    document.body.appendChild(drop);
    setTimeout(() => {
      document.body.removeChild(drop);
    }, 10000);
  };

  play = e => {
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
        }, 1000);
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
          <div ref={this.slider} className={classes.heroSq}>
            <img src={image} alt="" className={classes.img} />
            <div className={classnames("hero", classes.heroTitle)}>
              {pages.index.title2}
            </div>
            <Typography className={classes.heroText}>
              <span dangerouslySetInnerHTML={{ __html: pages.index.text1 }} />
            </Typography>
          </div>
          <Values />
          <Stack />
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
