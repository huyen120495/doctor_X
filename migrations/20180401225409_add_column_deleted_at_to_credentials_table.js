
exports.up = function(knex, Promise) {
    return knex.schema.table('credentials', function(table) {
        table.bigInteger('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('credentials', function(table) {
        table.dropColumn('deleted_at');
    })
};
