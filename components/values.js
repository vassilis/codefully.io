import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Grey from '@material-ui/core/colors/grey';
import img1 from '../images/values/28x.jpg';
import img2 from '../images/values/18x.jpg';
import img3 from '../images/values/25x.jpg';
import img4 from '../images/values/604126.jpg';

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
    lineHeight: 1,
    marginBottom: 20,
  },
  text: {
    padding: 40,
  },
  box: {
    backgroundColor: Grey[200],
    mixBlendMode: 'multiply',
    height: '100%',
  },
  img: {
    width: '100%',
    borderBottom: '10px white solid',
  },
});

const Values = ({ classes }) => (
  <div className="container-lg" style={{ marginTop: 200 }}>
    {/* <h2 className={classes.title}>Core Values</h2> */}
    <Grid container spacing={40}>
      <Grid item xs={12} lg={6}>
        <div className={classes.box}>
          <img src={img1} alt="" className={classes.img} />
          <div className={classes.text}>
            <h2 className={classes.subtitle}>Solutions above technology</h2>
            We use technology for creating solutions. Technology is not a self-serving cause.
            Remember that the technology may fizzle out but the problem you are trying to solve will
            most likely still be there.
          </div>
        </div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div className={classes.box}>
          <img src={img2} alt="" className={classes.img} />
          <div className={classes.text}>
            <h2 className={classes.subtitle}>Opinionated development above blind implementation</h2>
            We don’t just execute. We consider our clients equal partners and we view ourselves as
            responsible for the overall success of a project. We voice our opinion and provide
            strong guidance.
          </div>
        </div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div className={classes.box}>
          <img src={img3} alt="" className={classes.img} />
          <div className={classes.text}>
            <h2 className={classes.subtitle}>People above projects</h2>
            We choose what we work on based on the teams that are involved. We believe that success
            requires good chemistry and we consciously spend effort building great working
            relationships.
          </div>
        </div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div className={classes.box}>
          <img src={img4} alt="" className={classes.img} />
          <div className={classes.text}>
            <h2 className={classes.subtitle}>Accessibility over rigid relationships</h2>
            We are easy to talk to and always make sure that our customers can easily reach us.
            Building software is a collaborative process and communication is key. We believe that
            developers and product owners should be in tune.
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
);

Values.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Values);
