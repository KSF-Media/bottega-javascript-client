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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Bottega) {
      root.Bottega = {};
    }
    root.Bottega.PaymentOption = factory(root.Bottega.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class PaymentOption.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Bill"
     * @const
     */
    "Bill": "Bill",
    /**
     * value: "CreditCard"
     * @const
     */
    "CreditCard": "CreditCard",
    /**
     * value: "BankPayment"
     * @const
     */
    "BankPayment": "BankPayment"  };

  /**
   * Returns a <code>PaymentOption</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/PaymentOption} The enum <code>PaymentOption</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


