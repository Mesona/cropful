import { connect } from 'react-redux';

import Map from './map';
import { updateHarvest, createHarvest } from '../../actions/harvest_actions';
import { requestMap, storeMap } from '../../actions/map_actions';
import { requestInfoWindow, storeInfoWindow } from '../../actions/info_window_actions';

const mapStateToProps = (state) => ({
  infoWindow: state.entities.infoWindow,
  map: state.entities.map,
});

const mapDispatchToProps = dispatch => ({
  updateHarvest: (harvest) => dispatch(updateHarvest(harvest)),
  createHarvest: (harvest) => dispatch(createHarvest(harvest)),
  storeMap: (map) => dispatch(storeMap(map)),
  storeInfoWindow: (infoWindow) => dispatch(storeInfoWindow(infoWindow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);