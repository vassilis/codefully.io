import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  title: {
    color: theme.palette.primary.main,
    marginTop: 40,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Navbar />
      <div className="container-md" style={{ padding: '0 20px', margin: '0 auto 50px' }}>
        <h1 className="hero" style={{ margin: '50px 0' }}>
          Custom software solutions tailored to your unique needs
        </h1>
        <Typography style={{ marginTop: 40, maxWidth: 1000 }}>
          Expertise... experience / since 2010, rapid prototyping, MVPs, SAAS, proof of concepts,
          customer engagement, sales analytics
        </Typography>
        <Typography variant="h4" className={classes.title}>
          Methodology
        </Typography>
        <div style={{ marginTop: 5, maxWidth: 1000 }}>
          {/* Agile, Scrum, TDD, Git */}
          <p>
            Developing software requires a combination of problem-solving as well as technical
            skills. Figuring out how to tackle a complex problem (e.g. how to help a company get
            certified for a particular standard) often requires soft skills and thinking out of the
            box. We regard ourselves as part of the problem-solving process. The technical
            implementation is just the final step. Here is how we do it:
          </p>
          <ol>
            <li>
              Collaboratively we go over the need that requires addressing. We treat the issue
              holistically. The goal at this stage is to identify a solution that is a good fit for
              the problem and which takes into account the time, the budget and your long term
              aspirations regarding the product.
            </li>
            <li>
              Once we have a clear understanding and a common vision we will select the appropriate
              technologies, design the basic architecture and move as fast as possible to the
              initial implementation. We want to keep you involved with the development process and
              ensure your continuous engagement. We continuously deliver and follow each delivery
              with feedback from you.
            </li>
            <li>
              When the essential features are in place we will together go through a release
              process. The manner this is done depends on the nature of the product. Often a limited
              release will become available with the goal of making minor adjustments and obtaining
              user feedback. Together we will then ramp this up to a full release.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(About);
