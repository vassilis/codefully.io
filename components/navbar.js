import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import CircleIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import SquareIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import classnames from 'classnames';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import LogoIcon from '../images/logo-icon.svg';
import Menu from './menu';

const styles = theme => ({
  navbar: {
    position: 'sticky',
    top: 0,
    paddingTop: 20,
    backgroundColor: 'rgba(255,255,255,0.6)',
    zIndex: 1000,
    borderRadius: 5,
    maxWidth: 1200,
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    lineHeight: 1,
    cursor: 'default',
  },
  icons: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  shapeIcons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    cursor: 'pointer',
    fontSize: 24,
    color: grey[500],
    marginRight: 10,
  },
  active: {
    color: red[500],
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
    const { classes, onClickShape, shape } = this.props;
    const { isMenuVisible } = this.state;
    return (
      <div className={classes.navbar}>
        <div className={classnames('container-md', classes.container)}>
          <div className={classes.grow}>
            <Link href="/">
              <a className="logo" style={{ margin: 0 }}>
                <img
                  src={LogoIcon}
                  style={{ height: 36, marginRight: 10, verticalAlign: -8 }}
                  alt="codefully"
                />
                codefully
              </a>
            </Link>
          </div>
          <div className={classes.icons}>
            {shape && (
              <div className={classes.shapeIcons}>
                <CircleIcon
                  className={classnames(classes.icon, shape === 'circle' && classes.active)}
                  onClick={() => onClickShape('circle')}
                />
                <SquareIcon
                  className={classnames(classes.icon, shape === 'square' && classes.active)}
                  onClick={() => onClickShape('square')}
                />
              </div>
            )}
            <MenuIcon className={classes.menuIcon} onClick={() => this.showMenu()} />
            {isMenuVisible && <Menu onClickClearIcon={() => this.hideMenu()} />}
          </div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickShape: PropTypes.func,
  onClickMenuIcon: PropTypes.func,
  shape: PropTypes.string,
};

export default withStyles(styles)(NavBar);
