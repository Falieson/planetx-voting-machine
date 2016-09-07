import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Ballots = new Mongo.Collection('ballots');

// Deny all client-side updates since methods manage this collection
Ballots.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
