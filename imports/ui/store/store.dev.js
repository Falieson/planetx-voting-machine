import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import DevTools from '../../dev/reduxTools.js'

export default function Store() {
  // t and r for left index finger
  // no accidental cmd+q => quit!
  console.log(`# Redux Dev Tools Loaded #
    - Show/Hide   the dock with "ctrl-t"
    - Re-position the dock with "ctrl-r"
  `);


  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  )

  return store
}
