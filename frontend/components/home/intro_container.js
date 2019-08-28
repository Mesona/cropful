import { connect } from 'react-redux';

import Intro from './intro';
import { requestAllHarvests } from '../../actions/harvest_actions';
import { createSubscriber } from '../../actions/subscriber_actions';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  requestAllHarvests: () => dispatch(requestAllHarvests()),
  createSubscriber: (subscriber) => dispatch(createSubscriber(subscriber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);