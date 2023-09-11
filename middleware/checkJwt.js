const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const checkJwt = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization?.split(" ") || "";
    if ((bearer !== "Bearer") & !token) {
      res.status(401).json({ message: "Unauthorized" });
    }
    const secret = process.env.SECRET_WORD;
    const userData = jwt.verify(token, secret);
    const user = await User.findOne({ email: userData.email });
    if (!user || !user.token) {
      res.status(401).json({ message: "Not authorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkJwt;
