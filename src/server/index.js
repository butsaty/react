const app = require('./app');

const port = 8080;

app.listen(port, () => {
  console.info(`Express listening on port ${port}`); // eslint-disable-line
});
