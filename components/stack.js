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

const styles = () => ({
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
    margin: 20
  }
});

const Stack = ({ classes }) => (
  <div className={classes.root}>
    <Link href="/services">
      <img
        className={classes.img}
        style={{ width: 110, cursor: "pointer" }}
        src={LogoAws}
        alt="AWS"
      />
    </Link>
    <img
      className={classes.img}
      style={{ width: 60 }}
      src={LogoHeroku}
      alt="Heroku"
    />
    <img
      className={classes.img}
      style={{ width: 140 }}
      src={LogoNode}
      alt="Node"
    />
    <img
      className={classes.img}
      style={{ width: 90 }}
      src={LogoReact}
      alt="React"
    />
    <img
      className={classes.img}
      style={{ width: 80 }}
      src={LogoRedux}
      alt="Redux"
    />
    <img
      className={classes.img}
      style={{ width: 160 }}
      src={LogoRails}
      alt="Ruby on Rails"
    />
    <img
      className={classes.img}
      style={{ width: 80 }}
      src={LogoPostgres}
      alt="PostgreSQL"
    />
    <img
      className={classes.img}
      style={{ width: 90 }}
      src={LogoMaterial}
      alt="Material UI"
    />
    <img
      className={classes.img}
      style={{ width: 80 }}
      src={LogoBootstrap}
      alt="Bootstrap"
    />
    <img
      className={classes.img}
      style={{ width: 90 }}
      src={LogoHighcharts}
      alt="Highcharts"
    />
  </div>
);

Stack.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stack);
