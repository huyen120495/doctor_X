const express = require('express');
const router = express.Router();
const HospitalController = require('../http/controller/api/hospital-controller');
const check = require('../http/middleware/');

let hospitalController = new HospitalController();

router.get('/', check.undeletedCondition, hospitalController.search);

router.post('/add',check.postRequest, hospitalController.createHospital);

router.get('/keyword',check.keywordCondition, hospitalController.search);

router.put('/edit/:id',check.putRequest, hospitalController.editHospital);


module.exports = router;
