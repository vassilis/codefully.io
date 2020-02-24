import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import classnames from 'classnames';
import grey from '@material-ui/core/colors/grey';
import LogoIcon from '../images/logo-icon.svg';
import Menu from './menu';

const styles = () => ({
  navbar: {
    position: 'sticky',
    top: 20,
    paddingTop: 20,
    zIndex: 1000,
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    lineHeight: 1,
  },
  logo: {
    fontFamily: '"Teko", "Roboto", sans-serif',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '36px',
    color: '#303030',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    '&img': {
      verticalAlign: 'middle',
    },
  },
  icons: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  menuIcon: {
    fontSize: 48,
    color: grey[800],
    marginLeft: 20,
    cursor: 'pointer',
  },
  grow: {
    flexGrow: 1,
  },
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
    };
  }

  componentDidMount() {
    document.body.style.overflowY = 'inherit';
  }

  showMenu = () => {
    this.setState({ isMenuVisible: true });
    document.body.style.overflowY = 'hidden';
  };

  hideMenu = () => {
    this.setState({ isMenuVisible: false });
    document.body.style.overflowY = 'inherit';
  };

  render() {
    const { classes } = this.props;
    const { isMenuVisible } = this.state;
    return (
      <div className={classes.navbar}>
        <div className={classnames('container-lg', classes.container)}>
          <div className={classes.grow}>
            <Link href="/">
              <span className={classes.logo}>
                <img
                  src={LogoIcon}
                  style={{ height: 36, marginRight: 10, verticalAlign: -8 }}
                  alt="codefully"
                />
                codefully
              </span>
            </Link>
          </div>
          <div className={classes.icons}>
            <MenuIcon className={classes.menuIcon} onClick={() => this.showMenu()} />
            {isMenuVisible && <Menu onClickClearIcon={() => this.hideMenu()} />}
          </div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(NavBar);
