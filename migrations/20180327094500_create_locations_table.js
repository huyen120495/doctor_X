
exports.up = function(knex, Promise) {
    return knex.schema.createTable('locations', function(table) {
        table.increments('id');
        table.float('latitude');
        table.float('longitude');
        table.text('address');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('locations');
};
