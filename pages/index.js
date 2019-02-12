import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import amber from '@material-ui/core/colors/amber';
import deepPurple from '@material-ui/core/colors/deepPurple';
import _ from 'lodash';
import Stack from '../components/stack';
import Values from '../components/values';
import Navbar from '../components/navbar';
import portraits from '../data/portraits';
import Footer from '../components/footer';

let endTimeout;

const styles = theme => ({
  heroSq: {
    marginTop: 50,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: 40,
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: amber[100],
        width: 450,
        height: 450,
        top: 0,
        left: 0,
        zIndex: -1,
      },
    },
  },
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  heroTitle: {
    position: 'relative',
    zIndex: 2,
    maxWidth: 900,
  },
  heroText: {
    marginTop: 50,
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')]: {
      marginLeft: 450,
    },
  },
  circle: {
    position: 'absolute',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: deepPurple[50],
    borderRadius: '50%',
    zIndex: -1,
    transform: 'translate(-50%, -50%)',
  },
  square: {
    position: 'absolute',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: deepPurple[50],
    zIndex: -1,
    transform: 'translate(-50%, -50%)',
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      shape: 'circle',
      shapes: [],
      image: null,
      timeoutIsCleared: false,
    };
    this.timeouts = [];
  }

  componentDidMount() {
    document.body.style.cursor = 'crosshair';
    portraits.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
    for (let i = 0; i < portraits.length; i += 1) {
      this.timeouts.push(
        setTimeout(() => {
          this.setState({ image: portraits[i] });
        }, i * 100),
      );
    }
    this.timeouts.push(
      setTimeout(() => {
        if (this.slider.current) {
          this.setState({ image: null, timeoutIsCleared: true });
          this.slider.current.addEventListener('mousemove', this.play);
        }
      }, 100 * (portraits.length + 1)),
    );
    document.body.addEventListener('mousemove', this.addShape);
  }

  componentWillUnmount() {
    document.body.style.cursor = 'inherit';
    this.slider.current.removeEventListener('mousemove', this.play);
    document.body.removeEventListener('mousemove', this.addShape);
    this.clearAllTimeouts();
  }

  clearAllTimeouts = () => {
    clearTimeout(endTimeout);
    for (let i = 0; i < this.timeouts.length; i += 1) {
      clearTimeout(this.timeouts[i]);
    }
  };

  play = () => {
    const { timeoutIsCleared } = this.state;
    if (typeof end !== 'undefined') {
      clearTimeout(endTimeout);
    }
    if (timeoutIsCleared) {
      const n = Math.floor(Math.random() * portraits.length);
      this.setState({ timeoutIsCleared: false });
      this.timeouts.push(
        setTimeout(() => {
          this.setState({ image: portraits[n], timeoutIsCleared: true });
          endTimeout = setTimeout(() => {
            this.setState({ image: null, timeoutIsCleared: true });
          }, 1000);
        }, 100),
      );
    }
  };

  addShape = (e) => {
    const { shapes } = this.state;
    const x = e.pageX;
    const y = e.pageY;
    const id = `s${Date.now()}`;
    if (x % 3 === 0 && y % 3 === 0) {
      const size = Math.floor(Math.random() * 500);
      const newShape = {
        id,
        size,
        top: y,
        left: x,
      };
      const uShapes = [...shapes, newShape];
      this.setState({ shapes: uShapes });
      setTimeout(() => {
        this.removeShape(id);
      }, 10000);
    }
  };

  removeShape = (id) => {
    const { shapes } = this.state;
    const oShapes = _.filter(shapes, s => s.id !== id);
    this.setState({
      shapes: oShapes,
    });
  };

  selectShape = (shape) => {
    this.setState({ shape });
  };

  render() {
    const { classes } = this.props;
    const { image, shape, shapes } = this.state;

    return (
      <React.Fragment>
        <Navbar onClickShape={s => this.selectShape(s)} shape={shape} />
        <div className="container-md" style={{ padding: '0 20px', margin: '0 auto 50px' }}>
          <div ref={this.slider} className={classes.heroSq}>
            <img src={image} alt="" className={classes.slider} />
            <div className={classnames('hero', classes.heroTitle)}>
              Let us turn your ideas into inspiring software
            </div>
            <Typography className={classes.heroText}>
              Codefully is an agile team of software engineers who love to analyze business stories
              and know how to deliver optimal solutions. Since 2010 we design and develop software
              for companies of all sizes and from different industries. Our key services include web
              and mobile application development, data analytics and reporting, business process
              management, cloud infrastructure implementation, and UI / UX design.
              <br />
              <br />
              Whether you need an application that will improve your company&apos;s internal
              processes or a digital product for your startup, we are dedicated to guide you and
              support you at every step, from conception to the creation of the final product and
              beyond.
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
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
            }}
          />
        ))}
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Index);
