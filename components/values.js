import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Grey from '@material-ui/core/colors/grey';

const styles = () => ({
  root: {
    maxWidth: 600,
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
  text: {},
  box1: {
    padding: 20,
    backgroundColor: Grey[300],
  },
});

const Values = ({ classes }) => (
  <div className="container-lg" style={{ marginTop: 200 }}>
    {/* <h2 className={classes.title}>Core Values</h2> */}
    <Grid container spacing={40}>
      <Grid item xs={12} lg={6}>
        <div className={classes.box1}>
          <h3 className={classes.subtitle}>Solutions above technology</h3>
          <p className={classes.text}>
            We use technology for creating solutions. Technology is not a self-serving cause.
            Remember that the technology may fizzle out but the problem you are trying to solve will
            most likely still be there.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <h3 className={classes.subtitle}>Opinionated development above blind implementation</h3>
        <p className={classes.text}>
          We don’t just execute. We consider our clients equal partners and we view ourselves as
          responsible for the overall success of a project. We voice our opinion and provide strong
          guidance.
        </p>
      </Grid>
      <Grid item xs={12} lg={6}>
        <h3 className={classes.subtitle}>People above projects</h3>
        <p className={classes.text}>
          We choose what we work on based on the teams that are involved. We believe that success
          requires good chemistry and we consciously spend effort building great working
          relationships.
        </p>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div className={classes.box1}>
          <h3 className={classes.subtitle}>Accessibility over rigid relationships</h3>
          <p className={classes.text}>
            We are easy to talk to and always make sure that our customers can easily reach us.
            Building software is a collaborative process and communication is key. We believe that
            developers and product owners should be in tune.
          </p>
        </div>
      </Grid>
    </Grid>
  </div>
);

Values.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Values);
