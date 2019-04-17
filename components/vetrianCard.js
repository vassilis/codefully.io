import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import vetrian from '../images/work/vetrian.png';

const styles = theme => ({
  card: {
    border: '1px solid',
    borderColor: grey[200],
    marginTop: 50,
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

function VetrianCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} elevation={0}>
      <CardActionArea className={classes.cardactionarea}>
        <CardMedia className={classes.cover} image={vetrian} title="Vetrian" />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Vetrian
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Veterinary practice management tool
            </Typography>
            <div className={classes.text}>
              <Typography component="p">Ruby on Rails, Postgres, React</Typography>
            </div>
          </CardContent>
          <div className={classes.text} />
        </div>
      </CardActionArea>
    </Card>
  );
}

VetrianCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles, { withTheme: true })(VetrianCard);
