// NickelTracker
// by Edmundo Fuentes <me@edmundofuentes.com>
// 2014
//
// Main Ember.js Application setup

// Initialize the NickelTracker global application instance
window.NT = Ember.Application.create({
    LOG_TRANSITIONS: true,
    DEBUG: true,
    LOG_VIEW_LOOKUPS: true
});

// Configure the StorageAdapater
//   We'll be using IndexedDB since it seems to be the future, however, we'll also need to use a polyfill
//   to enable IndexedDB on iOS devices via WebSQL since this feature will not be supported until iOS 8.
NT.ApplicationSerializer = DS.IndexedDBSerializer.extend();
NT.ApplicationAdapter = DS.IndexedDBAdapter.extend({
    databaseName: 'nickeltracker',
    version: 1,
    migrations: function() {
        this.addModel('account');
        this.addModel('category');
        this.addModel('transaction');
    }
});