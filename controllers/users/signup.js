const bcrypt = require("bcrypt");
require("colors");

const User = require("../../models/userModel");
const userSchema = require("../../schemas/userSchema");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const { error } = userSchema.validate({ email, password });
  if (error) {
    res.status(400).json({
      code: 400,
      message: "missing required name field",
    });
  }
  const candidate = await User.findOne({ email }).exec();
  if (candidate) {
    res.status(409).json({
      status: "Conflict",
      code: 409,
      message: "Email in use",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({ email, password: hashedPassword });

  res.status(201).json({
    status: "Created",
    code: 201,
    user: { email: newUser.email, subscription: newUser.subscription },
  });
};

module.exports = signup;
