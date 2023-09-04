const User = require("../../models/userModel");

const updateSub = async (req, res) => {
  const { id } = req.params;
  const { subscription } = req.body;

  const user = await User.findById({ _id: id });
  if (!user) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Not found user id: ${id}`,
      data: "Not Found",
    });
  }
  if (!subscription) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "missing field subscription",
    });
  }

  const updateUser = await User.findByIdAndUpdate(
    id,
    {
      subscription,
    },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    code: 200,
    user: { email: updateUser.email, subscription: updateUser.subscription },
  });
};
module.exports = updateSub;
