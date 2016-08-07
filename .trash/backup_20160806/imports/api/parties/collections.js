import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Parties = new Mongo.Collection('parties');

// Deny all client-side updates since methods manage this collection
Parties.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
