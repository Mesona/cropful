export const postSubscriber = subscriber => (
  $.ajax({
    method: `POST`,
    url: `/api/subscribers`,
    data: { subscriber }
  })
);