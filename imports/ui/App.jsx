import { Meteor } from 'meteor/meteor';
import { Component } from 'react';

import AppContainer from './pages/AppContainer.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
