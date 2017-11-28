var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controller.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

    router
    .route('/hotels/new')
    .post(ctrlHotels.hotelsAddOne);

module.exports = router;