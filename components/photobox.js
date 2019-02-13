import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import portraits from '../data/portraits';

let endTimeout;

const styles = theme => ({
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

class Photobox extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      image: null,
      timeoutIsCleared: false,
    };
    this.timeouts = [];
  }

  componentDidMount() {
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
  }

  componentWillUnmount() {
    this.slider.current.removeEventListener('mousemove', this.play);
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
    clearTimeout(endTimeout);
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

  render() {
    const { classes } = this.props;
    const { image } = this.state;

    return (
      <div ref={this.slider} className={classes.heroSq}>
        <img src={image} alt="" className={classes.slider} />
      </div>
    );
  }
}

Photobox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Photobox);
