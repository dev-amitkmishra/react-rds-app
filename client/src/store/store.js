import { applyMiddleware, compose, createStore } from 'redux'

import initReducer from './reducer/ratingReducer';
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from './saga';


const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const sagaMiddleware = createSagaMiddleware();



  const store = createStore(
    initReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    ))

  sagaMiddleware.run(watchAuth);
  return store
}

export default configureStore
