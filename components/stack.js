import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Tooltip from '@material-ui/core/Tooltip';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import lightGreen from '@material-ui/core/colors/lightGreen';
import LogoRails from '../images/stack/logo-rails.svg';
import LogoPostgres from '../images/stack/logo-postgresql.svg';
import LogoHighcharts from '../images/stack/logo-highcharts.svg';
import LogoNode from '../images/stack/logo-nodejs.svg';
import LogoReact from '../images/stack/logo-react.svg';
import LogoRedux from '../images/stack/logo-redux.svg';
import LogoAws from '../images/stack/logo-aws.svg';
import LogoHeroku from '../images/stack/logo-heroku.svg';
import LogoMaterial from '../images/stack/logo-material-ui.svg';
import LogoBootstrap from '../images/stack/logo-bootstrap.svg';

const styles = theme => ({
  root: {
    margin: '200px auto 0',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    border: '1px #DDD solid',
    backgroundColor: 'white',
    padding: 10,
    width: 100,
    height: 100,
  },
  stackTitle: {
    fontSize: '3rem',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: lightGreen[50],
        width: 650,
        height: 200,
        top: 80,
        left: 100,
        zIndex: -1,
      },
    },
  },
  stackText: {
    maxWidth: 600,
    fontSize: '1.2rem',
  },
  logos: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

const Stack = ({ classes }) => (
  <div className={classes.root}>
    <h2 className={classnames(classes.stackTitle)}>Leading Stack</h2>
    <Typography className={classes.stackText}>
      In our technological stack, we blend some of the most powerful, modern and popular development
      tools available today in our industry. If we have to name a few, those would be Amazon Web
      Services, Heroku, Node.js, React, Redux, PostgreSQL, Ruby on Rails, Bootstrap, Material UI and
      Highcharts.
      <br />
      <br />
      Read more about
      {' '}
      <Link href="/stack">
        <a href="0" className="hi">
          our stack
        </a>
      </Link>
      {' '}
      and how we choose the most relevant technologies for your project, which is a key factor for
      its success and longevity.
    </Typography>
    <div className={classes.logos}>
      <Tooltip title="AWS / Amazon Web Services" placement="top">
        <img
          className={classes.img}
          src={LogoAws}
          alt="AWS / Amazon Web Services"
          style={{ top: 0, right: 0 }}
        />
      </Tooltip>
      <Tooltip title="Heroku" placement="top">
        <img className={classes.img} src={LogoHeroku} alt="Heroku" style={{ top: 0, right: 120 }} />
      </Tooltip>
      <Tooltip title="Node.js" placement="top">
        <img className={classes.img} src={LogoNode} alt="Node.js" style={{ top: 0, right: 360 }} />
      </Tooltip>
      <Tooltip title="React" placement="top">
        <img className={classes.img} src={LogoReact} alt="React" style={{ top: 120, right: 360 }} />
      </Tooltip>
      <Tooltip title="Redux" placement="top">
        <img className={classes.img} src={LogoRedux} alt="Redux" style={{ top: 120, right: 240 }} />
      </Tooltip>
      <Tooltip title="Ruby on Rails" placement="top">
        <img
          className={classes.img}
          src={LogoRails}
          alt="Ruby on Rails"
          style={{ top: 120, right: 120 }}
        />
      </Tooltip>
      <Tooltip title="PostgreSQL" placement="top">
        <img
          className={classes.img}
          src={LogoPostgres}
          alt="PostgreSQL"
          style={{ top: 0, right: 240 }}
        />
      </Tooltip>
      <Tooltip title="Material UI" placement="top">
        <img
          className={classes.img}
          src={LogoMaterial}
          alt="Material UI"
          style={{ top: 240, right: 240 }}
        />
      </Tooltip>
      <Tooltip title="Bootstrap" placement="top">
        <img
          className={classes.img}
          src={LogoBootstrap}
          alt="Bootstrap"
          style={{ top: 240, right: 120 }}
        />
      </Tooltip>
      <Tooltip title="Highcharts" placement="top">
        <img
          className={classes.img}
          src={LogoHighcharts}
          alt="Highcharts"
          style={{ top: 240, right: 0 }}
        />
      </Tooltip>
    </div>
  </div>
);

Stack.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Stack);
