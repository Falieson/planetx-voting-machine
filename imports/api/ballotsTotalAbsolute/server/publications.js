import { Meteor }                 from 'meteor/meteor';
import { BallotsTotalAbsoluteView }  from '../views.js';
import { BallotsTotalAbsolute }      from '../collections.js';

if (Meteor.isServer) {  // This code only runs on the server

  // NOTE: This publishes ALL BALLOTS. A development feature only obviously
  Meteor.publish('ballotsTotalAbsolute', ()=> BallotsTotalAbsoluteView() );

}
