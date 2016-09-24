// Libraries - Imported
import _ from 'lodash';

import { Meteor }              from 'meteor/meteor';
import Tracker                 from 'tracker-component';
import React, {Component, PropTypes}  from 'react';
import {connect}               from 'react-redux';


// Actions
import {submitVoterRegistrationThenBallot}  from '../actions/Account.js';
import {updateBallotForCurrentVoter}        from '../actions/Ballot.js';

// Components
import SubmitBallotButton         from '../components/submitBallot/Button.jsx';


// Ballot Container - Show Ballot Submit Button
// Container: interacts with store and db
class BallotSubmitContainer extends Tracker.Component {
  constructor(){
    super();

    this.state = {
      loggedIn: false,
    }
  }
  componentWillMount() {
    this.autorun(()=> {
      this.setState({loggedIn: Meteor.userId()? true:false})
    });
  }

  render() {
    const { candidateNames, submitIsReady } = this.props;

    return (
      <SubmitBallotButton
        candidateNames = {candidateNames}
        ready          = {submitIsReady}
        onSubmit       = {this.onSubmitBallot.bind(this)}
      />
    );
  }

  onSubmitBallot = ()=> {
    const {
      dispatch, choices, accountInfo
    }  = this.props;

    // FIXME: Replaced candidateId with choices but action doesn't support object
    if(this.state.loggedIn) dispatch( updateBallotForCurrentVoter(choices) );
    else dispatch( submitVoterRegistrationThenBallot(accountInfo, choices) );
  }
}

function mapStoreToProps(store) {
  // TODO: Update this with react-reselect so it only recomputes when a necessary value is changed
  const { Ballot, Account } = store;

  // 1. Selected Candidates
  const choices = Ballot.choice || {};
  const choiceKeys = Object.keys(choices);
  const candidateNames = [];

  _.each(choiceKeys, (key)=> {
    const choice = choices[key];
    if(choice.candidateId.length>0) {
      candidateNames.push(choice.candidateName.last)
    }
  });

  // 2. New Account Info
  const {
    username, email, password,
    usernameValid, emailValid, passwordValid
  } = Account || {
    username: '', email: '', password: '',
    usernameValid: false, emailValid: false, passwordValid: false
  };

  const accountInfo = { username, email, password };

  // 3. Enable or Disable the Submit Button
  const AccountReadyForSubmit = usernameValid && emailValid && passwordValid;
  const BallotReadyForSubmit = Ballot.readyForSubmit? true : false;
  const userId = Meteor.userId();
  const loggedIn = userId && userId.length>0;

  const submitIsReady = BallotReadyForSubmit && (AccountReadyForSubmit || loggedIn);


  return { choices, candidateNames, accountInfo, submitIsReady };
}

export default connect(mapStoreToProps)(BallotSubmitContainer);
