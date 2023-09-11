const getAll = require("./contacts/getAll");
const getOneById = require("./contacts/getOneById");
const create = require("./contacts/create");
const update = require("./contacts/update");
const updateStatus = require("./contacts/updateStatus");
const remove = require("./contacts/remove");

const signup = require("./users/signup");
const login = require("./users/login");
const logout = require("./users/logout");
const getUser = require("./users/getUser");
const updateSub = require("./users/updateSub");

const uploadAvatar = require("./avatars/uploadAvatar");

const ctrlWrapper = require("../helpers");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getOneById: ctrlWrapper(getOneById),
  create: ctrlWrapper(create),
  update: ctrlWrapper(update),
  updateStatus: ctrlWrapper(updateStatus),
  remove: ctrlWrapper(remove),
  signup: ctrlWrapper(signup),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getUser: ctrlWrapper(getUser),
  updateSub: ctrlWrapper(updateSub),
  uploadAvatar: ctrlWrapper(uploadAvatar),
};
