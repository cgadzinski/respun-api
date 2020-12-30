/*
  Catch Errors

  Used with Async/Await to catch errors: wrap each controller function with catchErrors to catch the error and pass it along to middleware with next()
*/

catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  }
}

developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';
  const errorDetails = {
    message: err.message,
    status: err.status,
    stack: err.stack
  };
  res.status(err.status || 500);
  res.json(errorDetails);
};

module.exports = {
  catchErrors,
  developmentErrors
}