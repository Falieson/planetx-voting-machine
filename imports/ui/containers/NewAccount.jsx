// Libraries - Imported
import { Random } from 'meteor/random';
import Tracker from 'tracker-component';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import {
  updateAccountUsername, updateAccountEmail, updateAccountPassword,
  updateAccountReadyForSubmit, updateAccountNotReadyForSubmit
} from '../actions/Account.js';

// Components
import VoterRegisterForm  from '../components/voterRegister/Form.jsx';

// NewAccount Container - handle registration form
// Container: interacts with store and db
export default class NewAccountContainer extends Tracker.Component {
  render() {
    return (
      <VoterRegisterForm
        username =          {this.props.username}
        email =             {this.props.email}
        password =          {this.props.password}
        onChangeUsername =  {this.onChangeUsername.bind(this)}
        onChangeEmail =     {this.onChangeEmail.bind(this)}
        onChangePassword =  {this.onChangePassword.bind(this)}
     />
    );
  }

  onChangeUsername = username => {
    const {dispatch} = this.props;
    dispatch( updateAccountUsername(username) );

    this.handleCompletedForm();
  }
  onChangeEmail = email => {
    const {dispatch} = this.props;
    dispatch( updateAccountEmail(email) );

    this.handleCompletedForm();
  }
  onChangePassword = password => {
    const {dispatch} = this.props;
    dispatch( updateAccountPassword(password) );

    this.handleCompletedForm();
  }

  handleCompletedForm = ()=> {
    const {
      dispatch, username, email, password
    } = this.props;

    const fieldsComplete = [username, email, password].map((field)=> field && field.length>1).reduce((prev, curr)=> prev && curr) == true;

    const user = {username, email, password};

    if(fieldsComplete){
      dispatch( updateAccountReadyForSubmit() )
    }
    else{
      dispatch( updateAccountNotReadyForSubmit() )
    }
  }
}

// NOTE: Should have deleted this previous commit
function mapStoreToProps(store) {
  const { Account } = store;

  const {
    username,
    email,
    password
  } = Account || {
    username: '',
    email:    '',
    password: ''
  };

  return { username, email, password };
}

export default connect(mapStoreToProps)(NewAccountContainer);
