import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import rootSaga from '../sagas'
import  appReducers from '../reducers'


const history = createBrowserHistory()


const initializeStore = () => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


  const sagaMiddleware = createSagaMiddleware({});

  const store = createStore(
    appReducers(),
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware
      )
    ))

  sagaMiddleware.run(rootSaga)
  return store
}


let store = initializeStore()

export { store, history }
