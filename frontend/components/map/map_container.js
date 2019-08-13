import { connect } from 'react-redux';

import Map from './map';
import { updateHarvest } from '../../actions/harvest_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  updateHarvest: (harvest) => dispatch(updateHarvest(harvest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);