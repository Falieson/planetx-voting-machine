const debug = process.env.NODE_ENV === "development";

import { Candidates }       from '../collections.js';
import { insertCandidate }  from '../methods.js';
import '../factories.js'; // #Factory.build('candidate')

import { getPartyColor } from '../helpers.js';

const createCandidate = ({first, last, title, titleShortened, party, isPartyChoice, wiki})=> {
  const memberOf = party;

  const result = {
    name: {
      first,
      last,
      full: `${first} ${last}`,
      title: title,
      titleShortened,
      formal: `${titleShortened} ${last}`
    },
    party: {
      memberOf,
      partyChoice: isPartyChoice,
      colors: {
        primary: getPartyColor(memberOf, isPartyChoice, false),
        secondary: getPartyColor(memberOf, isPartyChoice, true),
      }
    },
    links: {
      wiki
    },
    image: `/images/${first}${last}.jpg`,
    createdBy: 'FIXTURE_GENERATOR',
  };


  return Factory.build('candidate', result);
};

if( Meteor.isServer ){
  const firstLoad = Candidates.find().count() === 0;
  if( firstLoad ){

    if(debug){console.log("GENERATING CANDIDATES: STARTED");}
    const Sanders = createCandidate({
      first:            'Bernie',
      last:             'Sanders',
      title:            'Senator',
      titleShortened:   'Sen.',
      party:            'Independent',
      isPartyChoice:    false,
      wiki:             'https://en.wikipedia.org/wiki/Bernie_Sanders',
    });
    const Clinton = createCandidate({
      first:            'Hillary',
      last:             'Clinton',
      party:            'Democratic',
      isPartyChoice:    true,
      title:            'Secretary of State',
      titleShortened:   'S.o.S.',
      wiki:             'https://en.wikipedia.org/wiki/Hillary_Clinton',
    });
    const Johnson = createCandidate({
      first:            'Gary',
      last:             'Johnson',
      party:            'Libertarian',
      isPartyChoice:    true,
      title:            'Senator',
      titleShortened:   'Sen.',
      wiki:             'https://en.wikipedia.org/wiki/Gary_Johnson',
    });
    const Stein = createCandidate({
      first:            'Jill',
      last:             'Stein',
      party:            'Green',
      isPartyChoice:    true,
      title:            'Doctor',
      titleShortened:   'Dr.',
      wiki:             'https://en.wikipedia.org/wiki/Jill_Stein',
    });
    const Warren = createCandidate({
      first:            'Elizabeth',
      last:             'Warren',
      party:            'Democratic',
      isPartyChoice:    false,
      title:            'Senator',
      titleShortened:   'Sen.',
      wiki:             'https://en.wikipedia.org/wiki/Elizabeth_Warren',
    });
    const Trump = createCandidate({
      first:            'Donald',
      last:             'Trump',
      party:            'Republican',
      isPartyChoice:    true,
      title:            'Mister',
      titleShortened:   'Mr.',
      wiki:             'https://en.wikipedia.org/wiki/Donald_Trump',
    });
    const Biden = createCandidate({
      first:            'Joe',
      last:             'Biden',
      party:            'Democratic',
      isPartyChoice:    false,
      title:            'Vice President',
      titleShortened:   'V.P.',
      wiki:             'https://en.wikipedia.org/wiki/Joe_Biden',
    });
    const Paul = createCandidate({
      first:            'Rand',
      last:             'Paul',
      party:            'Republican',
      isPartyChoice:    false,
      title:            'Senator',
      titleShortened:   'Sen.',
      wiki:             'https://en.wikipedia.org/wiki/Rand_Paul',
    });
    const newCandidates = [Sanders, Clinton, Johnson, Stein, Warren, Trump, Biden, Paul];
    if(debug){console.log(`GENERATING CANDIDATES: ${newCandidates.length} Candidates`);}


    if(debug){console.log("INSERTING CANDIDATES: STARTED");}
    newCandidates.map((candidate)=> {
      insertCandidate.call(candidate);
    });

    if(debug){console.log("INSERTING CANDIDATES: COMPLETED");}
    Candidates.insert({_id: "init", createdAt: Date.now()});
  }
  else {
    if(debug){console.log("CANDIDATE FIXTURES: ALREADY GENERATED");}
  }
}
