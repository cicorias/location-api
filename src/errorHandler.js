const logger = require("./logger");

module.exports = (err, req, res, next) => {
  logger.error(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ code: err.code || 0, message: err.message });
};
