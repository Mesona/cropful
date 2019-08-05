export const RECEIVE_INFO_WINDOW = `RECEIVE_INFO_WINDOW`;

const receiveInfoWindow = infoWindow => ({
  type: RECEIVE_INFO_WINDOW,
  infoWindow,
});

export const storeInfoWindow = infoWindow => (
  receiveInfoWindow(infoWindow)
);
