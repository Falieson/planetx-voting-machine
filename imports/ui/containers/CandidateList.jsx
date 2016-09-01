import { Random } from 'meteor/random';
import Tracker from 'tracker-component';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { shuffle } from '../../lib/javascript.js';

import Paper from 'material-ui/Paper';

import { fetchCandidates, subscriptionForCandidatesPending } from '../actions/Candidates.js';
import CandidatesList from '../components/candidatesList/List.jsx';

// Lists Page - Show multiple lists
export default class CandidatesListContainer extends Tracker.Component {
  componentWillMount() {
    const {dispatch} = this.props;

    this.autorun(()=> {
      this.subscribe('candidates')
      dispatch(fetchCandidates());

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
        items={shuffle(this.props.items)}
      />
    );
  }
}

CandidatesListContainer.propTypes = {
  items: PropTypes.array.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStoreToProps(state) {
  const { Candidates } = state;

  const {
    items,
    lastUpdated
  } = Candidates || {
    items: []
  }

  return {
    items,
    lastUpdated
  }
}

export default connect(mapStoreToProps)(CandidatesListContainer)
