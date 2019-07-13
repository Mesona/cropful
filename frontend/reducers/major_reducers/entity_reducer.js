import { combineReducers } from 'redux';
import UsersReducer from '../minor_reducers/user_reducer';
import HarvestsReducer from '../minor_reducers/harvest_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  harvests: HarvestsReducer,
});

export default EntitiesReducer;