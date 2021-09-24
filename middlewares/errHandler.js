module.exports = (err, req, res, next) => {
  if (!err) {
    return;
  }

  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal Server Error" });
};
