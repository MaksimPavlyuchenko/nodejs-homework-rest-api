const Contact = require("../../models/contactModel");

const remove = async (req, res) => {
  const contactId = req.params.contactId;

  const result = await Contact.findByIdAndRemove(contactId);
  if (result) {
    res.json({
      status: "success",
      code: 200,
      data: result,
    });
  } else {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Not found contact id: ${contactId}`,
      data: "Not Found",
    });
  }
};

module.exports = remove;
