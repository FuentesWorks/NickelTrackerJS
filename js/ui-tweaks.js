function changeButtonText(spanId, spanText){
    document.getElementById(spanId).innerHTML = spanText;
    return true;
}

window.onload = (function(){
    // Prevent iOS WebApp from opening a new tab in Safari, thus
    //  escaping its sandbox..
    var a=document.getElementsByTagName("a");
    for(var i=0;i<a.length;i++)
    {
        a[i].onclick=function()
        {
            window.location=this.getAttribute("href");
            return false
        }
    }

    ///// DateTime Picker /////
    var from = $("#form_datetime_from");
    var to = $("#form_datetime_to");
    if(from.length != 0) {
        from.datetimepicker({
            format: "yyyy-mm-dd",
            autoclose: true,
            minView: 2,
            pickerPosition: "bottom-left"
        });
    }
    if(to.length != 0) {
        to.datetimepicker({
            format: "yyyy-mm-dd",
            autoclose: true,
            minView: 2,
            pickerPosition: "bottom-left"
        });
    }
});

$(function() {
    /* FASTCLICK */
    FastClick.attach(document.body);

    /* jQUERY SWIPE PLUGINS */
    $("#main-body").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            //This only fires when the user swipes left
            // Hide the sidebar
            $('.row-offcanvas').toggleClass('active', false);
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            //This only fires when the user swipes left
            // Show the sidebar
            $('.row-offcanvas').toggleClass('active', true);
        }
    });
});

$(document).ready(function () {
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
});

Number.prototype.formatNumber = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};