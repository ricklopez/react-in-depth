import { combineReducers } from 'redux';
import home from './home.reducer';

const rootReducer = combineReducers({
  home:home
});

export default rootReducer;