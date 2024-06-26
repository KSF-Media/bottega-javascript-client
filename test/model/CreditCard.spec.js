/**
 * Bottega
 * KSF Media's orders service
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Bottega);
  }
}(this, function(expect, Bottega) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Bottega.CreditCard();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreditCard', function() {
    it('should create an instance of CreditCard', function() {
      // uncomment below and update the code to test CreditCard
      //var instance = new Bottega.CreditCard();
      //expect(instance).to.be.a(Bottega.CreditCard);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Bottega.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new Bottega.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instance = new Bottega.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodId (base name: "paymentMethodId")', function() {
      // uncomment below and update the code to test the property paymentMethodId
      //var instance = new Bottega.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property maskedPan (base name: "maskedPan")', function() {
      // uncomment below and update the code to test the property maskedPan
      //var instance = new Bottega.CreditCard();
      //expect(instance).to.be();
    });

    it('should have the property expiryDate (base name: "expiryDate")', function() {
      // uncomment below and update the code to test the property expiryDate
      //var instance = new Bottega.CreditCard();
      //expect(instance).to.be();
    });

  });

}));
