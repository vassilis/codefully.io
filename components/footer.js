import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  footer: {
    marginTop: 300,
    backgroundColor: grey[200],
    mixBlendMode: 'multiply',
    padding: '200px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: 40,
    },
  },
  main: {
    maxWidth: 1000,
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
    color: grey[700],
    '&:hover': {
      color: grey[900],
    },
  },
});

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="container-lg">
        <div className={classes.footer}>
          <div className={classes.main}>
            <h5 className={classes.title}>Stay in touch</h5>
            <ul className={classes.list}>
              <li className={classes.listitem}>
                <a target="_blank" className={classes.link} href="https://medium.com/codefully-io">
                  Medium
                </a>
              </li>
              <li className={classes.listitem}>
                <a target="_blank" className={classes.link} href="https://twitter.com/codefully_io">
                  Twitter
                </a>
              </li>
              <li className={classes.listitem}>
                <a
                  target="_blank"
                  className={classes.link}
                  href="https://www.facebook.com/codefully"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Footer);
