import { connect } from 'react-redux';

import Landing from './landing';
import { requestAllHarvests, updateHarvest } from '../../actions/harvest_actions';
import { storeMap } from '../../actions/map_actions';
import { storeInfoWindow } from '../../actions/info_window_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  infoWindow: state.entities.infoWindow,
  map: state.entities.map,
});

const mapDispatchToProps = dispatch => ({
  requestAllHarvests: () => dispatch(requestAllHarvests()),
  updateHarvest: (harvest) => dispatch(updateHarvest(harvest)),
  storeMap: (map) => dispatch(storeMap(map)),
  storeInfoWindow: (infoWindow) => dispatch(storeInfoWindow(infoWindow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);