
exports.up = function(knex, Promise) {
    return knex.schema.table('rates', function(table) {
        table.bigInteger('time');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('rates', function(table) {
        table.dropColumn('time');
    })
};
