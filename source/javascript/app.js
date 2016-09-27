var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};
