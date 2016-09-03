// Libraries - Imported
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

// Actions
import { submitBallotForCandidate } from '../actions/Ballot.js';

// Components
import SubmitBallotButton       from '../components/submitBallot/Button.jsx';



// Ballot Container - Show Ballot Submit Button
// Container: interacts with store and db
export default class Ballot extends Component {
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
      <SubmitBallotButton
        candidateId   = {candidateId}
        candidateName = {this.props.candidateName}
        ready         = {this.props.readyForSubmission}
        onSubmit      = {this.onSubmitBallot.bind(this, candidateId)}
      />
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