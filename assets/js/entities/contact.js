const Backbone = require('backbone');
const $ = (jQuery = require('jquery-untouched'));
Backbone.$ = $;
const _ = require('underscore');
const Mn = require('backbone.marionette');
Mn.$ = Backbone.$;

contactApp = new Mn.Application();

contactApp.module(
  'Entities',
  function (Entities, contactApp, Backbone, Mn, $, _) {
    let contacts;
    const initContacts = function () {
      contacts = new Entities.ContactCollection([
        {
          id: 1,
          firstName: 'Alice',
          lastName: 'Arten',
          phoneNumber: '555-0184',
        },
      ]);
    };

    const API = {
      getContactEntities: function () {
        if (contacts === undefined) {
          initContacts();
        }
        return contacts;
      },
    };
    Entities.Contact = Backbone.Model.extend({});

    Entities.ContactCollection = Backbone.Collection.extend({
      model: Entities.Contact,
      comparator: 'firstName',
    });
    Entities.ContactCollection1 = function () {
      console.log('ContactCollection1');
    };

    contactApp.reqres.setHandler('contact:entities', function () {
      return API.getContactEntities();
    });
  }
);

module.exports = contactApp;
