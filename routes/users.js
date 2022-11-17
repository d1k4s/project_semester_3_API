var express = require("express");
var router = express.Router();

const userController = require("../controllers/userController");

router.route('/')
  .get(userController.index)
  .post(userController.store);

router.route('/:id')
  .get(userController.show)
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;
