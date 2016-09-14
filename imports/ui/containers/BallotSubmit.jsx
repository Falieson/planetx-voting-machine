// Libraries - Imported
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Actions
import {submitVoterRegistrationThenBallot}  from '../actions/Account.js';
import {updateBallotForCandidate}           from '../actions/Ballot.js';

// Components
import SubmitBallotButton         from '../components/submitBallot/Button.jsx';


// Ballot Container - Show Ballot Submit Button
// Container: interacts with store and db
export default class BallotSubmitContainer extends Tracker.Component {
  componentWillMount() {
    this.autorun(()=> {
      if(Meteor.userId()){
        this.subscribe('myBallot');
      }
    });
  }

  render() {
    const style = {
      height: "100%",
      padding: "10px",
      minWidth: "300px",
      width: "100%",
      margin: "10px 0",
      textAlign: 'center',
      display: 'block',
    };

    const { candidateName, submitIsReady } = this.props;

    return (
      <SubmitBallotButton
        candidateName = {candidateName}
        ready         = {submitIsReady}
        onSubmit      = {this.onSubmitBallot.bind(this)}
      />
    );
  }

  onSubmitBallot = ()=> {
    const {
      dispatch, candidateId, accountInfo
    }  = this.props;

    // NOTE: This doesn't work for a user that wants to UPDATE their ballot
    // create account and then subit ballot
    dispatch( submitVoterRegistrationThenBallot(accountInfo, candidateId) );
  }
}

function mapStoreToProps(store) {
  // TODO: Update this with react-reselect so it only recomputes when a necessary value is changed
  const { Ballot, Account } = store;

  // Selected Candidate
  const {
    candidateId,
    candidateName
  } = Ballot || {
    candidateId   : '',
    candidateName : {}
  };

  // New Account Info
  const {
    username, email, password,
    usernameValid, emailValid, passwordValid
  } = Account || {
    username: '', email: '', password: '',
    usernameValid: false, emailValid: false, passwordValid: false
  };

  const accountInfo = { username, email, password };

  // Enable or Disable the Submit Button
  const AccountReadyForSubmit = usernameValid && emailValid && passwordValid;
  const BallotReadyForSubmit = Ballot.readyForSubmit? true : false;
  const userId = Meteor.userId();
  const loggedIn = userId && userId.length>0;

  const submitIsReady = BallotReadyForSubmit && (AccountReadyForSubmit || loggedIn);

  return { candidateId, candidateName, accountInfo, submitIsReady };
}

export default connect(mapStoreToProps)(BallotSubmitContainer);
