const Contact = require("../../models/contactModel");

const updateStatus = async (req, res) => {
  const contactId = req.params.contactId;
  const { favorite } = req.body;
  const foundedContact = await Contact.findById(contactId);

  if (!foundedContact) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Not found contact id: ${contactId}`,
      data: "Not Found",
    });
  }

  if (!favorite) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "missing field favorite",
      data: "Not Found",
    });
  }

  const updateContact = await Contact.findByIdAndUpdate(contactId, {
    favorite,
  });
  res.status(200).json({
    status: "success",
    code: 200,
    data: { updateContact },
  });
};

module.exports = updateStatus;
