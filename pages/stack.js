import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const styles = theme => ({
  title: {
    color: theme.palette.primary.main,
    marginTop: 40
  }
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <div
        className="container-md"
        style={{ padding: "0 20px", margin: "0 auto 50px" }}
      >
        <Navbar />
        <Typography
          className="hero"
          style={{ fontSize: "5rem", lineHeight: 1, margin: "50px 0" }}
        >
          The right tools can save you a lot of time and money
        </Typography>
        <Typography variant="h4" className={classes.title}>
          Choosing the right technologies
        </Typography>
        <Typography
          style={{ fontSize: "1.2rem", marginTop: 5, maxWidth: 1000 }}
        >
          <p>
            It used to be that a web developer had to use just an editor and a
            compiler. The only choice available was the programming language.
            Even then, most of the decisions were made for you based on the
            nature of the job.
          </p>
          <p>
            This is no longer the case. There are hundreds of tools available
            that developers are called to select. Choosing the correct tools and
            technologies can have a long term effect on your work and your
            career, so this is a choice that cannot be taken lightly.
          </p>
          <p>
            <strong>It has to have a community</strong>
            <br />
            Any technology will have issues and inevitably you will reach a
            point where you need help. A community is a guarantee for the quick
            resolution of issues and for always having help at hand. If you
            can’t find the answer in StackOverflow then there is a good chance
            that you need to look elsewhere.
          </p>
          <p>
            <strong>It has to have a future</strong>
            <br />
            Any technology that is popular now will eventually be replaced by an
            improved version or a completely different technology in just a few
            years. Some technologies age better than others. The commitment of
            the team behind a tool/technology is what determines the long term
            future of the tool. For example, if the technology is supported by a
            small company, then there is a good chance that you may end up
            without support or new releases within just a few years. If that
            company is AWS or Google, the chances of long term support increase
            dramatically.
          </p>
          <p>
            <strong>It has to get the job done</strong>
            <br />
            Not all technologies are suited for all tasks. For example, we often
            need to rapidly prototype a solution and we, therefore, have to look
            for tools that give us results fast. These may not necessarily be
            the most effective tools in terms of performance, but they allow us
            to move fast and keep up with the market momentum. There are other
            cases where speed is not as important as is future extensibility and
            performance. All these are factors that need to be taken into
            account before adopting a new technology.
          </p>
          <p>
            <strong>It has to be safe</strong>
            <br />
            We need to be able to guarantee to our customers that our choice
            will never leave them exposed. Being tied to a particular technology
            implies that you are also affected by its vulnerabilities. There is
            obviously no guarantee that a technology will not break down, but
            you can at least choose technologies that will be quickly ‘fixed’
            should a vulnerability arise. We go for open source projects with
            large adoption since any weaknesses are exposed fast and are fixed
            rapidly.
          </p>
          <p>
            <strong>It has to "smell" right</strong>
            <br />
            There is a subjective factor based on past experience and intuition.
            We don’t ignore our gut feeling!
          </p>
        </Typography>
      </div>
      <Footer />
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
