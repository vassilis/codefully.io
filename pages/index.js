import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Stack from "../components/stack";
import Values from "../components/values";
import classnames from "classnames";
import { pages } from "../data/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import amber from "@material-ui/core/colors/amber";
import portraits from "../data/portraits";
import deepPurple from "@material-ui/core/colors/deepPurple";
import _ from "lodash";

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
  slider: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
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
  circle: {
    position: "absolute",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: deepPurple[50],
    borderRadius: "50%",
    zIndex: -1,
    transform: "translate(-50%, -50%)"
  },
  square: {
    position: "absolute",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: deepPurple[50],
    zIndex: -1,
    transform: "translate(-50%, -50%)"
  }
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      shape: "circle",
      shapes: [],
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
      if (this.slider.current) {
        this.setState({ image: null, timeoutIsCleared: true });
        this.slider.current.addEventListener("mousemove", this.play);
      }
    }, 100 * (portraits.length + 1));
    document.body.addEventListener("mousemove", this.addShape);
  }

  componentWillUnmount() {
    this.slider.current.removeEventListener("mousemove", this.play);
    document.body.removeEventListener("mousemove", this.addShape);
  }

  addShape = e => {
    const { shapes } = this.state;
    const x = e.pageX;
    const y = e.pageY;
    const id = "s" + Date.now();
    if (x % 3 === 0 && y % 3 === 0) {
      const size = Math.floor(Math.random() * 500);
      const newShape = {
        id: id,
        size: size,
        top: y,
        left: x
      };
      const uShapes = [...shapes, newShape];
      this.setState({ shapes: uShapes });
      setTimeout(() => {
        this.removeShape(id);
      }, 10000);
    }
  };

  removeShape = id => {
    const { shapes } = this.state;
    const oShapes = _.filter(shapes, s => s.id !== id);
    this.setState({
      shapes: oShapes
    });
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
      }, 100);
    }
  };

  selectShape = shape => {
    this.setState({ shape: shape });
  };

  render() {
    const { classes } = this.props;
    const { image, shape, shapes } = this.state;

    return (
      <React.Fragment>
        <div
          className="container-md"
          style={{ padding: "0 20px", margin: "0 auto 50px" }}
        >
          <Navbar
            onClickShape={shape => this.selectShape(shape)}
            shape={shape}
          />
          <div ref={this.slider} className={classes.heroSq}>
            <img src={image} alt="" className={classes.slider} />
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
        {shapes.map(s => (
          <i
            key={s.id}
            className={classes[shape]}
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          />
        ))}
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
