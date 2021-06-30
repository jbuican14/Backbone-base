const Backbone = require('backbone');
const $ = (jQuery = require('jquery-untouched'));
Backbone.$ = $;
const _ = require('underscore');
const Mn = require('backbone.marionette');
Mn.$ = Backbone.$;

// const ContactApp = require('../app');
ContactApp = new Mn.Application();

console.log('Contact app', ContactApp);

ContactApp.module(
  'Entities',
  function (Entities, ContactApp, Backbone, Mn, $, _) {
    const alertPrivate = function (message) {
      alert(`Private alert:  ${message}`);
    };

    Entities.alertPublic = function (message) {
      alert(`I will now call alertPrivate`);
      alertPrivate(message);
    };
  }
);

module.exports = ContactApp;
