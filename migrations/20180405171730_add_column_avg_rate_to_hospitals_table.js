
exports.up = function(knex, Promise) {
    return knex.schema.table('hospitals', function(table) {
        table.float('avg_rate');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('hospitals', function(table) {
        table.dropColumn('avg_rate');
    })
};

