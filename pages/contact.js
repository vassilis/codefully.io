import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Formik } from 'formik';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const contactFormEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

function ContactPage(props) {
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  // handleChange = name => (event) => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  // };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container-md" style={{ padding: '0 20px', margin: '0 auto 50px' }}>
        <div className="container" style={{ padding: '50px 0' }}>
          <Typography variant="h3" className="hero" gutterBottom>
            <strong>
              We love to discuss and analyse business stories! Let&apos;s talk and find out if we
              are a good fit for your project.
            </strong>
          </Typography>
          <br />
          <Formik
            initialValues={{
              email: '',
              name: '',
              phone: '',
              message: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              axios
                .post(contactFormEndpoint, values, {
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'x-api-key': `${process.env.REACT_APP_CONTACT_ENDPOINT_API_KEY}`,
                  },
                })
                .then((resp) => {
                  setSubmitionCompleted(true);
                });
            }}
          >
            <form
              name="contact"
              method="post"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <Grid container spacing={24}>
                <Grid item sm={7}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    value={name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={7}>
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
                <Grid item sm={7}>
                  <TextField
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
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                style={{ marginTop: 40 }}
              >
                Submit
              </Button>
            </form>
          </Formik>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ContactPage;
