import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import goma from '../images/work/goma.jpg';

const styles = theme => ({
  card: {
    display: 'flex',
    border: '1px solid',
    borderColor: grey[200],
  },
  cardactionarea: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
    height: 300,
    objectFit: 'cover',
  },
  text: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

function GomaCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} elevation={0}>
      <CardActionArea className={classes.cardactionarea}>
        <CardMedia className={classes.cover} image={goma} title="Goma" />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Goma
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Cyber Governance Tool
            </Typography>
            <div className={classes.text}>
              <Typography component="p">
                Ruby on Rails, Postgres, React, Redux, Highcharts
              </Typography>
            </div>
          </CardContent>
          <div className={classes.text} />
        </div>
      </CardActionArea>
    </Card>
  );
}

GomaCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles, { withTheme: true })(GomaCard);
