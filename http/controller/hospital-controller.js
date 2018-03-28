const HospitalRepository = require('../../src/hospital/hospital-repository');
const connection = require('../../database/connection');
const Hospital = require('../../src/hospital/hospital');

class HospitalController {
    /**
     *
     * @param request
     * @param response
     */
    addHospital(request, response) {
        //add repo to index
        let repo = new HospitalRepository(connection);
        repo.add(request.hospital).then(function () {
            response.status(200).send({message: 'Success'});
        })
    }

    /**
     *
     * @param request
     * @param response
     */
    editHospital(request, response) {
        let hospital = new Hospital(request.body.name, request.body.location_id);
        hospital.setDescribe(request.body.describe);
        hospital.setId(request.params.id);

        let repo = new HospitalRepository(connection);
        repo.edit(hospital).then(function () {
            response.status(200).send({message: 'Success'});
        })
    }

    removeHospital(request, response) {
        let repo = new HospitalRepository(connection);
        repo.remove(request.params.id).then(function () {
            response.status(200).send({message: 'Success'});
        })
    }

}

module.exports = HospitalController;
