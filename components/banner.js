import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import landing1 from "../images/code-art-3.jpg";
import loading from "../images/loading.gif";
import BackgroundImage from "react-background-image-loader";

const styles = theme => ({
  landing: {
    height: "50vh",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    backgroundPosition: "50% 0"
    // backgroundAttachment: "fixed"
  }
});

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <BackgroundImage
        src={landing1}
        placeholder={loading}
        className={classes.landing}
      />
    );
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
