var express = require('express');
const Validator = require('fastest-validator');
var router = express.Router();

const { User } = require('../models');

const v = new Validator();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res) => {
  const schema = {
    firstName: 'string',
    lastName: 'string',
    email: 'string'
  };

  const validated = v.validate(req.body, schema);

  if(validated.length) {
    return res
      .status(400)
      .json(validated);
  }

  const user = await User.create(req.body);

  res.json(user);
})

module.exports = router;
