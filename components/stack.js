import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Tooltip from '@material-ui/core/Tooltip';
import classnames from 'classnames';
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

const styles = () => ({
  root: {
    marginTop: 400,
    position: 'relative',
  },
  title: {
    maxWidth: 1000,
    margin: '0 auto 20px',
  },
  text: {
    maxWidth: 1000,
    margin: '0 auto',
  },
  logos: {
    margin: '50px auto',
    maxWidth: 1000,
  },
  img: {
    border: '1px #DDD solid',
    backgroundColor: 'white',
    padding: 10,
    width: 100,
    height: 100,
    margin: '10px 20px 0 0',
  },
});

const Stack = ({ classes }) => (
  <div className="container-lg" style={{ marginTop: 400 }}>
    <h1 className={classnames(classes.title)}>Leading Stack</h1>
    <div className={classes.text}>
      In our technological stack, we blend some of the most powerful, modern and popular development
      tools available today in our industry. If we have to name a few, those would be Amazon Web
      Services, Heroku, Node.js, React, Redux, PostgreSQL, Ruby on Rails, Bootstrap, Material UI and
      Highcharts.
    </div>
    <div className={classes.logos}>
      <div>
        <Tooltip title="AWS / Amazon Web Services" placement="top">
          <img
            className={classes.img}
            src={LogoAws}
            alt="AWS / Amazon Web Services"
            style={{ top: 0, right: 0 }}
          />
        </Tooltip>
        <Tooltip title="Heroku" placement="top">
          <img className={classes.img} src={LogoHeroku} alt="Heroku" />
        </Tooltip>
        <Tooltip title="Node.js" placement="top">
          <img className={classes.img} src={LogoNode} alt="Node.js" />
        </Tooltip>
        <Tooltip title="React" placement="top">
          <img className={classes.img} src={LogoReact} alt="React" />
        </Tooltip>
        <Tooltip title="Redux" placement="top">
          <img className={classes.img} src={LogoRedux} alt="Redux" />
        </Tooltip>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Tooltip title="Ruby on Rails" placement="top">
          <img className={classes.img} src={LogoRails} alt="Ruby on Rails" />
        </Tooltip>
        <Tooltip title="PostgreSQL" placement="top">
          <img className={classes.img} src={LogoPostgres} alt="PostgreSQL" />
        </Tooltip>
        <Tooltip title="Material UI" placement="top">
          <img className={classes.img} src={LogoMaterial} alt="Material UI" />
        </Tooltip>
        <Tooltip title="Bootstrap" placement="top">
          <img className={classes.img} src={LogoBootstrap} alt="Bootstrap" />
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
    <div className={classes.text}>
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
    </div>
  </div>
);

Stack.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Stack);
