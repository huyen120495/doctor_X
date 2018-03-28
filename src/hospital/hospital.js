class Hospital {
	/**
	 *
	 * @param {string} name
	 * @param {INT} location_id
	 */
	constructor(name, location_id) {
		this.name = name;
		this.location_id = location_id;
	}
	
	/**
	 *
	 * @return {string}
	 */
	getName() {
		return this.name;
	}
	
	/**
	 *
	 * @return {Location}
	 */
	getLocation_id() {
		return this.location_id;
	}
	
	getPhone() {
		return this.phone;
	}
	
	getDescribe() {
		return this.describe;
	}
	
	/**
	 *
	 * @return {INT}
	 */
	getId() {
		return this.id;
	}
	
	setId(id) {
		this.id = id;
	}
	setLocation_id(location_id) {
		this.location_id = location_id;
	}
	setPhone(phone) {
		this.phone = phone;
	}
	
	setDescribe(describe) {
		this.describe = describe;
	}
	
}
module.exports = Hospital;