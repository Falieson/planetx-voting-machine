// FILENAME /imports/startup/server/index.js
// CALLEDBY /server/main.js
// [Startup Files](http://guide.meteor.com/structure.html#startup-files)

// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import './fixtures.js';

// This file configures the Accounts package to define the UI of the reset password email.
// import '../startup/server/reset-password-email.js';

// Set up some rate limiting and other important security settings.
// import '../startup/server/security.js';

// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import '../../api/api-server.js';
