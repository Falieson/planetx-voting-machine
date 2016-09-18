import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const BallotsTotalDaily = new Mongo.Collection('ballotsTotalDaily');

// Deny all client-side updates since methods manage this collection
BallotsTotalDaily.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
