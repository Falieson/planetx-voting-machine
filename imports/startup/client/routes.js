// React-Router
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import App                from '../../ui/App.jsx';
import BallotPage         from '../../ui/pages/Ballot.jsx';
import LoginPage          from '../../ui/pages/AuthLogin.jsx';

import TotalResultsPage   from '../../ui/pages/ResultsTotal.jsx';
import TodaysResultsPage  from '../../ui/pages/ResultsToday.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/"               component={App}>
      <IndexRoute                 component={BallotPage} />
      <Route path="login"         component={LoginPage}/>
      <Route path="results/total" component={TotalResultsPage}/>
      <Route path="results/today" component={TodaysResultsPage}/>
    </Route>
  </Router>
);

// https://guide.meteor.com/react.html#routing
// import ListPageContainer from '../../ui/containers/ListPageContainer.js';
// import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';
// import NotFoundPage from '../../ui/pages/NotFoundPage.js';
// <Route path="lists/:id" component={ListPageContainer}/>
// <Route path="join" component={AuthPageJoin}/>
// <Route path="*" component={NotFoundPage}/>
