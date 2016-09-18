// Libraries - Imported
import { Random } from 'meteor/random';
import Tracker from 'tracker-component';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Libraries - UI
import Paper from 'material-ui/Paper';
// Libraries - Local
import { shuffle } from '../../lib/javascript.js';

// Actions
import { fetchCandidates, subscriptionForCandidatesPending } from '../actions/Candidates.js';
import { updateBallotForCandidate } from '../actions/Ballot.js';

// Components
import CandidatesList from '../components/candidatesList/List.jsx';



// Candidates Container - Show All Candidates
// Container: interacts with store and db
class CandidatesListContainer extends Tracker.Component {
  componentWillMount() {
    const {dispatch} = this.props;

    this.autorun(()=> {
      this.subscribe('candidates');
      dispatch( fetchCandidates() );

        // if expecting a reactive update to candidates
        // FIXME: this TrackerComponent feature is broke
        // if(this.subscriptionsReady()){
        //   dispatch(fetchCandidates());
        // }
        // else {
        //   dispatch(subscriptionForCandidatesPending());
        // }
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

    return (
      <CandidatesList
        items     = {shuffle(this.props.items)}
        onSelect  = {this.onSelectCandidate.bind(this)}
      />
    );
  }

  onSelectCandidate = candidateId => {
    const {dispatch} = this.props;
    dispatch( updateBallotForCandidate(candidateId) );
    this.props.onSelect(candidateId);
  }
}

CandidatesListContainer.propTypes = {
  items:        PropTypes.array.isRequired,
  onSelect:     PropTypes.func.isRequired,
}

function mapStoreToProps(store) {
  const { Candidates } = store;

  const {
    items
  } = Candidates || {
    items: []
  }

  return {
    items
  }
}

export default connect(mapStoreToProps)(CandidatesListContainer)
