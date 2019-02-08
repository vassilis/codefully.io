import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Link from "next/link";
import LogoRails from "../images/stack/logo-rails.svg";
import LogoPostgres from "../images/stack/logo-postgresql.svg";
import LogoHighcharts from "../images/stack/logo-highcharts.svg";
import LogoNode from "../images/stack/logo-nodejs.svg";
import LogoReact from "../images/stack/logo-react.svg";
import LogoRedux from "../images/stack/logo-redux.svg";
import LogoAws from "../images/stack/logo-aws.svg";
import LogoHeroku from "../images/stack/logo-heroku.svg";
import LogoMaterial from "../images/stack/logo-material-ui.svg";
import LogoBootstrap from "../images/stack/logo-bootstrap.svg";
import Tooltip from "@material-ui/core/Tooltip";
import classnames from "classnames";
import { pages } from "../src/content";
import Typography from "@material-ui/core/Typography";
import lightGreen from "@material-ui/core/colors/lightGreen";

const styles = theme => ({
  root: {
    margin: "150px auto",
    position: "relative"
  },
  img: {
    position: "absolute",
    border: "1px #DDD solid",
    backgroundColor: "white",
    padding: 10,
    width: 100,
    height: 100
  },
  stackTitle: {
    margin: "-70px 0 0 0",
    fontSize: "3rem",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: 40,
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        backgroundColor: lightGreen[50],
        width: 650,
        height: 200,
        top: 80,
        left: 100,
        zIndex: -1
      }
    }
  },
  stackText: {
    maxWidth: 600,
    fontSize: "1.2rem"
  }
});

const Stack = ({ classes }) => (
  <div className={classes.root}>
    <h2 className={classnames(classes.stackTitle)}>{pages.stack.title}</h2>
    <Typography className={classes.stackText}>
      <span dangerouslySetInnerHTML={{ __html: pages.stack.text }} />
      <br />
      <br />
      Read more about{" "}
      <Link href="/stack">
        <a className="hi">our stack</a>
      </Link>{" "}
      and how we choose the most relevant technologies for your project, which
      is a key factor for its success and longevity.
    </Typography>
    <Tooltip title="AWS / Amazon Web Services" placement="top">
      <img
        className={classes.img}
        src={LogoAws}
        alt="AWS / Amazon Web Services"
        style={{ top: 0, right: 0 }}
      />
    </Tooltip>
    <Tooltip title="Heroku" placement="top">
      <img
        className={classes.img}
        src={LogoHeroku}
        alt="Heroku"
        style={{ top: 0, right: 120 }}
      />
    </Tooltip>
    <Tooltip title="Node.js" placement="top">
      <img
        className={classes.img}
        src={LogoNode}
        alt="Node.js"
        style={{ top: 0, right: 360 }}
      />
    </Tooltip>
    <Tooltip title="React" placement="top">
      <img
        className={classes.img}
        src={LogoReact}
        alt="React"
        style={{ top: 120, right: 360 }}
      />
    </Tooltip>
    <Tooltip title="Redux" placement="top">
      <img
        className={classes.img}
        src={LogoRedux}
        alt="Redux"
        style={{ top: 120, right: 240 }}
      />
    </Tooltip>
    <Tooltip title="Ruby on Rails" placement="top">
      <img
        className={classes.img}
        src={LogoRails}
        alt="Ruby on Rails"
        style={{ top: 120, right: 120 }}
      />
    </Tooltip>
    <Tooltip title="PostgreSQL" placement="top">
      <img
        className={classes.img}
        src={LogoPostgres}
        alt="PostgreSQL"
        style={{ top: 0, right: 240 }}
      />
    </Tooltip>
    <Tooltip title="Material UI" placement="top">
      <img
        className={classes.img}
        src={LogoMaterial}
        alt="Material UI"
        style={{ top: 240, right: 240 }}
      />
    </Tooltip>
    <Tooltip title="Bootstrap" placement="top">
      <img
        className={classes.img}
        src={LogoBootstrap}
        alt="Bootstrap"
        style={{ top: 240, right: 120 }}
      />
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
);

Stack.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stack);
