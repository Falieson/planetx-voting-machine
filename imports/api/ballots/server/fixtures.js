const debug = process.env.NODE_ENV === "development";
import _ from 'lodash';

import { Ballots }       from '../collections.js';
import { insertBallot }  from '../methods.js';
import '../factories.js'; // #Factory.build('ballot')

import { BallotsTotalAbsolute } from '../../ballotsTotalAbsolute/collections.js';
import { BallotsTotalDaily } from '../../ballotsTotalDaily/collections.js';



if( Meteor.isServer ){
  let ballotAmount = Ballots.find().count();
  const firstLoad =  ballotAmount === 0;

  if( firstLoad ){
    let newBallotsAmount = 10;
    if(debug) console.log(`GENERATING BALLOTS: ${newBallotsAmount} Ballots`);

    let newBallots = [];

    for(var i=0; i<=newBallotsAmount; i++) {
      let ballot = Factory.build('ballot');
      ballot.createdBy = "FIXTURE_GENERATOR";
      ballot.createdAt = Date.now();


      if(debug === 2){console.log(`BALLOT[${i}]`, ballot);}

      newBallots.push[ballot];
    }

    if(debug) console.log("INSERTING TO DATABASE: STARTED");
    newBallots.map((ballot)=> {

      insertBallot.call(ballot);

    });


    if(debug) console.log("INSERTING TO DATABASE: COMPLETED");

    Ballots.remove();
    ballotAmount = Ballots.find().count();
    if(ballotAmount === 0) {
      if(debug) console.log(`GENERATING BALLOTS & CLEANUP: SUCCESSFUL`);

      // BALLOTS ABSOLUTE TOTAL
      const totalsAbsolute = BallotsTotalAbsolute.find().fetch();

      _.each(totalsAbsolute, (candidateTotal)=> {
        BallotsTotalAbsolute.update(candidateTotal._id, {$set: {votes: 0}});
      });

      if(debug) console.log(`BALLOT ABSOLUTE TOTALS CLEANUP: FINISHED`);

      // BALLOTS DAILY TOTAL
      const totalsDaily = BallotsTotalDaily.find().fetch();

      _.each(totalsDaily, (candidateTotal)=> {
        BallotsTotalDaily.update(candidateTotal._id, {$set: {votes: 0}});
      });

      if(debug) console.log(`BALLOT DAILY TOTALS CLEANUP: FINISHED`);
    }
    else {
      if(debug) console.log(`GENERATING BALLOTS & CLEANUP FAILED: ${ballotAmount} Ballots Remain`);
    }
  }

  else {
    if(debug) console.log(`DON'T TEST BALLOT GENERATION: FOUND ${ballotAmount} Ballots`);
  }
}
