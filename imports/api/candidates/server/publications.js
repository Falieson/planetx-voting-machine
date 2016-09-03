import { Meteor } from 'meteor/meteor';
import { CandidatesView } from '../views.js';

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish public info about candidates
  Meteor.publish('candidates', (filters)=> {
    return CandidatesView.all(filters);
  });
}
