import Tracker                  from 'tracker-component';
import React, { Component, PropTypes } from 'react';
import { connect }              from 'react-redux';
import _ from 'lodash';

import {Bar} from 'react-chartjs-2';

// Actions
import { fetchTotalResults }  from '../actions/Results.js';

export default class CandidatesListContainer extends Tracker.Component {
  componentWillMount() {
    const {dispatch} = this.props;

    this.autorun(()=> {
      this.subscribe('ballotsTotalAbsolute');
      dispatch( fetchTotalResults() );
    });
  }

  render() {
    let labels  = []
    let votes   = [];
    _.each(this.props.items, (item)=> {
      console.log("ITEM: ", item);

      labels.push(item.lastName);
      votes.push(item.votes);
    });

    console.log("LABELS: ", labels);


    const style = {
      textAlign: 'center',
    }

    const records = {
      labels: labels,
      datasets: [
        {
          label: 'Votes',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: votes
        }
      ]
    };

    return (
      <div>
        <h2 style={style}>Total Polling Results</h2>
        <Bar
          data=   {records}
          width=  {100}
          height= {100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}


function mapStoreToProps(store) {
  const { Results } = store;

  const {
    items,
  } = Results || {
    items: []
  }

  return {
    items
  }
}

export default connect(mapStoreToProps)(CandidatesListContainer)
