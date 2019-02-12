import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Navbar from '../components/navbar';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  container: {
    padding: '0 20px',
    margin: '0 auto 50px',
  },
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Navbar />
      <div className={classnames('container-md', classes.container)} />
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(About);
