class HospitalController {

    createHospital(request, response, next) {
        const repoHospital = request.app.get('hospital.repo');
        repoHospital.add(request.hospital).then(function () {
            response.status(201).send({message : 'add success'})
        }).catch(next)
    }
    editHospital(request, response, next) {
        const repoHospital = request.app.get('hospital.repo');
        repoHospital.edit(request.hospital).then(function () {
            response.status(200).send({message: 'edit success'})
        }).catch(next)
    }
    search(request, response, next) {
        request.app.get('search').search(request.condition)
            .then((list) => response.status(200).send(list.map(hospital => hospital.toJson())))
            .catch(next);
    }

}
module.exports = HospitalController;
