NT.Transaction = DS.Model.extend({
    id:             DS.attr('number'),
    type:           DS.attr('string'), // I: income, E: expense, T: transfer
    amount:         DS.attr('number'), // integer
    description:    DS.attr('string'),
    details:        DS.attr('string'),
    date:           DS.attr('date'),

    // Object relationships
    account:            DS.belongsTo('account'),
    destinationAccount: DS.belongsTo('account'), // optional
    category:           DS.belongsTo('category')
});