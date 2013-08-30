/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', {
        title: 'Trizza',
        subtitle: 'Crowdsourced testing for your app.',
    });
};
