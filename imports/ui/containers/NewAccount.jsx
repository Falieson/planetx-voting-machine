// Libraries - Imported
import { Random } from 'meteor/random';
import Tracker from 'tracker-component';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import {
  updateAccountUsername, updateAccountEmail, updateAccountPassword
} from '../actions/Account.js';

// Components
import VoterRegisterForm  from '../components/voterRegister/Form.jsx';

// NewAccount Container - handle registration form
// Container: interacts with store and db
export default class NewAccountContainer extends Tracker.Component {
  render() {
    return (
      <VoterRegisterForm
        onChangeUsername =  {this.onChangeUsername.bind(this)}
        onChangeEmail =     {this.onChangeEmail.bind(this)}
        onChangePassword =  {this.onChangePassword.bind(this)}
     />
    );
  }

  onChangeUsername = username => {
    const {dispatch} = this.props;
    dispatch( updateAccountUsername(username) );
  }

  onChangeEmail = email => {
    const {dispatch} = this.props;
    dispatch( updateAccountEmail(email) );
  }

  onChangePassword = password => {
    const {dispatch} = this.props;
    dispatch( updateAccountPassword(password) );
  }
}

function mapStoreToProps(state) {
  const { Candidates } = state;

  const {
    items,
    lastUpdated
  } = Candidates || {
    items: []
  }

  return {
    items,
    lastUpdated
  }
}

export default connect(mapStoreToProps)(NewAccountContainer);
