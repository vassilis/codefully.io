import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import Navbar from '../components/navbar';
import goma from '../images/work/goma.jpg';
import goma1 from '../images/work/goma1.png';
import goma2 from '../images/work/goma2.png';
import goma3 from '../images/work/goma3.png';
import goma4 from '../images/work/goma4.png';
import Footer from '../components/footer';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  container: {
    padding: '20px',
    maxWidth: 1600,
    margin: '100px auto',
  },
  imgHero: {
    minHeight: 500,
    width: '100%',
    objectFit: 'cover',
  },
  sectionHero: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.container}>
        <img src={goma} alt="Goma" className={classes.imgHero} />
        <div className={classes.sectionHero}>
          <h1 className="hero">Cyber Governance Tool</h1>
          <h2>Ruby on Rails, Postgres, React, Redux, Highcharts</h2>
        </div>
        <Grid container spacing={40}>
          <Grid item xs={12} md={6}>
            <img src={goma1} alt="Goma" className="img-fluid" />
            <br />
            <img src={goma2} alt="Goma" className="img-fluid" />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={goma4} alt="Goma" className="img-fluid" />
            <br />
            <img src={goma3} alt="Goma" className="img-fluid" />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(About);
