
module.exports = function (req, res, next) {
    req.hospital = req.app.get('hospital.fac').makeFromRequest(req.body);
    next();

};