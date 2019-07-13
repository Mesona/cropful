import { connect } from 'react-redux';

import Landing from './landing';
import { requestAllHarvests } from '../../actions/harvest_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  requestAllHarvests: () => dispatch(requestAllHarvests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);