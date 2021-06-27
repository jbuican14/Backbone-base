const Backbone = require('backbone');
const $ = (jQuery = require('jquery-untouched'));
Backbone.$ = $;
require('bootstrap');

const Mn = require('backbone.marionette');
// mn.$ = Backbone.$;
$(document).ready(() => {
  const myApp = new Mn.Application();
  myApp.on('before:start', function () {
    console.log('before:start');
  });

  myApp.on('start', function (opt) {
    console.log('start');
  });

  //models
  myApp.Contact = Backbone.Model.extend({
    defaults: {
      firstName: 'Default Name',
      phoneNumber: 'No phone number!',
    },
  });

  myApp.ContactView = Mn.ItemView.extend({
    template: '#contact-template',

    events: {
      'click p': 'showPhoneNumber',
    },
    showPhoneNumber: function () {
      alert(this.model.escape('phoneNumber'));
    },
  });

  const alice = new myApp.Contact({
    firstName: 'Alice',
    lastName: 'Doe',
  });

  const aliceView = new myApp.ContactView({
    model: alice,
  });

  myApp.addRegions({
    mainRegion: '#main-region',
  });

  myApp.mainRegion.show(aliceView);

  myApp.start();
});
