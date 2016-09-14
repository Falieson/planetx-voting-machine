import { Meteor } from 'meteor/meteor';
import { BallotsView } from '../views.js';

if (Meteor.isServer) {  // This code only runs on the server

  // NOTE: This publishes ALL BALLOTS. A development feature only obviously
  // Meteor.publish('ballots', ()=> {
  //   return BallotsView.all();
  // });

  // an es6 arrow function doesn't pass this.userId()
  // more info: http://stackoverflow.com/questions/27991128/this-userid-returns-undefined-inside-meteor-publish
  Meteor.publish('myBallot', BallotsView.mine);
}
