import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import ClearIcon from '@material-ui/icons/Clear';
import classnames from 'classnames';
import grey from '@material-ui/core/colors/grey';
import { withRouter } from 'next/router';

const menuData = [
  { title: 'home', path: '/' },
  { title: 'work', path: '/work' },
  { title: 'articles', path: '/services' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
];

const styles = theme => ({
  menu: {
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'white',
    zIndex: 1000,
    '&>div': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: '100%',
      padding: 20,
      lineHeight: 1.3,
    },
  },
  link: {
    fontWeight: 900,
    letterSpacing: 1,
    color: grey[700],
    '&:hover': {
      color: grey[900],
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  clear: {
    position: 'absolute',
    top: 30,
    right: 15,
    fontSize: 64,
    cursor: 'pointer',
    color: grey[700],
    transition: 'color 0.1s linear',
    '&:hover': {
      color: grey[900],
    },
  },
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: menuData,
    };
  }

  // componentDidMount() {
  //   let uMenuItems = [];
  //   menuData.map((item, i) => {
  //     setTimeout(() => {
  //       uMenuItems.push(item);
  //       this.setState({ menuItems: uMenuItems });
  //     }, 100 + 100 * i);
  //   });
  // }

  render() {
    const { classes, onClickClearIcon, router } = this.props;
    const { menuItems } = this.state;
    const currentPath = router.pathname;
    const items = menuItems.map(
      (item, i) => currentPath !== item.path && (
      <Link key={item.title} href={item.path}>
        <a
          href="0"
          className={classes.link}
          style={{
            transition: `margin 0.5s ease ${i * 0.1}s, opacity 0.5s ease ${i
                  * 0.1}s, color 0.1s linear`,
          }}
        >
          {item.title}
        </a>
      </Link>
      ),
    );
    return (
      <React.Fragment>
        <div id="menu" className={classnames(classes.menu)}>
          <CSSTransitionGroup
            component="div"
            className="container-md"
            transitionName="nav"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
          >
            {items}
            <ClearIcon className={classes.clear} onClick={() => onClickClearIcon()} />
          </CSSTransitionGroup>
        </div>
      </React.Fragment>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  onClickClearIcon: PropTypes.func.isRequired,
  router: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(withRouter(Menu));
