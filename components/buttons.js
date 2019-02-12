import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Link from 'next/link';
import { Grid, Button } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import lime from '@material-ui/core/colors/lime';
import teal from '@material-ui/core/colors/teal';
import deepOrange from '@material-ui/core/colors/deepOrange';

const styles = theme => ({
  blue: {
    color: theme.palette.getContrastText(blue[100]),
    '&:hover': {
      borderColor: blue[500],
      backgroundColor: blue[300],
    },
  },
  lime: {
    color: theme.palette.getContrastText(lime[100]),
    '&:hover': {
      borderColor: lime[500],
      backgroundColor: lime[300],
    },
  },
  teal: {
    color: theme.palette.getContrastText(teal[100]),
    '&:hover': {
      borderColor: teal[500],
      backgroundColor: teal[300],
    },
  },
  deepOrange: {
    color: theme.palette.getContrastText(deepOrange[100]),
    '&:hover': {
      borderColor: deepOrange[500],
      backgroundColor: deepOrange[300],
    },
  },
  btn: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    fontFamily: 'Advent Pro',
    padding: '3rem',
    fontSize: '1.5rem',
  },
});

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24} style={{ textAlign: 'center', marginTop: 100 }}>
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
    );
  }
}

Buttons.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Buttons);
