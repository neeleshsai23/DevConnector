const express = require('express');
const router = express.Router();

//@route  GET api/auth
//@desc   Register User
//@access Public
router.post('/', (req, res) => {
  console;
  res.send('Auth Route');
});

module.exports = router;
