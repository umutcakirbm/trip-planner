module.exports = (req, res, next) => {
  req.query = Object.fromEntries(
    Object.entries(req.query).map(([key, value]) => {
      if (key === "date") {
        return ["available_dates_like", value];
      }

      return [key, value];
    })
  );

  next();
};
