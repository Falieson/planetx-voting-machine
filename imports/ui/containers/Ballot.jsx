// Libraries - Imported
import React, {Component, PropTypes} from 'react';
import Tracker from 'tracker-component';
import { connect } from 'react-redux';

// Actions
import { submitBallotForCandidate } from '../actions/Ballot.js';

// Components
import VoterRegisterForm          from '../components/voterRegister/Form.jsx';
// import VoterRegisterForm          from '../components/voterRegister/Paper.jsx';
import SubmitBallotButton         from '../components/submitBallot/Button.jsx';



// Ballot Container - Show Ballot Submit Button
// Container: interacts with store and db
export default class Ballot extends Tracker.Component {
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

    const candidateId = this.props.candidateId;

    return (
      <div>
        <VoterRegisterForm />
        <SubmitBallotButton
          candidateId   = {candidateId}
          candidateName = {this.props.candidateName}
          ready         = {this.props.readyForSubmission}
          onSubmit      = {this.onSubmitBallot.bind(this, candidateId)}
        />
      </div>
    );
  }

  onSubmitBallot = candidateId => {
    const {dispatch} = this.props;
    dispatch( submitBallotForCandidate(candidateId) );
  }
}


function mapStoreToProps(state) {
  const { Ballot } = state;

  const {
    candidateName,
    candidateId,
    readyForSubmission
  } = Ballot || {
    candidateName: {},
    candidateId: '',
    readyForSubmission: false,
  }

  return {
    candidateId,
    candidateName,
    readyForSubmission
  }
}

export default connect(mapStoreToProps)(Ballot)
