import { Meteor } from 'meteor/meteor';
import { Component } from 'react';

import Paper from 'material-ui/Paper';

import CandidatesListContainer  from '../containers/CandidateList.jsx';
import BallotContainer          from '../containers/Ballot.jsx';

// Ballot Page - list of candidates, select candidate, and vote
export default class MobileLayout extends Component {
  render() {
    // Mobile Landscape Layout specs
    const style = {
      height: "100%"
    };

    return (
      <Paper style={style} zDepth={1} rounded={false}>
        <CandidatesListContainer />
        <BallotContainer />
      </Paper>
    );
  }
}
