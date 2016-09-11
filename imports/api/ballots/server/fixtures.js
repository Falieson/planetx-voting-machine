const debug = process.env.NODE_ENV === "development";

import { Ballots }       from '../collections.js';
import { insertBallot }  from '../methods.js';
import '../factories.js'; // #Factory.build('ballot')

if( Meteor.isServer ){
  let ballotAmount = Ballots.find().count();
  const firstLoad =  ballotAmount === 0;

  if( firstLoad ){
    let newBallotsAmount = 10;
    if(debug){console.log(`GENERATING BALLOTS: ${newBallotsAmount} Ballots`);}

    let newBallots = [];

    for(var i=0; i<=newBallotsAmount; i++) {
      const ballot = Factory.build('ballot');

      if(debug == 2){console.log(`BALLOT[${i}]`, ballot);}

      newBallots.push[ballot];
    }

    if(debug){console.log("INSERTING TO DATABASE: STARTED");}
    newBallots.map((ballot)=> {

      insertBallot.call(ballot);

    });


    if(debug){console.log("INSERTING TO DATABASE: COMPLETED");}

    Ballots.remove();
    ballotAmount = Ballots.find().count();
    if(ballotAmount === 0 && debug) {
      console.log(`GENERATING BALLOTS & CLEANUP: SUCCESSFUL`);
    }
    else {
      console.log(`GENERATING BALLOTS & CLEANUP FAILED: ${ballotAmount} Ballots Remain`);
    }
  }

  else {
    console.log(`DON'T TEST BALLOT GENERATION: FOUND ${ballotAmount} Ballots`);
  }
}
