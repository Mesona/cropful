import * as HarvestsAPIUtils from '../util/harvest_utils';

export const RECEIVE_ALL_HARVESTS = 'RECEIVE_ALL_HARVESTS';
export const RECEIVE_HARVEST = 'RECEIVE_HARVEST';

const receiveAllHarvests = harvests => ({
  type: RECEIVE_ALL_HARVESTS,
  harvests,
});

const receiveHarvest = harvest => ({
  type: RECEIVE_HARVEST,
  harvest,
});

export const requestAllHarvests = () => dispatch => (
  HarvestsAPIUtils.getHarvests()
    .then(harvests => dispatch(receiveAllHarvests(harvests)))
);

export const requestHarvest = id => dispatch => (
  HarvestsAPIUtils.getHarvest(id)
    .then(harvest => dispatch(receiveHarvest(harvest)))
);

export const updateHarvest = harvest => dispatch => (
  HarvestsAPIUtils.patchHarvest(harvest)
    .then(harvest => dispatch(receiveHarvest(harvest)))
);
