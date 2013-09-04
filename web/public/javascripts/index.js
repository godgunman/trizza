$(function() {
    var s = skrollr.init();

    $('#subscribe-modal button[type=submit]').click(function() {
        $.post('/subscribe', $('#subscribe-modal form').serialize());
    });
});
