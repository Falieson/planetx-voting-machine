// Client Configs: Routes
import {renderRoutes} from '../imports/startup/client/index.js';

// Meteor & React
import { Meteor } from 'meteor/meteor';
import React  from 'react';
import { render } from 'react-dom'

// Redux
import { Provider } from 'react-redux';
import Store from '../imports/ui/store/store.js';

// Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';

function AppRoot() {
  return (
    <div className="todo-container">
      <Provider store={Store()}>
        {renderRoutes()}
      </Provider>
    </div>
  );
}

Meteor.startup(()=> {
  injectTapEventPlugin(); // Required for Material IconMenu (v.0.15.0)

  render(
    AppRoot(),
    document.getElementById('root')
  );
});
