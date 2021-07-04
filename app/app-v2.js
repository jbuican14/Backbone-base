const Backbone = require('backbone');
const $ = (jQuery = require('jquery-untouched'));
Backbone.$ = $;
const _ = require('underscore');
const Mn = require('backbone.marionette');
Mn.$ = Backbone.$;
const ContactApp = require('../assets/js/entities/contact');

// ContactApp.Entities.ContactCollection([
//   {
//     firstName: 'Bob',
//     lastName: 'Brigham',
//     phoneNumber: '555-0163',
//   },
//   {
//     firstName: 'Alice',
//     lastName: 'Arten',
//     phoneNumber: '555-0184',
//   },
//   {
//     firstName: 'Charlie',
//     lastName: 'Campbell',
//     phoneNumber: '555-0129',
//   },
// ]);
console.log(contactApp);
contactApp.ContactItemView = Mn.ItemView.extend({
  tagName: 'li',
  template: '#contact-list-item',
});

contactApp.ContactsView = Mn.CollectionView.extend({
  tagName: 'ul',
  // itemView: contactApp.ContactItemView,
  childView: contactApp.ContactItemView,
});

contactApp.Entities.ContactCollection1();

const contacts = contactApp.request('contact:entities');

const contactsListView = new contactApp.ContactsView({
  collection: contacts,
});

contactApp.addRegions({
  mainRegion: '#main-region',
});

contactApp.mainRegion.show(contactsListView);
contactApp.start();
