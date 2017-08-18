const express = require('express');
const router = express.Router();
var models = require('../models')

// YOUR API ROUTES HERE
router.get('/', (request, response) => {
    response.render('index'); // For React/Redux
});
router.get("/matching", (req, res) => {
  res.render('matching')
});

router.get("/random", (req, res) => {
console.log(req)
  res.render('random')
});
router.get("/mentor", (req, res) => {
  res.render('mentor')
})
// SAMPLE ROUTE

module.exports = router;
