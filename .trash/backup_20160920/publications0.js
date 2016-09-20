import { Meteor } from 'meteor/meteor';
import { BallotsTotalDailyView } from '../views.js';

if (Meteor.isServer) {  // This code only runs on the server
  Meteor.publish('resultsToday', ()=> {
    return BallotsTotalDailyView.today();
  });
}
