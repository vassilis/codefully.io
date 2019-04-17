import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import Navbar from '../../components/navbar';
import vetrian from '../../images/work/vetrian.png';
import vetrian1 from '../../images/work/vetrian1.png';
import vetrian2 from '../../images/work/vetrian2.png';
import vetrian3 from '../../images/work/vetrian3.png';
import vetrian4 from '../../images/work/vetrian4.png';
import Footer from '../../components/footer';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  container: {
    padding: '20px',
    maxWidth: 1600,
    margin: '100px auto',
    textAlign: 'center',
  },
  imgHero: {
    minHeight: 500,
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

function Vetrian(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.container}>
        <img src={vetrian} alt="Vetrian" className={classes.imgHero} border={1} />
        <div className={classes.sectionHero}>
          <h1 className="hero">Veterinary practice management tool</h1>
          <h2>Ruby on Rails, Postgres, React</h2>
        </div>
        <Grid container spacing={40}>
          <Grid item xs={12} md={6}>
            <img src={vetrian1} alt="Vetrian" className="img-fluid" border={1} />
            <br />
            <img src={vetrian2} alt="Vetrian" className="img-fluid" border={1} />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={vetrian3} alt="Vetrian" className="img-fluid" border={1} />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}

Vetrian.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Vetrian);
