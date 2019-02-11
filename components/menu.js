import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import ClearIcon from "@material-ui/icons/Clear";
import classnames from "classnames";

const styles = theme => ({
  menu: {
    textAlign: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, .95)",
    zIndex: 1000,
    "&>div": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      height: "100%",
      padding: "20px",
      lineHeight: 1.5
    }
  },
  link: {
    fontSize: "4rem",
    fontWeight: 900,
    letterSpacing: 1,
    transition: "all .2s",
    color: "#333 !important",
    "&:hover": {
      marginLeft: 20
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: "2rem"
    }
  },
  clear: {
    position: "absolute",
    top: 30,
    right: 20,
    fontSize: 64,
    cursor: "pointer"
  }
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { title: "home", path: "/" },
        { title: "articles", path: "/services" },
        { title: "get in touch", path: "/contact" }
      ]
    };
  }

  render() {
    const { classes, isMenuVisible, onClickClearIcon } = this.props;
    const { menuItems } = this.state;
    const items = menuItems.map((item, i) => (
      <Link key={item.title} href={item.path}>
        <a className={classes.link}>#{item.title}</a>
      </Link>
    ));
    return (
      <React.Fragment>
        {isMenuVisible && (
          <div id="menu" className={classnames(classes.menu)}>
            <CSSTransitionGroup
              component="div"
              className="container-md"
              transitionName="nav"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}
            >
              {items}
              <ClearIcon
                className={classes.clear}
                onClick={() => onClickClearIcon()}
              />
            </CSSTransitionGroup>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  onClickClearIcon: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);
