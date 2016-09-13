// Meteor db.users (managed by Accounts)

import { Accounts } from 'meteor/accounts-base';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const newAccount = new ValidatedMethod({
    name: 'users.insert',
    validate: new SimpleSchema({
      _id:          {type: String, optional: true },
      username:     {type: String },
      email:        {type: String },
      password:     {type: String },
  }).validator(),
  run({
    username,
    email,
    password
  }) {
    return Accounts.createUser({username, email, password});
  }
});
