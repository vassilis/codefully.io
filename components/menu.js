import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import ClearIcon from "@material-ui/icons/Clear";
import classnames from "classnames";
import grey from "@material-ui/core/colors/grey";

const menuData = [
  { title: "home", path: "/" },
  { title: "articles", path: "/services" },
  { title: "get in touch", path: "/contact" }
];

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
      padding: 20,
      lineHeight: 1.5
    }
  },
  link: {
    fontSize: "4rem",
    fontWeight: 900,
    letterSpacing: 1,
    color: grey[700],
    "&:hover": {
      color: grey[900]
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: "2rem"
    }
  },
  clear: {
    position: "absolute",
    top: 30,
    right: 0,
    fontSize: 64,
    cursor: "pointer",
    color: grey[700],
    transition: "color 0.1s linear",
    "&:hover": {
      color: grey[900]
    }
  }
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: menuData
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
    const { classes, onClickClearIcon } = this.props;
    const { menuItems } = this.state;
    const items = menuItems.map((item, i) => (
      <Link key={item.title} href={item.path}>
        <a
          className={classes.link}
          style={{
            transition: `margin 0.5s ease ${i * 0.1}s, opacity 0.5s ease ${i *
              0.1}s, color 0.1s linear`
          }}
        >
          {item.title}
        </a>
      </Link>
    ));
    return (
      <React.Fragment>
        <div id="menu" className={classnames(classes.menu)}>
          <CSSTransitionGroup
            component="div"
            className="container-md"
            transitionName="nav"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
          >
            {items}
            <ClearIcon
              className={classes.clear}
              onClick={() => onClickClearIcon()}
            />
          </CSSTransitionGroup>
        </div>
      </React.Fragment>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickClearIcon: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);
