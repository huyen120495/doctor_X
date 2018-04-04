class Hospital {

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getName() {
        return this.name;
    }

    getLocation() {
        return this.location;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }

    setDescribe(describe) {
        this.describe = describe;
    }

    getDescribe() {
        return this.describe;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    toJson() {
        return {
            name : this.getName(),
            address : this.getLocation().getAddress(),
            phone : this.getPhone(),
            describe : this.getDescribe()
        }
    }
    
}

module.exports = Hospital;
