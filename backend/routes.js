const express = require('express');
const router = express.Router();
var models = require('../models')

// YOUR API ROUTES HERE
router.get('/', (request, response) => {
    response.render('index'); // For React/Redux
});

// SAMPLE ROUTE

module.exports = router;
