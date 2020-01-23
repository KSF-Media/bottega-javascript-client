/**
 * Bottega
 * KSF Media's orders service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    instance = new Bottega.OrderStatus();
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

  describe('OrderStatus', function() {
    it('should create an instance of OrderStatus', function() {
      // uncomment below and update the code to test OrderStatus
      //var instane = new Bottega.OrderStatus();
      //expect(instance).to.be.a(Bottega.OrderStatus);
    });

    it('should have the property orderCreated (base name: "OrderCreated")', function() {
      // uncomment below and update the code to test the property orderCreated
      //var instane = new Bottega.OrderStatus();
      //expect(instance).to.be();
    });

    it('should have the property orderStarted (base name: "OrderStarted")', function() {
      // uncomment below and update the code to test the property orderStarted
      //var instane = new Bottega.OrderStatus();
      //expect(instance).to.be();
    });

    it('should have the property orderCompleted (base name: "OrderCompleted")', function() {
      // uncomment below and update the code to test the property orderCompleted
      //var instane = new Bottega.OrderStatus();
      //expect(instance).to.be();
    });

    it('should have the property orderFailed (base name: "OrderFailed")', function() {
      // uncomment below and update the code to test the property orderFailed
      //var instane = new Bottega.OrderStatus();
      //expect(instance).to.be();
    });

  });

}));
