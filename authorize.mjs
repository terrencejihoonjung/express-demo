const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john" }; // Adding a property to req
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

export default authorize;
