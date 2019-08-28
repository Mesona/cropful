import * as SubscribersAPIUtils from '../util/subscriber_utils';

export const RECEIVE_SUBSCRIBER = 'RECEIVE_SUBSCRIBER';

const receiveSubscriber = subscriber => ({
  type: RECEIVE_SUBSCRIBER,
  subscriber,
});

export const createSubscriber = subscriber => dispatch => (
  SubscribersAPIUtils.postSubscriber(subscriber)
    .then(subscriber => dispatch(receiveSubscriber(subscriber)))
);