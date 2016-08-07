import { Factory }  from 'meteor/dburles:factory';
import faker        from 'faker';

import Parties   from './collections.js';

export default Factory.define('parties', Parties, {
  title: faker.company.companyName(),
  createdAt: new Date(),
  createdBy: 'FACTORY_GENERATOR',
});
