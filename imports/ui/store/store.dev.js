import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import DevTools from '../../dev/reduxTools.js'

export default function Store() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  )

  return store
}
