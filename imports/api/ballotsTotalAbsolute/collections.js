import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const BallotsTotalAbsolute = new Mongo.Collection('ballotsTotalAbsolute');

// Deny all client-side updates since methods manage this collection
BallotsTotalAbsolute.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
