import { Meteor }                 from 'meteor/meteor';
import { BallotsTotalDailyView }  from '../views.js';
import { BallotsTotalDaily }      from '../collections.js';

import { eurodate }               from '../../../lib/date.js'

if (Meteor.isServer) {  // This code only runs on the server

  // NOTE: This publishes ALL BALLOTS. A development feature only obviously
  Meteor.publish('ballotsTotalToday', ()=> BallotsTotalDailyView.today() );

}
