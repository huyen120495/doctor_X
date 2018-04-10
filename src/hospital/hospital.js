class Hospital {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPhone() {
        return this.phone;
    }

    getLocation() {
        return this.location;
    }

    getDescribe() {
        return this.describe;
    }

    setId(id) {
        this.id = id;
    }

    setLocation(location) {
        this.location = location;
    }

    setName(name) {
        this.name = name;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    setDescribe(describe) {
        this.describe = describe;
    }

    toJson() {
        return {
            id: this.getId(),
            name: this.getName(),
            location: this.getLocation(),
            phone: this.getPhone(),
            describe: this.getDescribe()
        }
    }
}
module.exports = Hospital;
