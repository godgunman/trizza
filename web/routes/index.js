/*
 * GET home page.
 */

exports.index = function(req, res){
    var coinbase_id = 'f37bd28ae4360948711344c4118db83b';
    res.render('index', {
        title: 'Trizza',
        coinbase_id: coinbase_id,
    });
};
