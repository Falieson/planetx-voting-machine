const debug = process.env.NODE_ENV === "development";

import _ from 'lodash';

import { BallotsTotalAbsolute }  from '../collections.js';
import { CandidatesView }        from '../../candidates/views.js';

import '../factories.js'; // #Factory.build('ballotTotalAbsolute')


if( Meteor.isServer ){
  let recordAmount = BallotsTotalAbsolute.find().count();
  const firstLoad =  recordAmount === 0;

  if( firstLoad ){
    const candidates = CandidatesView.all().fetch();
    _.each(candidates, (candidate)=> {
      const candidateId = candidate._id;
      const absoluteTotal = Factory.build('ballotTotalAbsolute', {candidateId});
      absoluteTotal.updatedAt = Date.now();

      BallotsTotalAbsolute.insert(absoluteTotal);
    });
  }
  else {
    console.log(`DON'T GENERATE BALLOT ABSOLUTE TOTALS COLLECTION: ${recordAmount} Candidate Totals Found`);
  }
}
