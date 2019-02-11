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
    marginLeft: 20
  },
  grow: {
    flexGrow: 1
  }
};

function ButtonAppBar(props) {
  const { classes, onClickShape, shape } = props;
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
        <a href="#menu">
          <MenuIcon className={classes.menuIcon} />
        </a>
      </div>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickShape: PropTypes.func,
  shape: PropTypes.string
};

export default withStyles(styles)(ButtonAppBar);
