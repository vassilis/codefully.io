import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: 50,
  },
  title: {
    margin: 0,
    fontSize: '3rem',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 40,
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: deepPurple[50],
        width: 650,
        height: 650,
        top: -150,
        right: 0,
        zIndex: -1,
        borderRadius: '50%',
      },
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: 'white',
        width: 500,
        height: 500,
        top: -100,
        right: 50,
        zIndex: -1,
        borderRadius: '50%',
      },
    },
  },
  subtitle: {
    fontSize: '2rem',
    lineHeight: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: '1.2rem',
  },
  reposition: {
    [theme.breakpoints.up('md')]: {
      marginTop: -60,
    },
  },
});

const Values = ({ classes }) => (
  <div className={classes.root}>
    <h2 className={classes.title}>Core Values</h2>
    <Grid container spacing={40}>
      <Grid item xs={12} md={6}>
        <h3 className={classes.subtitle}>Solutions above technology</h3>
        <Typography className={classes.text}>
          We use technology for creating solutions. Technology is not a self-serving cause. Remember
          that the technology may fizzle out but the problem you are trying to solve will most
          likely still be there.
        </Typography>
        <h3 className={classes.subtitle}>Opinionated development above blind implementation</h3>
        <Typography className={classes.text}>
          We don’t just execute. We consider our clients equal partners and we view ourselves as
          responsible for the overall success of a project. We voice our opinion and provide strong
          guidance.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} className={classes.reposition}>
        <h3 className={classes.subtitle}>People above projects</h3>
        <Typography className={classes.text}>
          We choose what we work on based on the teams that are involved. We believe that success
          requires good chemistry and we consciously spend effort building great working
          relationships.
        </Typography>
        <h3 className={classes.subtitle}>Accessibility over rigid relationships</h3>
        <Typography className={classes.text}>
          We are easy to talk to and always make sure that our customers can easily reach us.
          Building software is a collaborative process and communication is key. We believe that
          developers and product owners should be in tune.
        </Typography>
      </Grid>
    </Grid>
  </div>
);

Values.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Values);
