const Hospital = require('../../src/hospital/hospital');

module.exports = function (req, res, next) {

    let hospital = new Hospital(req.body.name, req.location_id);
    hospital.setDescribe(req.body.describe);

    req.hospital = hospital;

    next();
};