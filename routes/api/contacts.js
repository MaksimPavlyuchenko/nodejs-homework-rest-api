const express = require("express");
const crypto = require("crypto");

const contactsControllers = require("../../controllers/controllersRouters");
const contactSchema = require("../../schemas/contactSchema");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await contactsControllers.listContacts();
  res.status(200).json({
    status: "success",
    code: 200,
    data: { contacts },
  });
});

router.get("/:contactId", async (req, res, next) => {
  const contactId = req.params.contactId;
  const foundedContact = await contactsControllers.getContactById(contactId);
  if (!foundedContact) {
    return res.status(404).json({
      code: 404,
      message: "Not found",
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: { foundedContact },
  });
});

router.post("/", async (req, res, next) => {
  const contact = req.body;
  const { error } = contactSchema.validate(contact);
  if (error) {
    res.status(400).json({
      code: 400,
      message: "missing required name field",
    });
  }
  const newContact = { ...contact, id: crypto.randomUUID() };
  await contactsControllers.addContact(newContact);
  res.status(201).json({
    status: "success",
    code: 201,
    data: newContact,
  });
});

router.delete("/:contactId", async (req, res, next) => {
  const contactId = req.params.contactId;
  const foundedContact = await contactsControllers.getContactById(contactId);
  if (!foundedContact) {
    return res.status(404).json({
      code: 404,
      message: "Not found",
    });
  }
  await contactsControllers.removeContact(contactId);
  res
    .status(200)
    .json({ status: "success", message: "contact deleted", code: 200 });
});

router.put("/:contactId", async (req, res, next) => {
  const contact = req.body;
  const { error } = contactSchema.validate(contact);
  if (error) {
    res.status(400).json({
      code: 400,
      message: "missing fields",
    });
  }
  const contactId = req.params.contactId;
  const foundedContact = await contactsControllers.getContactById(contactId);
  if (!foundedContact) {
    return res.status(404).json({
      code: 404,
      message: "Not found",
    });
  }
  const newContact = await contactsControllers.updateContact(
    contactId,
    contact
  );
  res.status(200).json({ status: "success", code: 200, data: newContact });
});

module.exports = router;
