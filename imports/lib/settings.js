import { daydiff } from './javascript.js';

export const electionDay = new Date(2016,11,8);
export const daysBeforeElection = ()=> daydiff( Date.now(), electionDay );
