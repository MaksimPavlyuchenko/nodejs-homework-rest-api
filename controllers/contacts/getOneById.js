const Contact = require("../../models/contactModel");

const getOneById = async (req, res) => {
  const contactId = req.params.contactId;
  const foundedContact = await Contact.findById(contactId);
  if (!foundedContact) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: `Not found contact id: ${contactId}`,
      data: "Not Found",
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: { foundedContact },
  });
};

module.exports = getOneById;
