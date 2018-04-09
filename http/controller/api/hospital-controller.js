class HospitalControler {

    add(request, response) {
        request.app.get('HospitalFactoryFromRQ').make(request.body)
        .then(hospital => {
            request.app.get('HospitalRepository').add(hospital).then(() => {
                response.status(201).send('success');
            })
        })
    }

    edit(request, response) {
        request.app.get('HospitalFactoryFromRQ').make(request.body)
        .then(hospital => {
            request.app.get('HospitalRepository').edit(hospital).then(() => {
                response.send('modify');
            })
        })
    
    }

    delete(request, response) {
        request.app.get('HospitalRepository').delete(request.params.id)
        .then(() => {
            response.send('deleted');
        })
    }

    detail(request, response) {
        request.app.get('HospitalRepository').detail(request.params.id)
        .then(() => {
            response.send('deleted');
        })
    }

}

module.exports = HospitalControler;
