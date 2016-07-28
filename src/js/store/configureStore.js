import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const logger = createLogger();
const configureStore = (initialState = {})=> {
  const store =  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
  return store;
};

export default configureStore;
