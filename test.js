const connection 	= require('./database/connection');
const Hospital 		= require('./src/hospital/hospital');
const HospitalRepo  = require('./src/hospital/hospital-repository');
const Location 		= require('./src/location/location');
const LocationRepo 	= require('./src/location/location-repository');
console.log (connection);
/*let hospital = new Hospital('Benh vien Bach Mai', 1);
hospital.setPhone('024 3456 0982');
hospital.setDescribe('Benh  Ha Noi');

console.log (hospital);

let repo = new HospitalRepo(connection);
hospital.setId(1);*/
let location = new Location(123.234, 232.324);
location.setAddress('Ha Nam');
let repo = new LocationRepo(connection);
repo.add(location).then(function () {
	console.log ('Thanh cong');
}, function () {
	console.log ('That bai');
});