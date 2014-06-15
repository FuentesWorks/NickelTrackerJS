NT.Router.map(function() {
    this.resource('dashboard', { path: '/' });
    this.resource('accounts', { path: '/accounts' });
    this.resource('categories', { path: '/categories' });
    this.resource('transactions', { path: '/transactions' });
    this.resource('transactions-new-income', { path: '/transactions/new/income' });
    this.resource('transactions-new-expense', { path: '/transactions/new/expense' });
    this.resource('transactions-new-transfer', { path: '/transactions/new/transfer' });
});

NT.DashboardRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('model', model);
    }
});