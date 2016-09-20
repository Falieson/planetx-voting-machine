const debug = process.env.NODE_ENV === "development";

import _ from 'lodash';

import { BallotsTotalDaily }    from '../collections.js';
import { incrBallotTotalDaily } from '../methods.js';

import { CandidatesView }       from '../../candidates/views.js';

import { eurodate }             from '../../../lib/date.js'

if( Meteor.isServer ){
  let recordAmount = BallotsTotalDaily.find().count();
  const firstLoad =  recordAmount === 0;

  if( firstLoad ){
    const candidates = CandidatesView.all().fetch();
    _.each(candidates, (candidate)=> {
      const candidateId = candidate._id;
      const today = eurodate();

      incrBallotTotalDaily.call({candidateId, _day: today});
    });
  }
  else {
    console.log(`DON'T GENERATE BALLOT ABSOLUTE DAILY COLLECTION: ${recordAmount} Candidate Totals Found`);
  }
}
