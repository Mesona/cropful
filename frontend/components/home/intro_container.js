import { connect } from 'react-redux';

import Intro from './intro';
import { requestAllHarvests } from '../../actions/harvest_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  requestAllHarvests: () => dispatch(requestAllHarvests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);