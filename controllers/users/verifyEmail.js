const User = require("../../models/userModel");
const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    res.status(404).json({
      code: 404,
      message: `User width verificationToken: ${verificationToken} not found`,
    });
  }
  if (user.verify) {
    res.status(400).json({
      status: "Bad Request",
      code: 400,
      message: "Verification has already been passed",
    });
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.status(200).json({
    status: "Success",
    code: 200,
    message: "Verification successful",
  });
};
module.exports = verifyEmail;
