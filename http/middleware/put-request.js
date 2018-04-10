
module.exports = function (req, res, next) {
    req.hospital = req.app.get('hospital.fac').makeFromRequest(req.body);
    req.hospital.setId(req.params.id);
    console.log(req.hospital);
    next();
};