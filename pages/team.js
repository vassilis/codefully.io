import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
      <div className="container-lg" style={{ padding: '0 20px', margin: '0 auto 50px' }}>
        <h1 className="hero" style={{ margin: '50px 0', maxWidth: 1200 }}>
          The Team
        </h1>
        <p style={{ marginTop: 40, maxWidth: 900, display: 'none' }}>
          Expertise... experience / since 2010, rapid prototyping, MVPs, SAAS, proof of concepts,
          customer engagement, sales analytics
        </p>
        <Typography variant="h4" className={classes.title}>
          Core
        </Typography>
        <div style={{ marginTop: 5, maxWidth: 900 }}>
          <p>
            We are a core team of two and between us, we have experience and knowledge that covers
            the full stack (and so much more!). We have worked together since 2010 and we have
            completed projects that are used by a range of industries. We mostly work towards
            building internal company tools so we can demo only parts of the applications (as shown
            in the top 10 most common features).
          </p>
          <Typography variant="h4" className={classes.title}>
            Vassilis
          </Typography>
          <p>
            Vassilis has been working on IT for nearly 20 years. His earlier work was front end
            focused, but he soon moved to work with the full stack. Vassilis has gained his working
            experience developing websites for companies of all sizes and budgets (from the New York
            stock exchange all the way to our local customers).
          </p>
          <Typography variant="h4" className={classes.title}>
            Dimitris
          </Typography>
          <p>
            Dimitris has been working on IT projects for about 10 years. Before that, he spent time
            in academia as a university researcher, gained a Ph.D. in Physics from the University of
            Cambridge, and studied at Imperial College and The University of Edinburgh.
          </p>
          <p>
            Between them, they have released software that is currently being used by several large
            corporations (Siemens, Eaton, Orsam, Rittal, Wesco, among others).
          </p>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(About);
