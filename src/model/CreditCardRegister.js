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
    define(['ApiClient', 'model/CreditCardRegisterStatus', 'model/PaymentTerminalUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreditCardRegisterStatus'), require('./PaymentTerminalUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.Bottega) {
      root.Bottega = {};
    }
    root.Bottega.CreditCardRegister = factory(root.Bottega.ApiClient, root.Bottega.CreditCardRegisterStatus, root.Bottega.PaymentTerminalUrl);
  }
}(this, function(ApiClient, CreditCardRegisterStatus, PaymentTerminalUrl) {
  'use strict';



  /**
   * The CreditCardRegister model module.
   * @module model/CreditCardRegister
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreditCardRegister</code>.
   * @alias module:model/CreditCardRegister
   * @class
   * @param _number {String} 
   * @param user {String} 
   * @param status {module:model/CreditCardRegisterStatus} 
   */
  var exports = function(_number, user, status) {
    var _this = this;

    _this['number'] = _number;
    _this['user'] = user;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>CreditCardRegister</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditCardRegister} obj Optional instance to populate.
   * @return {module:model/CreditCardRegister} The populated <code>CreditCardRegister</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('paymentTerminalUrl')) {
        obj['paymentTerminalUrl'] = PaymentTerminalUrl.constructFromObject(data['paymentTerminalUrl']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = CreditCardRegisterStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/PaymentTerminalUrl} paymentTerminalUrl
   */
  exports.prototype['paymentTerminalUrl'] = undefined;
  /**
   * @member {module:model/CreditCardRegisterStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


