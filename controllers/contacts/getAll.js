const Contact = require("../../models/contactModel");

const getAll = async (req, res) => {
  const { user } = req;

  if (req.query.page && req.query.limit) {
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    const contacts = await Contact.find({ owner: user._id }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id subscription email");
    res.status(200).json({
      status: "success",
      code: 200,
      data: { contacts },
    });
  }

  if (req.query.favorite) {
    const contacts = await Contact.find({
      owner: user._id,
      favorite: true,
    }).populate("owner", "_id subscription email");
    res.status(200).json({
      status: "success",
      code: 200,
      data: { contacts },
    });
  }

  const contacts = await Contact.find({ owner: user._id }).populate(
    "owner",
    "_id subscription email"
  );
  res.status(200).json({
    status: "success",
    code: 200,
    data: { contacts },
  });
};

module.exports = getAll;
