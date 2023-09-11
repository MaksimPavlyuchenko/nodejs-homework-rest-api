const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const User = require("../../models/userModel");

const uploadAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: oldPath, filename } = req.file;

  const newPath = path.join(
    __dirname,
    "../",
    "../",
    "public",
    "avatars",
    filename
  );

  await Jimp.read(oldPath).then((img) => {
    return img.resize(250, 250).write(newPath);
  });

  await fs.unlink(oldPath);

  const avatarURL = path.join("/avatars", filename);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({ avatarURL });
};
module.exports = uploadAvatar;
