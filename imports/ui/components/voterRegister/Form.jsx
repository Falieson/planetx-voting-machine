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

/*
Commit: SVM 2.A.2
When Adding a Transition you must use React Component or you'll get this error:
```error
warning.js?8a56:36 Warning: Stateless function components cannot be given refs (See ref ".0" in RegisterContainer created by ReactTransitionGroup). Attempts to access this ref will fail.printWarning @ warning.js?8a56:36warning @ warning.js?8a56:60attachRef @ ReactCompositeComponent.js
ReactTransitionGroup.js?bd5c:144Uncaught TypeError: Cannot read property 'componentWillEnter' of nullperformEnter @ ReactTransitionGroup.js
```
*/


import React, {Component, PropTypes} from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


export default class RegisterContainer extends Component {
  render() {
    // the styling is a bit ugly but we'll fix it up for the final

    const RegsiterContainerStyle = {
      width: '100%',
      textAlign: 'center',
      display: 'block',
      paddingTop: '5px'
    };

    return (
      <Paper style={RegsiterContainerStyle} zDepth={1}>
        {this.renderCTA()}
        {this.renderFields()}
      </Paper>
    );
  }

  renderCTA() {
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
  }

  renderFields() {
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
  }


}
