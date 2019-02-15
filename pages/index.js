import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Stack from '../components/stack';
import Values from '../components/values';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Shapes from '../components/shapes';

const styles = () => ({
  heroTitle: {
    margin: '200px auto',
  },
  heroText: {
    maxWidth: 600,
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Navbar />
        <div className="container-lg">
          <h1 className={classnames('hero', classes.heroTitle)}>
            Let us turn your ideas into inspiring software
          </h1>
          <div className={classes.heroText}>
            Codefully is an agile team of software engineers who love to analyze business stories
            and know how to deliver optimal solutions. Since 2010 we design and develop software for
            companies of all sizes and from different industries. Our key services include web and
            mobile application development, data analytics and reporting, business process
            management, cloud infrastructure implementation, and UI / UX design.
            <br />
            <br />
            Whether you need an application that will improve your company&apos;s internal processes
            or a digital product for your startup, we are dedicated to guide you and support you at
            every step, from conception to the creation of the final product and beyond.
          </div>
          <Values />
          <Stack />
        </div>
        <Footer />
        <Shapes />
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Index);
