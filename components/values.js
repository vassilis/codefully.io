import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = theme => ({
  root: {
    marginTop: 250,
  },
  title: {
    margin: 0,
    fontSize: '3rem',
  },
  subtitle: {
    fontSize: '2rem',
    lineHeight: 1,
    marginTop: 150,
    marginBottom: 10,
  },
  text: {
    maxWidth: 900,
  },
});

const Values = ({ classes }) => (
  <div className={classes.root}>
    {/* <h2 className={classes.title}>Core Values</h2> */}
    <h3 className={classes.subtitle}>Solutions above technology</h3>
    <p className={classes.text}>
      We use technology for creating solutions. Technology is not a self-serving cause. Remember
      that the technology may fizzle out but the problem you are trying to solve will most likely
      still be there.
    </p>
    <h3 className={classes.subtitle}>Opinionated development above blind implementation</h3>
    <p className={classes.text}>
      We don’t just execute. We consider our clients equal partners and we view ourselves as
      responsible for the overall success of a project. We voice our opinion and provide strong
      guidance.
    </p>
    <h3 className={classes.subtitle}>People above projects</h3>
    <p className={classes.text}>
      We choose what we work on based on the teams that are involved. We believe that success
      requires good chemistry and we consciously spend effort building great working relationships.
    </p>
    <h3 className={classes.subtitle}>Accessibility over rigid relationships</h3>
    <p className={classes.text}>
      We are easy to talk to and always make sure that our customers can easily reach us. Building
      software is a collaborative process and communication is key. We believe that developers and
      product owners should be in tune.
    </p>
  </div>
);

Values.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Values);
