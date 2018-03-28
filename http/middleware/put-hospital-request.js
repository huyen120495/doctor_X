const Hospital = require('../../src/hospital/hospital');

module.exports = function (request, response, next) {
    let hospital = new Hospital(request.body.name, request.body.location_id)
};