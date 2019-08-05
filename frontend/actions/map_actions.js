export const RECEIVE_MAP = `RECEIVE_MAP`;

const receiveMap = map => ({
  type: RECEIVE_MAP,
  map,
});

export const storeMap = map => (
  receiveMap(map)
);