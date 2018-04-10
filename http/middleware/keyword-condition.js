const condition = require('../../src/search-services');
module.exports = function (req, res, next) {
    req.condition = new condition.SearchKeyword(req.query.keyword);
    next();

};