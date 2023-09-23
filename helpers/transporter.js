const nodemailer = require("nodemailer");

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "maksim_pavlyuchenko@meta.ua",
    pass: process.env.PASSWORD_META,
  },
};

const transporter = nodemailer.createTransport(config);

const transporterEmail = async (data) => {
  const email = { ...data, from: "maksim_pavlyuchenko@meta.ua" };
  try {
    await transporter.sendMail(email);
    return true;
  } catch (error) {
    console.log(error.response);
  }
};

module.exports = transporterEmail;
