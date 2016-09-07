import { Factory }  from 'meteor/dburles:factory';
import faker        from 'faker';

import { parties, getPartyColor } from './helpers.js';

import { getRandomIntInclusive, getRandomBool } from '../../lib/javascript.js';

import Candidates   from './collections.js';

const defaultCandidate = {
  name: {
    first: faker.name.firstName(),
    last: faker.name.lastName(),
    title: 'Senator',
    titleShortened: 'Sen.'
  },
  party: {
    memberOf: parties[getRandomIntInclusive(0,4)],
    partyChoice: getRandomBool(),
  },
  wiki: undefined,
  image: undefined,
};


/* Candidate Factory
  candidate names, title, formal, full
  candidate wiki link
  candidate image serverUrl
  candidate party, party allegiance :: independent, republican
  candidate colors :: {primary: white, secondary: blue}
*/
export default Factory.define('candidate', Candidates, {
  name: {
    first: defaultCandidate.name.first,
    last: defaultCandidate.name.last,
    full: `${defaultCandidate.name.first} ${defaultCandidate.name.last}`,
    title: defaultCandidate.name.title,
    formal: `${defaultCandidate.name.titleShortened} ${defaultCandidate.name.last}`
  },
  party: {
    memberOf: defaultCandidate.party.memberOf,
    partyChoice: defaultCandidate.party.partyChoice,
    colors: {
      primary: getPartyColor(defaultCandidate.party.memberOf, defaultCandidate.party.partyChoice, false),
      secondary: getPartyColor(defaultCandidate.party.memberOf, defaultCandidate.party.partyChoice, true),
    }
  },
  links: {
    wiki: defaultCandidate.wiki
  },
  image: defaultCandidate.image,
  createdAt: new Date(),
  createdBy: 'FIXTURE_GENERATOR',
});
