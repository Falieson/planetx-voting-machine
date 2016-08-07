import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Candidates = new Mongo.Collection('candidates');

// Deny all client-side updates since methods manage this collection
Candidates.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
