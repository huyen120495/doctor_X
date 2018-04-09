class AuthenticateController {

    signIn(request, response) {
        request.app.get('CredentialFactory').make(request.body)
        .then(credential => {
            request.app.get('Authenticate').signIn(credential)
            .then(() => {
                response.send('login success');
            })
        })
    }

    signUp(request, response) {
        //todo
    }

}

module.exports = AuthenticateController;
