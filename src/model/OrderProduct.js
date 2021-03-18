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
    root.Bottega.OrderProduct = factory(root.Bottega.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OrderProduct model module.
   * @module model/OrderProduct
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderProduct</code>.
   * @alias module:model/OrderProduct
   * @class
   * @param packageId {String} 
   */
  var exports = function(packageId) {
    var _this = this;

    _this['packageId'] = packageId;
  };

  /**
   * Constructs a <code>OrderProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderProduct} obj Optional instance to populate.
   * @return {module:model/OrderProduct} The populated <code>OrderProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('packageId')) {
        obj['packageId'] = ApiClient.convertToType(data['packageId'], 'String');
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'Number');
      }
      if (data.hasOwnProperty('payAmountCents')) {
        obj['payAmountCents'] = ApiClient.convertToType(data['payAmountCents'], 'Number');
      }
      if (data.hasOwnProperty('campaignNo')) {
        obj['campaignNo'] = ApiClient.convertToType(data['campaignNo'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} packageId
   */
  exports.prototype['packageId'] = undefined;
  /**
   * @member {Number} period
   */
  exports.prototype['period'] = undefined;
  /**
   * @member {Number} payAmountCents
   */
  exports.prototype['payAmountCents'] = undefined;
  /**
   * @member {Number} campaignNo
   */
  exports.prototype['campaignNo'] = undefined;



  return exports;
}));

