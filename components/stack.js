import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Link from "next/link";
import LogoRails from "../images/logo-rails.svg";
import LogoPostgres from "../images/logo-postgresql.svg";
import LogoHighcharts from "../images/logo-highcharts.svg";
import LogoNode from "../images/logo-nodejs.svg";
import LogoReact from "../images/logo-react.svg";
import LogoRedux from "../images/logo-redux.svg";
import LogoAws from "../images/logo-aws.svg";
import LogoHeroku from "../images/logo-heroku.svg";
import LogoMaterial from "../images/logo-material-ui.svg";
import LogoBootstrap from "../images/logo-bootstrap.svg";
import Tooltip from "@material-ui/core/Tooltip";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "50px 0",
    maxWidth: 1000,
    margin: "0 auto"
  },
  img: {
    margin: 20,
    border: "1px white solid",
    height: 100
  }
});

const Stack = ({ classes }) => (
  <div className={classes.root}>
    <Tooltip title="AWS / Amazon Web Services" placement="top">
      <img
        className={classes.img}
        style={{ width: 110 }}
        src={LogoAws}
        alt="AWS / Amazon Web Services"
      />
    </Tooltip>
    <Tooltip title="Heroku" placement="top">
      <img
        className={classes.img}
        style={{ width: 80 }}
        src={LogoHeroku}
        alt="Heroku"
      />
    </Tooltip>
    <Tooltip title="Node.js" placement="top">
      <img
        className={classes.img}
        style={{ width: 140 }}
        src={LogoNode}
        alt="Node.js"
      />
    </Tooltip>
    <Tooltip title="React" placement="top">
      <img
        className={classes.img}
        style={{ width: 90 }}
        src={LogoReact}
        alt="React"
      />
    </Tooltip>
    <Tooltip title="Redux" placement="top">
      <img
        className={classes.img}
        style={{ width: 80 }}
        src={LogoRedux}
        alt="Redux"
      />
    </Tooltip>
    <Tooltip title="Ruby on Rails" placement="top">
      <img
        className={classes.img}
        style={{ width: 160 }}
        src={LogoRails}
        alt="Ruby on Rails"
      />
    </Tooltip>
    <Tooltip title="PostgreSQL" placement="top">
      <img
        className={classes.img}
        style={{ width: 80 }}
        src={LogoPostgres}
        alt="PostgreSQL"
      />
    </Tooltip>
    <Tooltip title="Material UI" placement="top">
      <img
        className={classes.img}
        style={{ width: 90 }}
        src={LogoMaterial}
        alt="Material UI"
      />
    </Tooltip>
    <Tooltip title="Bootstrap" placement="top">
      <img
        className={classes.img}
        style={{ width: 80 }}
        src={LogoBootstrap}
        alt="Bootstrap"
      />
    </Tooltip>
    <Tooltip title="Highcharts" placement="top">
      <img
        className={classes.img}
        style={{ width: 90 }}
        src={LogoHighcharts}
        alt="Highcharts"
      />
    </Tooltip>
  </div>
);

Stack.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stack);
