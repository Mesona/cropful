import merge from 'lodash/merge';

import {
  RECEIVE_SUBSCRIBER,
} from '../../actions/subscriber_actions';

const SubscribersReducer = (state = {}, action) => {
  let subscriber;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SUBSCRIBER:
      subscriber = action.subscriber;
      return merge({}, state, { [action.subscriber.id]: subscriber });
    default:
      return state;
  }
};

export default SubscribersReducer;