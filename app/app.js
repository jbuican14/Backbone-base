const Backbone = require('backbone');
const $ = (jQuery = require('jquery-untouched'));
Backbone.$ = $;
require('bootstrap');

const Mn = require('backbone.marionette');
Mn.$ = Backbone.$;

// START APP
const myApp = new Mn.Application();

// CREATE MODEL
myApp.Contact = Backbone.Model.extend({
  defaults: {
    firstName: 'Default Name',
    phoneNumber: 'No phone number!',
  },
});

// CREATE COLLECTION
myApp.ContactCollection = Backbone.Collection.extend({
  model: myApp.Contact,
  // comparator: 'firstName',
  comparator: function (contact) {
    return contact.get('firstName') + ' ' + contact.get('lastName');
  },
});

// *** display
// CREATE ITEM VIEW
myApp.ContactItemView = Mn.ItemView.extend({
  template: '#contact-list-item',
  tagName: 'li',
});

// CREATE COLLECTION VIEW
// Specify childView instead of itemView:
myApp.ContactsView = Mn.CollectionView.extend({
  tagName: 'ul',
  // itemView: myApp.ContactItemView,
  childView: myApp.ContactItemView,
});

// start contact myApp instant
const contacts = new myApp.ContactCollection([
  {
    firstName: 'Bob',
    lastName: 'Brigham',
    phoneNumber: '555-0163',
  },
  {
    firstName: 'Alice',
    lastName: 'Arten',
    phoneNumber: '555-0184',
  },
  {
    firstName: 'Alice',
    lastName: 'Apple',
    phoneNumber: '555-0184',
  },
  {
    firstName: 'Alice',
    lastName: 'AAA',
    phoneNumber: '1234-0184',
  },
  {
    firstName: 'Charlie',
    lastName: 'Campbell',
    phoneNumber: '555-0129',
  },
]);

const contactsListView = new myApp.ContactsView({
  collection: contacts,
});

myApp.addRegions({
  mainRegion: '#main-region',
});

myApp.mainRegion.show(contactsListView);
myApp.start();
