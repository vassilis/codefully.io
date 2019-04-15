import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Intro from '../components/intro';
import Stack from '../components/stack';
import Values from '../components/values';
import Navbar from '../components/navbar';
import Shapes from '../components/shapes';

const styles = () => ({
  heroTitle: {
    margin: '200px auto',
  },
  heroText: {
    maxWidth: 600,
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Navbar />
        <Intro />
        <Values />
        <Stack />
        <Shapes />
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Index);
