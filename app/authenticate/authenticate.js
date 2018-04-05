class Authenticate {

    constructor(credentialRepo, userRepo, hasher) {
        this.credentialRepo = credentialRepo;
        this.userRepo = userRepo;
        this.hasher = hasher;
    }

    signIn(credential) {
        return this.credentialRepo.searchByEmail(credential.email)
        .then(credentialDB => {
            if (!credentialDB[0]) throw new Error("Email fail");
            credential.setId(credentialDB[0].id);
            return this.hasher.compare(credential.password, credentialDB[0].password)
        })
        .then(isLogin => {
            if (!isLogin) throw new Error("Password fail");
            return credential.toJson();
        });
    }

    signUp(registrationForm) {
        return this.hasher.hash(registrationForm.getCredential().getPassword())
        .then(newPassword => {
            registrationForm.getCredential().setPassword(newPassword);
            return this.credentialRepo.add(registrationForm.getCredential());
        })
        .then(credentialId => {
            registrationForm.getUser().setCredentialId(credentialId[0]);
            return this.userRepo.add(registrationForm.getUser());
        });
    }

}

module.exports = Authenticate;
