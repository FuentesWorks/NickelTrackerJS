NT.Category = DS.Model.extend({
    id:     DS.attr('number'),
    name:   DS.attr('string'),
    budget: DS.attr('number'),

    // Object relationships
    transactions: DS.hasMany('transaction')
});