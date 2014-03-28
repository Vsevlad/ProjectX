'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Chart = mongoose.model('Chart'),
    _ = require('lodash');


/**
 * Find chart by id
 */
exports.chart = function(req, res, next, id) {
    Chart.load(id, function(err, chart) {
        if (err) return next(err);
        if (!chart) return next(new Error('Failed to load chart ' + id));
        req.chart = chart;
        next();
    });
};

/**
 * Create an chart
 */
exports.create = function(req, res) {
    var chart = new Chart(req.body);

    chart.save(function(err) {
        if (err) {
            // return res.send('users/signup', {
            //     errors: err.errors,
            //     chart: chart
            // });
            res.send(500);
        } else {
            res.jsonp(chart);
        }
    });
};

/**
 * Update an chart
 */
exports.update = function(req, res) {
    var chart = req.chart;

    chart = _.extend(chart, req.body);

    chart.save(function(err) {
        if (err) {
            // return res.send('users/signup', {
            //     errors: err.errors,
            //     chart: chart
            // });
            res.send(500);
        } else {
            res.jsonp(chart);
        }
    });
};

/**
 * Delete an chart
 */
exports.destroy = function(req, res) {
    var chart = req.chart;

    chart.remove(function(err) {
        if (err) {
            // return res.send('users/signup', {
            //     errors: err.errors,
            //     chart: chart
            // });
            res.send(500);
        } else {
            res.jsonp(chart);
        }
    });
};

/**
 * Show an chart
 */
exports.show = function(req, res) {
    res.jsonp(req.chart);
};

/**
 * List of Charts
 */
exports.all = function(req, res) {
    Chart.find().sort('-created').exec(function(err, charts) {
        if (err) {
            // res.render('error', {
            //     status: 500
            // });
            res.send(500);
        } else {
            res.jsonp(charts);
        }
    });
};
