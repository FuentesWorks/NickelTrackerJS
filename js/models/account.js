NT.Account = DS.Model.extend({
	id:         DS.attr('number'),
    name:       DS.attr('string'),
    balance:    DS.attr('number'),
    type:       DS.attr('string'), // D: debit, C: credit, S: savings, M: cash, L: loans

    // Object relationships
    transactions: DS.hasMany('transaction')
});
