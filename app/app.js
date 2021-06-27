const Backbone = require('backbone');
const $ = require('jquery-untouched');
Backbone.$ = $;

const Mn = require('backbone.marionette');
// mn.$ = Backbone.$;
$(document).ready(() => {
  const myApp = new Mn.Application();
  myApp.on('before:start', function () {
    console.log('my app started');
  });
  console.log('init');

  myApp.on('start', function (opt) {
    console.log('on start');
  });

  var RootView = Mn.LayoutView.extend({
    el: 'body',
  });

  myApp.addRegions({
    mainRegion: '#main-region',
  });

  myApp.rootView = new RootView();
  myApp.StaticView = Mn.ItemView.extend({
    template: '#static-template',
  });

  // myApp.on('initialize:after', function () {
  console.log('init after');
  const staticView = new myApp.StaticView();
  console.log('staticView', staticView);
  myApp.mainRegion.show(staticView);
  // });

  myApp.start();
});
