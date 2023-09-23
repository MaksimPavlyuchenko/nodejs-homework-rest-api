const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/userModel");
const userSchema = require("../../schemas/userSchema");

const login = async (req, res) => {
  const { email, password } = req.body;
  const { error } = userSchema.validate({ email, password });

  if (error) {
    res.status(400).json({ message: "missing required name field" });
  }

  const desiredUser = await User.findOne({ email });
  if (!desiredUser.verify) {
    res.status(400).json({
      code: 400,
      message: "Your email not verified",
    });
  }
  const validPassword = await bcrypt.compare(password, desiredUser.password);

  if (!validPassword) {
    res.status(401).json({ message: "Email or password is wrong" });
  }

  const payload = { email, password };
  const secret = process.env.SECRET_WORD;
  const token = jwt.sign(payload, secret, { expiresIn: 3600 });

  const updateUser = await User.findOneAndUpdate(
    { email },
    { token },
    {
      new: true,
    }
  );

  res.status(200).json({
    token: token,
    user: {
      email: email,
      subscription: updateUser.subscription,
    },
  });
};
module.exports = login;
