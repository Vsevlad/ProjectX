'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Chart Schema
 */
var ChartSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
ChartSchema.path('content').validate(function(content) {
    return content.length;
}, 'Content cannot be blank');

/**
 * Statics
 */
ChartSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Chart', ChartSchema);
