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
    root.Bottega.KlarnaAddress = factory(root.Bottega.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The KlarnaAddress model module.
   * @module model/KlarnaAddress
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>KlarnaAddress</code>.
   * @alias module:model/KlarnaAddress
   * @class
   * @param givenName {String} 
   * @param familyName {String} 
   * @param email {String} 
   * @param streetAddress {String} 
   * @param streetAddress2 {String} 
   * @param postalCode {String} 
   * @param city {String} 
   * @param phone {String} 
   * @param country {String} 
   */
  var exports = function(givenName, familyName, email, streetAddress, streetAddress2, postalCode, city, phone, country) {
    var _this = this;

    _this['givenName'] = givenName;
    _this['familyName'] = familyName;
    _this['email'] = email;
    _this['streetAddress'] = streetAddress;
    _this['streetAddress2'] = streetAddress2;
    _this['postalCode'] = postalCode;
    _this['city'] = city;
    _this['phone'] = phone;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>KlarnaAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KlarnaAddress} obj Optional instance to populate.
   * @return {module:model/KlarnaAddress} The populated <code>KlarnaAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('givenName')) {
        obj['givenName'] = ApiClient.convertToType(data['givenName'], 'String');
      }
      if (data.hasOwnProperty('familyName')) {
        obj['familyName'] = ApiClient.convertToType(data['familyName'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('streetAddress')) {
        obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], 'String');
      }
      if (data.hasOwnProperty('streetAddress2')) {
        obj['streetAddress2'] = ApiClient.convertToType(data['streetAddress2'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} givenName
   */
  exports.prototype['givenName'] = undefined;
  /**
   * @member {String} familyName
   */
  exports.prototype['familyName'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} streetAddress
   */
  exports.prototype['streetAddress'] = undefined;
  /**
   * @member {String} streetAddress2
   */
  exports.prototype['streetAddress2'] = undefined;
  /**
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));

