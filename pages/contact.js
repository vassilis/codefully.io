import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class ContactPage extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    message: '',
    email: '',
    phone: '',
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const {
      firstName, lastName, email, phone, message,
    } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-md" style={{ padding: '0 20px', margin: '0 auto 50px' }}>
          <div className="container" style={{ padding: '50px 0' }}>
            <Typography variant="h3" className="hero" gutterBottom>
              <strong>
                We love to discuss and analyse business stories! Let&apos;s talk and find out if we
                are a good fit for your project. Fill out the form and let&apos;s get started!
              </strong>
            </Typography>
            <br />
            <form
              name="contact"
              method="post"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <Grid container spacing={24}>
                <Grid item sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    value={phone}
                    onChange={this.handleChange('phone')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <br />
              <TextField
                required
                id="message"
                name="message"
                label="What can we do for you?"
                multiline
                fullWidth
                rowsMax="10"
                value={message}
                onChange={this.handleChange('message')}
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
                Submit
              </Button>
            </form>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactPage;
