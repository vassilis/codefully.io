import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// const contactFormEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;
const contactFormEndpoint = 'https://9m9cg4x625.execute-api.us-east-1.amazonaws.com/default/contact-form';

function ContactPage() {
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container-md" style={{ padding: '0 20px', margin: '0 auto 50px' }}>
        <div className="container" style={{ padding: '50px 0' }}>
          <Typography variant="h3" className="hero" gutterBottom>
            <strong>
              We love to discuss and analyse business stories! Let&apos;s talk to find out if we are
              a good fit for your project.
            </strong>
          </Typography>
          <br />
          <Formik
            initialValues={{
              email: '',
              name: '',
              phone: '',
              comment: '',
              app: 'codefully.io',
            }}
            validate={(values) => {
              const errors = {};
              if (!values.comment) {
                errors.comment = 'Required';
              } else if (!values.name) {
                errors.name = 'Required';
              } else if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              axios
                .post(contactFormEndpoint, values, {
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'x-api-key': 'QclM5NNsl49M7lUPxGEXk7jW8IazjJgLaIHuRpug',
                  },
                })
                .then((resp) => {
                  setSubmitionCompleted(true);
                  resetForm();
                  setTimeout(() => {
                    setSubmitionCompleted(false);
                  }, 10000);
                });
            }}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="app" value={values.app} />
                  <Grid container spacing={24}>
                    <Grid item xs={12} md={7}>
                      <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={values.name}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        type="email"
                        label="Email Address"
                        value={values.email}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <TextField
                        id="phone"
                        name="phone"
                        type="tel"
                        label="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <TextField
                    required
                    id="comment"
                    name="comment"
                    label="What can we do for you?"
                    multiline
                    fullWidth
                    rowsMax="10"
                    value={values.comment}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 40,
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      color="primary"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                    {isSubmitionCompleted && "Thank you! We'll get in touch as soon as possible!"}
                  </div>
                </form>
              );
            }}
          </Formik>
          <div style={{ marginTop: 200 }}>
            <h3>Office address</h3>
            3 Farmakidou St.
            <br />
            Chalkida
            <br />
            34100 Greece
          </div>
        </div>
      </div>
      <iframe
        title="map"
        src="https://snazzymaps.com/embed/148724"
        style={{ width: '100%', height: 600, border: 'none' }}
      />
      <Footer />
    </React.Fragment>
  );
}

ContactPage.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  dirty: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default ContactPage;
