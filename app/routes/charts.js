'use strict';

// Charts routes use charts controller
var charts = require('../controllers/charts');
// var authorization = require('./middlewares/authorization');

// Article authorization helpers
// var hasAuthorization = function(req, res, next) {
// 	if (req.article.user.id !== req.user.id) {
//         return res.send(401, 'User is not authorized');
//     }
//     next();
// };

module.exports = function(app) {

    app.get('/charts', charts.all);
    app.post('/charts', charts.create);
    app.get('/charts/:chartId', charts.show);
    app.put('/charts/:chartId', charts.update);
    app.del('/charts/:chartId', charts.destroy);

    // Finish with setting up the chartId param
    app.param('chartId', charts.chart);

};