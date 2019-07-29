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

export const postHarvest = harvest => (
  $.ajax({
    method: `POST`,
    url: `/api/harvests`,
    data: { harvest }
  })
);

export const patchHarvest = harvest => (
  $.ajax({
    method: `POST`,
    url: `/api/harvests/${harvest.id}`,
    data: { harvest }
  })
);

export const deleteHarvest = () => (
  $.ajax({
    method: `DELETE`,
    url: `/api/harvests`,
  })
);
