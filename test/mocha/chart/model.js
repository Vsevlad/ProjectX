'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    Chart = mongoose.model('Chart')

//Globals
var chart;

//The tests
describe('<Unit Test>', function() {
    describe('Model Chart:', function() {
        beforeEach(function(done) {
            chart = new Chart({
                content: 'New content'
            });
            
            done();
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return chart.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save without content', function(done) {
                chart.content = '';

                return chart.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            chart.remove();
            done();
        });
    });
});