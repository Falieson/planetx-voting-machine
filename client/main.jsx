import '../imports/startup/client/index.js';

import { Meteor } from 'meteor/meteor';
import React  from 'react';
import { render } from 'react-dom'

import { Provider } from 'react-redux';
import Store from '../imports/ui/store/store.js';

import App from '../imports/ui/App.jsx';

function AppRoot() {
  return (
    <div className="todo-container">
      <Provider store={Store()}>
        <App />
      </Provider>
    </div>
  );
}

Meteor.startup(()=> {
  render(
    <AppRoot />,
    document.getElementById('root')
  );
});
