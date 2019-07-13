import merge from 'lodash/merge';

import {
  RECEIVE_ALL_HARVESTS,
  RECEIVE_HARVEST,
} from '../../actions/harvest_actions';

const HarvestsReducer = (state = {}, action) => {
  let harvest;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_HARVESTS:
      return action.harvests;
    case RECEIVE_HARVEST:
      harvest = action.harvest;
      return merge({}, state, { [action.harvest.id]: harvest });
    default:
      return state;
  }
};

export default HarvestsReducer;