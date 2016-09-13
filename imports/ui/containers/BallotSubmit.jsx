// Libraries - Imported
import Tracker from 'tracker-component';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Actions
import {submitVoterRegistrationThenBallot} from '../actions/Account.js';

// Components
import SubmitBallotButton         from '../components/submitBallot/Button.jsx';



// Ballot Container - Show Ballot Submit Button
// Container: interacts with store and db
export default class BallotSubmitContainer extends Tracker.Component {
  componentWillMount() {
    this.autorun(()=> {
      // Todo: Replace subscription to all ballots with subcsription to user's ballot
      //  we definitely do not want a subscription to all() ballots

      this.subscribe('ballots');
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

    const {
      candidateId, candidateName,
      accountFieldsCompleted, candidateSelected
    } = this.props;


    return (
      <SubmitBallotButton
        candidateName = {candidateName}
        ready         = {accountFieldsCompleted && candidateSelected}
        onSubmit      = {this.onSubmitBallot.bind(this)}
      />
    );
  }

  onSubmitBallot = ()=> {
    const {
      dispatch, candidateId, accountInfo
    }  = this.props;

    // create account and then subit ballot
    dispatch( submitVoterRegistrationThenBallot(accountInfo, candidateId) );
  }
}

BallotSubmitContainer.propTypes = {
  accountFieldsCompleted: PropTypes.bool.isRequired,
  candidateSelected:      PropTypes.bool.isRequired,
}

function mapStoreToProps(store) {
  const { Ballot, Account } = store;

  const { candidateId, candidateName } = Ballot || {
    candidateId: '',
    candidateName: {},
  };

  const {
    username,
    email,
    password
  } = Account || {
    username: '',
    email:    '',
    password: ''
  };

  const accountInfo = { username, email, password };

  return { candidateId, candidateName, accountInfo };
}

export default connect(mapStoreToProps)(BallotSubmitContainer);
