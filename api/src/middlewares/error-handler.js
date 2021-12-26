const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  const msg = err.message || err;
  const status = err.status || 500;
  console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg });
  }
  res.status(status).json({ msg });
};

module.exports = errorHandlerMiddleware;
