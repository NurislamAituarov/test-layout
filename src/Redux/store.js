import { combineReducers, createStore } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  reducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
