import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import LogoIcon from "../images/logo-icon-3.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CircleIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import SquareIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import classnames from "classnames";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import Menu from "./menu";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    padding: "40px 0 0",
    lineHeight: 1
  },
  icons: {
    display: "flex",
    alignItems: "flex-end"
  },
  icon: {
    cursor: "pointer",
    fontSize: 24,
    color: grey[500],
    marginRight: 10
  },
  active: {
    color: red[500]
  },
  menuIcon: {
    fontSize: 48,
    color: grey[700],
    marginLeft: 20,
    cursor: "pointer"
  },
  grow: {
    flexGrow: 1
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false
    };
  }

  showMenu = () => {
    this.setState({ isMenuVisible: true });
  };

  hideMenu = () => {
    this.setState({ isMenuVisible: false });
  };

  render() {
    const { classes, onClickShape, shape } = this.props;
    const { isMenuVisible } = this.state;
    return (
      <div className={classes.root}>
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
            <div>
              <CircleIcon
                className={classnames(
                  classes.icon,
                  shape === "circle" && classes.active
                )}
                onClick={() => onClickShape("circle")}
              />
              <SquareIcon
                className={classnames(
                  classes.icon,
                  shape === "square" && classes.active
                )}
                onClick={() => onClickShape("square")}
              />
            </div>
          )}
          <MenuIcon
            className={classes.menuIcon}
            onClick={() => this.showMenu()}
          />
          <Menu
            isMenuVisible={isMenuVisible}
            onClickClearIcon={() => this.hideMenu()}
          />
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickShape: PropTypes.func,
  onClickMenuIcon: PropTypes.func,
  shape: PropTypes.string
};

export default withStyles(styles)(NavBar);
