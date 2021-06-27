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
    },
  });

  myApp.ContactView = Mn.ItemView.extend({
    template: '#contact-template',
  });

  const alice = new myApp.Contact({
    // firstName: 'Alice',
    lastName: 'Doe',
    phoneNumber: '111-11111',
  });

  const aliceView = new myApp.ContactView({
    model: alice,
  });

  myApp.addRegions({
    mainRegion: '#main-region',
  });

  myApp.mainRegion.show(aliceView);

  // var RootView = Mn.LayoutView.extend({
  //   el: 'body',
  // });

  // myApp.addRegions({
  //   mainRegion: '#main-region',
  // });

  // myApp.rootView = new RootView();

  // myApp.StaticView = Mn.ItemView.extend({
  //   id: 'static-view',
  //   tagName: 'ul',
  //   className: 'instruction',
  //   template: '#list-item-template',
  // });

  // // myApp.on('initialize:after', function () {

  // const staticView = new myApp.StaticView();
  // myApp.mainRegion.show(staticView);
  // // });

  myApp.start();
});
