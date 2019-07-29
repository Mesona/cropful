import { connect } from 'react-redux';

import infoWindow from './infoWindow';
import { requestAllHarvests } from '../../actions/harvest_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  requestAllHarvests: () => dispatch(requestAllHarvests()),
  updateHarvest: (harvest) => dispatch(updateHarvest(harvest))
});

export default connect(mapStateToProps, mapDispatchToProps)(infoWindow);