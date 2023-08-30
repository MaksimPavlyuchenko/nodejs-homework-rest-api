const Contact = require("../../models/contactModel");

const update = async (req, res) => {
  const contactId = req.params.contactId;
  const body = req.body;
  const updateContact = await Contact.findByIdAndUpdate(contactId, body);
  if (!updateContact) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Not found contact id: ${contactId}`,
      data: "Not Found",
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: updateContact,
  });
};

module.exports = update;
