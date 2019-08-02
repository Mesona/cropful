import merge from 'lodash/merge';

import {
  RECEIVE_MAP,
} from '../../actions/map_actions';

const MapReducer = (state = {}, action) => {
  let map;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MAP:
      map = action.map;
      return merge({}, state, { [action.map.map]: map });
    default:
      return state;
  }
};

export default MapReducer;