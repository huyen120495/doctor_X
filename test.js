const Location = require('./src/location/location');
const LocationTransformer = require('./src/location/location-transformer');
const connection = require('./database/connection');

let location = new Location(1.21221, 54.3232);
location.setAddress('Ha Noi');

let transformer = new LocationTransformer(connection);

transformer.transform(location).then(function (result) {
    console.log(result);
});
