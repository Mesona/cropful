import { combineReducers } from 'redux';
import UsersReducer from '../minor_reducers/user_reducer';
import HarvestsReducer from '../minor_reducers/harvest_reducer';
import MapReducer from '../minor_reducers/map_reducer';
import InfoWindowReducer from '../minor_reducers/info_window_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  harvests: HarvestsReducer,
  map: MapReducer,
  infoWindow: InfoWindowReducer,
});

export default EntitiesReducer;