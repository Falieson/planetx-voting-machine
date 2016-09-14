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


import React, {Component, PropTypes} from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {orange500, blue500} from 'material-ui/styles/colors';


export default class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    const rawPass = this.props.password && this.props.password.length>0? this.props.password : '_';

    this.state = {
      passwordRaw: rawPass
    };
  }

  render() {
    // the styling is a bit ugly but we'll fix it up for the final
    const containerStyle = {
      width: '100%',
      textAlign: 'center',
      display: 'block',
      paddingTop: '5px'
    };

    return (
      <Paper style={containerStyle} zDepth={1}>
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
    const styles = {
      floatingLabelStyle: {
        color: orange500,
      },
      floatingLabelFocusStyle: {
        color: blue500,
      },
      passwordRawStyle: {
        color: blue500,
        borderColor: blue500,
      },
      containerStyle: {
        width: '49%',
        textAlign: 'center',
        display: 'inline-block',
        borderLeft: '1px dashed',
        marginBottom: '15px',
      },
      h1Style: {
        margin: '5px 0 0 0'
      }
    };

    const {
      validateUser, validateEmail, validatePassword
    } = this.props;

    // TODO: Add a Show/Hide password checkbox over the end of the password field
    return (
      <div style={styles.containerStyle}>
        <h1 style={styles.h1Style}>Register</h1>
        <TextField
          floatingLabelText         = "Public Alias/Name"
          hintText                  = "Username"
          onChange                  = {this.handleChangeUsername.bind(this)}
          errorText                 = {!validateUser.valid? validateUser.error : undefined}
          floatingLabelStyle        = {styles.floatingLabelStyle}
          floatingLabelFocusStyle   = {styles.floatingLabelFocusStyle}
        /><br />
        <TextField
          floatingLabelText         = "Email for Login/Recovery"
          hintText                  = "Email Address"
          onChange                  = {this.handleChangeEmail.bind(this)}
          errorText                 = {!validateEmail.valid? validateEmail.error : undefined}
          floatingLabelStyle        = {styles.floatingLabelStyle}
          floatingLabelFocusStyle   = {styles.floatingLabelFocusStyle}
        /><br />
        <TextField
          floatingLabelText         = "Password"
          hintText                  = "Password"
          type                      = "password"
          onChange                  = {this.handleChangePassword.bind(this)}
          errorText                 = {!validatePassword.valid? this.state.passwordRaw == '_'? undefined : `${this.state.passwordRaw} : ${validatePassword.error}` : this.state.passwordRaw }
          floatingLabelStyle        = {styles.floatingLabelStyle}
          floatingLabelFocusStyle   = {styles.floatingLabelFocusStyle}
          errorStyle                = {validatePassword.valid? styles.passwordRawStyle : undefined}
        />
      </div>
    );
  }

  handleChangeUsername() {
    event.preventDefault();
    const username = arguments[1]; // FIXME: not sure how else to grab it
    this.props.onChangeUsername(username);
  }

  handleChangeEmail() {
    event.preventDefault();
    const email = arguments[1];
    this.props.onChangeEmail(email);
  }

  handleChangePassword() {
    event.preventDefault();
    const password = arguments[1];
    this.props.onChangePassword(password);

    // putting in some default errorText keeps the UI from pushing around the submitButton
    const rawPass = password.length>0? arguments[1]: '_';
    this.setState({passwordRaw: rawPass});
  }


}

RegisterContainer.propTypes = {
  onChangeUsername:   PropTypes.func.isRequired,
  onChangeEmail:      PropTypes.func.isRequired,
  onChangePassword:   PropTypes.func.isRequired,
  validateUser:       PropTypes.object.isRequired,
  validateEmail:      PropTypes.object.isRequired,
  validatePassword:   PropTypes.object.isRequired,
}
