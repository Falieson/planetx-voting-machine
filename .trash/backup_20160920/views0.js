const debug = true;
/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { Meteor }             from 'meteor/meteor';
import { BallotsTotalDaily }  from './collections.js';

import { eurodate }           from '../../lib/date.js'

const publicFields = {
  _id:            1,
  candidateId:    1,
  votes:          1,
};

function today() {
  if(Meteor.isClient){
    if(debug) console.log("[client] BALLOT TOTALS: today");

    const target = eurodate();
    const options = {_day: target};

    const result = BallotsTotalDaily.findOne(options, publicFields);

    if(debug) console.log(`Fetched Ballot[${target}]:  `, result);

    return result;

  }
  else if(Meteor.isServer) {
    if(debug) console.log("[server] BALLOT TOTALS: today");

    const target = eurodate();
    const options = {_day: target};

    const result =  BallotsTotalDaily.find(options, publicFields)

    if(debug === 2) console.log(`Publishing BallotTotals[${target}]:  `, result);

    return result;
  }
}

export const BallotsTotalDailyView = {today};
