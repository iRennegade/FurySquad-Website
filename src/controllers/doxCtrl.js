const Dox = require("../models/Dox");
const doxCtrl = {}

doxCtrl.getAllDoxes = async (req, res) => {
  const doxes = await Dox.find();
  res.status(200).json(doxes);
};

doxCtrl.getDox = async (req, res) => {
  const dox = await Dox.findOne({ id: req.params.id });
  res.status(200).json(dox);
};

doxCtrl.deleteDox = async (req, res) => {
  Dox.remove({ id: req.params.id }, (err) => {
    if(!err) {
      res.status(200).json({
        message: "Dox borrado"
      });
    } else {
      res.status(400).json({
        message: "No pude borrar este dox"
      });
    }
  });
};

doxCtrl.postDox = async (req, res) => {
  const { name, author, content } = req.body;
  const newDox = new Dox({
    name: name,
    author: author,
    content: content
  });
  await newDox.save();
  res.status(200).json(newDox);
};

module.exports = doxCtrl;