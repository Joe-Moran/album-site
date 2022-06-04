// eslint-disable-next-line no-undef
const gyroscope = new Gyroscope({
  frequency: 60,
});

(() => Promise.all([
  navigator.permissions.query({
    name: 'gyroscope',
  }),
]).then((results) => {
  if (results.every((result) => result.state === 'granted')) {
    gyroscope.start();
  } else {
    throw new Error('No permissions to use Gyroscope.');
  }
}))();

export default gyroscope;
