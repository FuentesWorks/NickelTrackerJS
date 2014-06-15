// NickelTracker
// by Edmundo Fuentes <me@edmundofuentes.com>
// 2014
//
// Main Business Logic

function processNewIncome() {
    // Get parameters from form
    var accountId = $('#new-income-accountId').val();
    var description = $('#new-income-description').val();
    var details = $('#new-income-details').val();
    var amount = $('#new-income-amount').val();
    var date = $('#new-income-date').val();
    var button = $('#new-income-save');

    button.attr('disabled', true);
    button.html('<i class="fa fa-spinner fa-spin"></i>');
}