import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  heroTitle: {
    margin: '200px auto',
    maxWidth: 1000,
  },
  outer: {
    position: 'relative',
    backgroundColor: Grey[200],
    mixBlendMode: 'multiply',
    padding: '200px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: 40,
    },
  },
  heroText: {
    maxWidth: 1000,
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
});

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="container-lg">
        <h1 className={classnames('hero', classes.heroTitle)}>
          Let us turn your ideas into inspiring software
        </h1>
        <div className={classes.outer}>
          <div className={classes.heroText}>
            Codefully is an agile team of software engineers who love to analyze business stories
            and know how to deliver optimal solutions. Since 2010 we design and develop software for
            companies of all sizes and from different industries. Our key services include web and
            mobile application development, data analytics and reporting, business process
            management, cloud infrastructure implementation, and UI / UX design.
            <br />
            <br />
            Whether you need an application that will improve your company&apos;s internal processes
            or a digital product for your startup, we are committed to guide you and support you at
            every step, from conception to the creation of the final product and beyond.
          </div>
        </div>
      </div>
    );
  }
}

Intro.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Intro);
