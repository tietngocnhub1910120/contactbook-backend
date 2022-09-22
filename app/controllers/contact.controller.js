exports.create = (req, res) => {
  res.send({ message: "create handler" }); //  /api/contacts methods post
};
exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" }); //  /api/contacts methods get
};
exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" }); //  /api/contacts/idididdid methods get
};
exports.update = (req, res) => {
  res.send({ message: "update handler" }); //  /api/contacts/idididdid methods put
};
exports.delete = (req, res) => {
  res.send({ message: "delete handler" }); //  /api/contacts/idididdid methods delete
};
exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" }); //  /api/contacts methods delete
};
exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" }); //  /api/contacts/favorite methods get
};
