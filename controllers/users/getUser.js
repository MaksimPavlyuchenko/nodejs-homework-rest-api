const getUser = (req, res) => {
  const { user } = req;
  if (!user) {
    res.status(401).json({ message: "Not authorized" });
  }
  res.status(200).json({ email: user.email, subscription: user.subscription });
};

module.exports = getUser;
