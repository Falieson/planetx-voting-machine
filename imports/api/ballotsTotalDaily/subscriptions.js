/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { collectionsSubscribe } from '../helpers/subscriptions.js'

const all = ()=> collectionsSubscribe('ballotsTotalToday');

export const BallotsTotalTodaySubscription =  all;
