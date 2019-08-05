import merge from 'lodash/merge';

import {
  RECEIVE_INFO_WINDOW,
} from '../../actions/info_window_actions';

const InfoWindowReducer = (state = {}, action) => {
  let infoWindow;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INFO_WINDOW:
      return action.infoWindow;
      // infoWindow = action.infoWindow;
      // return merge({}, state, { [action.infoWindow]: infoWindow });
    default:
      return state;
  }
};

export default InfoWindowReducer;