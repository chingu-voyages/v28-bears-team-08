import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './authReducer';
import { appStatusReducer } from './appStatusReducer';
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ app: appStatusReducer, user: authReducer }),
    applyMiddleware(thunk)
  );
  return store;
};
