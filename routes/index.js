const HospitalController = require('../http/controller/hospital-controller');
const postRequest = require('../http/middleware/post-hospital-request');
const postLocation = require('../http/middleware/post-location-request');

const express = require('express');

let router = express.Router();
let hospitalController = new HospitalController();

router.get('/', function (req, res) {
    res.send('hello')
});
router.post('/post', postLocation, postRequest, hospitalController.addHospital);
router.put('/put/:id', hospitalController.editHospital);
router.delete('/delete/:id', hospitalController.removeHospital);

module.exports = router;
