const Contact = require("../../models/contactModel");
const incomingContactSchema = require("../../schemas/incomingContactSchema");

const create = async (req, res) => {
  const contact = req.body;
  const { error } = incomingContactSchema.validate(contact);
  if (error) {
    res.status(400).json({
      code: 400,
      message: "missing required name field",
    });
  }
  const { _id } = req.user;
  const newContact = await Contact.create({
    ...contact,
    owner: _id,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: newContact,
  });
};

module.exports = create;
