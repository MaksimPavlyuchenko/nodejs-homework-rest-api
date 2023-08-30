const Contact = require("../../models/contactModel");

const getAll = async (_, res) => {
  const contacts = await Contact.find();
  res.status(200).json({
    status: "success",
    code: 200,
    data: { contacts },
  });
};

module.exports = getAll;
