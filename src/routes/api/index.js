const router = require("express").Router();
const check = require("../../middlewares");
const ctrl = require("../../controllers/doxCtrl");

router.route("/")
  .get(ctrl.getAllDoxes)
  .post(ctrl.postDox);

router.route("/dox/:id")
  .get([check.isCreated, check.isVerifed], ctrl.getDox)
  .delete([check.isCreated], ctrl.deleteDox);

module.exports = router;