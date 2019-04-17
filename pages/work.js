import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import GomaCard from '../components/gomaCard';
import VetrianCard from '../components/vetrianCard';

const styles = theme => ({
  card: {
    display: 'flex',
    border: '1px solid',
    borderColor: grey[200],
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
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

function Work() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-lg" style={{ padding: '0 20px', margin: '100px auto 50px' }}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <GomaCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <VetrianCard />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(Work);
