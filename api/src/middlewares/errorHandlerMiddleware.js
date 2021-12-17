module.exports = (err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
};
