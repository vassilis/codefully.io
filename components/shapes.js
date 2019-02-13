import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import _ from 'lodash';
import CircleIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import SquareIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import classnames from 'classnames';

let timeout;

const styles = () => ({
  icons: {
    display: 'flex',
    alignItems: 'flex-end',
    display: 'none',
  },
  icon: {
    cursor: 'pointer',
    fontSize: 24,
    color: grey[500],
    marginRight: 10,
  },
  active: {
    color: red[500],
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

class Shapes extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      shape: 'circle',
      shapes: [],
    };
  }

  componentDidMount() {
    document.body.style.cursor = 'crosshair';
    document.body.addEventListener('mousemove', this.addShape);
  }

  componentWillUnmount() {
    document.body.style.cursor = 'inherit';
    document.body.removeEventListener('mousemove', this.addShape);
    clearTimeout(timeout);
  }

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
      timeout = setTimeout(() => {
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
    const { shape, shapes } = this.state;

    return (
      <React.Fragment>
        <div className={classes.icons}>
          {shape && (
            <div className={classes.shapeIcons}>
              <CircleIcon
                className={classnames(classes.icon, shape === 'circle' && classes.active)}
                onClick={() => this.selectShape('circle')}
              />
              <SquareIcon
                className={classnames(classes.icon, shape === 'square' && classes.active)}
                onClick={() => this.selectShape('square')}
              />
            </div>
          )}
        </div>
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

Shapes.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Shapes);
