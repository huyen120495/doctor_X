
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function(table) {
        table.increments('id');
        table.integer('hospital_id');
        table.integer('user_id');
        table.string('content');
        table.dateTime('time');
        table.string('hospital_name');
        table.string('user_name');
        table.bigInteger('deleted_at');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments');
};
