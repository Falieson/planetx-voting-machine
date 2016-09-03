import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import SubmitBallotButton       from '../components/submitBallot/Button.jsx';

// Ballot Container - Show Ballot Submit Button
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

    return (
      <SubmitBallotButton
        candidateName={this.props.candidateName}
        ready={this.props.readyForSubmission}
      />
    );
  }
}

// handleSubmitBallot={this.handleSubmitBallot}

function mapStoreToProps(state) {
  const { Ballot } = state;

  const {
    candidateName,
    readyForSubmission
  } = Ballot || {
    candidateName: {},
    readyForSubmission: false,
  }

  return {
    candidateName,
    readyForSubmission
  }
}

export default connect(mapStoreToProps)(Ballot)
