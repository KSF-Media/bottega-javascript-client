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
    instance = new Bottega.PackageCampaign();
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

  describe('PackageCampaign', function() {
    it('should create an instance of PackageCampaign', function() {
      // uncomment below and update the code to test PackageCampaign
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be.a(Bottega.PackageCampaign);
    });

    it('should have the property no (base name: "no")', function() {
      // uncomment below and update the code to test the property no
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be();
    });

    it('should have the property priceEur (base name: "priceEur")', function() {
      // uncomment below and update the code to test the property priceEur
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function() {
      // uncomment below and update the code to test the property length
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be();
    });

    it('should have the property lengthUnit (base name: "lengthUnit")', function() {
      // uncomment below and update the code to test the property lengthUnit
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be();
    });

    it('should have the property startDay (base name: "startDay")', function() {
      // uncomment below and update the code to test the property startDay
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be();
    });

    it('should have the property endDay (base name: "endDay")', function() {
      // uncomment below and update the code to test the property endDay
      //var instance = new Bottega.PackageCampaign();
      //expect(instance).to.be();
    });

  });

}));
