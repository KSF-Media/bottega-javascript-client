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
    define(['ApiClient', 'model/KlarnaAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KlarnaAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.Bottega) {
      root.Bottega = {};
    }
    root.Bottega.KlarnaConfirmPayment = factory(root.Bottega.ApiClient, root.Bottega.KlarnaAddress);
  }
}(this, function(ApiClient, KlarnaAddress) {
  'use strict';



  /**
   * The KlarnaConfirmPayment model module.
   * @module model/KlarnaConfirmPayment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>KlarnaConfirmPayment</code>.
   * @alias module:model/KlarnaConfirmPayment
   * @class
   * @param packageId {String} 
   * @param campaignNo {Number} 
   * @param countryCode {String} 
   * @param authToken {String} 
   * @param address {module:model/KlarnaAddress} 
   */
  var exports = function(packageId, campaignNo, countryCode, authToken, address) {
    var _this = this;

    _this['packageId'] = packageId;
    _this['campaignNo'] = campaignNo;
    _this['countryCode'] = countryCode;
    _this['authToken'] = authToken;
    _this['address'] = address;
  };

  /**
   * Constructs a <code>KlarnaConfirmPayment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KlarnaConfirmPayment} obj Optional instance to populate.
   * @return {module:model/KlarnaConfirmPayment} The populated <code>KlarnaConfirmPayment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('packageId')) {
        obj['packageId'] = ApiClient.convertToType(data['packageId'], 'String');
      }
      if (data.hasOwnProperty('campaignNo')) {
        obj['campaignNo'] = ApiClient.convertToType(data['campaignNo'], 'Number');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('authToken')) {
        obj['authToken'] = ApiClient.convertToType(data['authToken'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = KlarnaAddress.constructFromObject(data['address']);
      }
    }
    return obj;
  }

  /**
   * @member {String} packageId
   */
  exports.prototype['packageId'] = undefined;
  /**
   * @member {Number} campaignNo
   */
  exports.prototype['campaignNo'] = undefined;
  /**
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * @member {String} authToken
   */
  exports.prototype['authToken'] = undefined;
  /**
   * @member {module:model/KlarnaAddress} address
   */
  exports.prototype['address'] = undefined;



  return exports;
}));


