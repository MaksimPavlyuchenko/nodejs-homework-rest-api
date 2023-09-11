const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const uploadDir = path.join(__dirname, "../", "tmp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const extName = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, extName);
    const newName = `${baseName}-${crypto.randomUUID()}${extName}`;
    cb(null, newName);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
