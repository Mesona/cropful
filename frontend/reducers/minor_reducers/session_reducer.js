import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_MAP,
} from '../../actions/session_actions';

const _nullUser = {
  id: null
};

const SessionReducer = (state = _nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user };
    case RECEIVE_MAP:
      return { currentMap: action.map };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;