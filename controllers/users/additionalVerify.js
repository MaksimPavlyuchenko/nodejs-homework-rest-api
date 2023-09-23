const { transporterEmail } = require("../../helpers");
const User = require("../../models/userModel");

const additionalVerify = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "missing required field email" });
  }
  const user = await User.findOne({ email });
  if (user.verify) {
    res.status(400).json({ message: "Verification has already been passed" });
  }
  const emailOptions = {
    to: email,
    from: "maksim_pavlyuchenko@meta.ua",
    subject: "Подтверждение email",
    html: `<a target="_blank" href="http://localhost:8080/users/verify${user.verificationToken}">Подтвердить email </a>`,
  };
  await transporterEmail(emailOptions);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = additionalVerify;
