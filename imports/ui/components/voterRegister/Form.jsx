/* Registration Form
  Fields:
    Email: (login with this)
    Password:
    Public Alias / Name:

  Reveal when Candidate Selected
  CTA: "Change your mind? Register to be able to update your ballot!"
  Notes:
  -- "Your email will never be share or used for marketing"
  -- "All Notifications are opt-in from your settings page"
*/


// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const RegisterContainer = () => (
  <Paper style={RegsiterContainerStyle} zDepth={1}>
    <CTA />
    <Fields />
  </Paper>
);
const RegsiterContainerStyle = {
  width: '100%',
  textAlign: 'center',
  display: 'block',
  paddingTop: '5px'
};
export default RegisterContainer;

// yeah the styling is a bit ugly but we'll fix it up for the final
const CTA = () => {
  const containerStyle = {
    width: '49%',
    textAlign: 'left',
    display: 'inline-block',
    paddingLeft: '5px',
    verticalAlign: 'top',
  };

  const h1Style = {
    margin: '5px 0 0 0'
  };

  const ulStyle = {
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Features</h1>
      <ul style={ulStyle}>
        <li>Change your Ballot anytime before polls close!</li>
        <li>Opt-in to poll result updates</li>
        <li>Opt-in to new feature announcements</li>
      </ul>
      <h3>We will never share your information</h3>
      <h3>Only 2 accounts allowed per internet connection (use your mobile)</h3>
    </div>
  );
};

const Fields = () => {
  const containerStyle = {
    width: '49%',
    textAlign: 'center',
    display: 'inline-block',
    borderLeft: '1px dashed',
    marginBottom: '2px'
  };

  const h1Style = {
    margin: '5px 0 0 0'
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Register</h1>
      <TextField
        floatingLabelText="Public Alias/Name"
        hintText="Username"
      /><br />
      <TextField
        floatingLabelText="Email for Login/Recovery"
        hintText="Email Address"
      /><br />
      <TextField
        floatingLabelText="Password"
        hintText="Password"
        type="password"
      />
    </div>
  );
};
