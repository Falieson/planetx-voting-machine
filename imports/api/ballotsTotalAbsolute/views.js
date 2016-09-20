const debug = false;
/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { BallotsTotalAbsolute }  from './collections.js';
import { Candidates }         from '../candidates/collections.js';
import { eurodate }           from '../../lib/date.js'

const fields =  {_id: 1, lastName: 1, votes: 1};
const sortBy =  {lastName: 1};

const today = ()=> {
  if(Meteor.isClient){
    if(debug) console.log("[client] BALLOT TOTALS: today");

    const result = BallotsTotalAbsolute.find({}, {fields, sort: sortBy}).fetch();
    if(debug) console.log(`Fetched Ballot[${eurodate()}]:  `, result);

    return result;
  }
  else if(Meteor.isServer) {
    if(debug) console.log("[server] BALLOT TOTALS: today");

    const result =  BallotsTotalAbsolute.find({});
    if(debug === 2) console.log(`Publishing BallotTotals[${eurodate()}]:  `, result);

    return result;
  }
};


export const BallotsTotalAbsoluteView = today;
