export const getHarvests = () => (
  $.ajax({
    method: `GET`,
    url: `/api/harvests`,
  })
);

export const getHarvest = id => (
  $.ajax({
    method: `GET`,
    url: `/api/harvests/${id}`,
  })
);