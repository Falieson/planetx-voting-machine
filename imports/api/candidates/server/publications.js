import { Meteor } from 'meteor/meteor';
import { CandidatesView } from '../views.js';

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('candidates', (filters)=> {
    return CandidatesView(filters);
  });
}
