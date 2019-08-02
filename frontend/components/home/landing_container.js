import { connect } from 'react-redux';

import Landing from './landing';
import { requestAllHarvests, updateHarvest } from '../../actions/harvest_actions';
import { requestMap, storeMap } from '../../actions/map_actions';
import { requestInfoWindow, storeInfoWindow } from '../../actions/info_window_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  requestAllHarvests: () => dispatch(requestAllHarvests()),
  updateHarvest: (harvest) => dispatch(updateHarvest(harvest)),
  requestMap: () => dispatch(requestMap()),
  storeMap: (map) => dispatch(storeMap(map)),
  requestInfoWindow: () => dispatch(requestInfoWindow()),
  storeInfoWindow: (infoWindow) => dispatch(storeInfoWindow(infoWindow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);