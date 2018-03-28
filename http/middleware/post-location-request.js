const Location = require('../../src/location/location');
const LocationTransformer = require('../../src/location/location-transformer');
const connection = require('../../database/connection');

module.exports = function (request, response, next) {
    let location = new Location(request.body.latitude, request.body.longitude);
    location.setAddress(request.body.address);
    let transformer = new LocationTransformer(connection);
    transformer.transform(location).then(function (location_id) {
        request.location_id = location_id;
        next();
    });

};