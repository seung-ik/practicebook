import moneyReducer from './moneyReducer'
import eatReducer from './eatReducer'
import sleepyReducer from './sleepyReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sleepyReducer,
  eatReducer,
  moneyReducer
})

export default rootReducer;