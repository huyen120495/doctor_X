const Credential = require('./credential');

class CredentialFactory {

    make(credentialRaw) {
        let credential = new Credential(credentialRaw.email, credentialRaw.password);
        return credential;
    }

}

module.exports = CredentialFactory;
