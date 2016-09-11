// Libraries - Imported
import Tracker from 'tracker-component';
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import ReactTransitionGroup from 'react-addons-transition-group';

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
    const ballotReady = this.props.readyForSubmission;

    // Correct way of only rendering 0-1 child component
    // https://github.com/facebook/react/blob/master/docs/docs/10.1-animation.md
    var FirstChild = React.createClass({
      render: function() {
        var children = React.Children.toArray(this.props.children);
        return children[0] || null;
      }
    });

    return (
      <div>
        <ReactTransitionGroup component={FirstChild}>
          {ballotReady ? <VoterRegisterForm /> : null}
        </ReactTransitionGroup>
        <SubmitBallotButton
          candidateId   = {candidateId}
          candidateName = {this.props.candidateName}
          ready         = {ballotReady}
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
