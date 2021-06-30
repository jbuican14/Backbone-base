const Backbone = require('backbone');
const $ = (jQuery = require('jquery-untouched'));
Backbone.$ = $;
require('bootstrap');

const Mn = require('backbone.marionette');
Mn.$ = Backbone.$;

// START APP
const contactApp = new Mn.Application();

contactApp.addRegions({
  mainRegion: '#main-region',
});

module.export = contactApp;
