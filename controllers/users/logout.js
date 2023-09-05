const User = require("../../models/userModel");

const logout = async (req, res) => {
  const user = req.user;
  if (!user) {
    res.status(401).json({ message: "Not authorized" });
  }
  const updateToken = await User.findOneAndUpdate(
    { email: user.email },
    { token: null },
    { new: true }
  );
  res.status(204).json({ user: updateToken });
};
module.exports = logout;
