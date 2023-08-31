const getAll = require("./contacts/getAll");
const getOneById = require("./contacts/getOneById");
const create = require("./contacts/create");
const update = require("./contacts/update");
const updateStatus = require("./contacts/updateStatus");
const remove = require("./contacts/remove");

const ctrlWrapper = require("../helpers");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getOneById: ctrlWrapper(getOneById),
  create: ctrlWrapper(create),
  update: ctrlWrapper(update),
  updateStatus: ctrlWrapper(updateStatus),
  remove: ctrlWrapper(remove),
};
