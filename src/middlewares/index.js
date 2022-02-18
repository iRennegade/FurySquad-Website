const Dox = require("../models/Dox");
const check = {};

check.theLength = async (req, res, next) => {
  const { name, content, author } = req.body;
  if(name.length <= 3) return res.status(200).json({
    message: "El título del dox es demasiado corto"
  });
  if(name.length > 30) return res.status(200).json({
    message: "El título no puede superar los 30 carácteres"
  });
  if(content.length < 5) return res.status(200).json({
    message: "El contenido del Dox debe tener más de 5 carácteres"
  });
  if(content.length > 2000) return res.status(200).json({
    message: "El contenido del Dox no puede superar los 2000 carácteres"
  });
  if(author.length <= 1) return res.status(200).json({
    message: "El nombre del autor debe ser mayor a un carácter"
  });
  if(author.length > 25) return res.status(200).json({
    message: "El nombre del autor debe tener menos de 25 carácteres"
  });
  next();
};

check.isVerifed = async (req, res, next) => {
  const dox = await Dox.findOne({ id: req.params.id });
  if(dox.verifed) {
    next();
  } else return res.status(200).json({
    message: "Este dox no esta verificado"
  });
};

check.isCreated = async (req, res, next) => {
  const dox = await Dox.findOne({ id: req.params.id });
  if(dox) {
    next();
  } else return res.status(404).json({ message: "404 not found" });
};

module.exports = check;