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
    instance = new Bottega.PaymentMethodsApi();
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

  describe('PaymentMethodsApi', function() {
    describe('paymentMethodCreditCardGet', function() {
      it('should call paymentMethodCreditCardGet successfully', function(done) {
        //uncomment below and update the code to test paymentMethodCreditCardGet
        //instance.paymentMethodCreditCardGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodCreditCardIdDelete', function() {
      it('should call paymentMethodCreditCardIdDelete successfully', function(done) {
        //uncomment below and update the code to test paymentMethodCreditCardIdDelete
        //instance.paymentMethodCreditCardIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodCreditCardIdGet', function() {
      it('should call paymentMethodCreditCardIdGet successfully', function(done) {
        //uncomment below and update the code to test paymentMethodCreditCardIdGet
        //instance.paymentMethodCreditCardIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodCreditCardIdRegisterNumberGet', function() {
      it('should call paymentMethodCreditCardIdRegisterNumberGet successfully', function(done) {
        //uncomment below and update the code to test paymentMethodCreditCardIdRegisterNumberGet
        //instance.paymentMethodCreditCardIdRegisterNumberGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodCreditCardIdRegisterPost', function() {
      it('should call paymentMethodCreditCardIdRegisterPost successfully', function(done) {
        //uncomment below and update the code to test paymentMethodCreditCardIdRegisterPost
        //instance.paymentMethodCreditCardIdRegisterPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodCreditCardIdSubscriptionPut', function() {
      it('should call paymentMethodCreditCardIdSubscriptionPut successfully', function(done) {
        //uncomment below and update the code to test paymentMethodCreditCardIdSubscriptionPut
        //instance.paymentMethodCreditCardIdSubscriptionPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodCreditCardRegisterPost', function() {
      it('should call paymentMethodCreditCardRegisterPost successfully', function(done) {
        //uncomment below and update the code to test paymentMethodCreditCardRegisterPost
        //instance.paymentMethodCreditCardRegisterPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodCreditCardRegisterProcessGet', function() {
      it('should call paymentMethodCreditCardRegisterProcessGet successfully', function(done) {
        //uncomment below and update the code to test paymentMethodCreditCardRegisterProcessGet
        //instance.paymentMethodCreditCardRegisterProcessGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
