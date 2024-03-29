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
    define(['ApiClient', 'model/KayakWebhookEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/KayakWebhookEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.Bottega) {
      root.Bottega = {};
    }
    root.Bottega.HooksApi = factory(root.Bottega.ApiClient, root.Bottega.KayakWebhookEvent);
  }
}(this, function(ApiClient, KayakWebhookEvent) {
  'use strict';

  /**
   * Hooks service.
   * @module api/HooksApi
   * @version 1.0.0
   */

  /**
   * Constructs a new HooksApi. 
   * @alias module:api/HooksApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the hooksKayakPost operation.
     * @callback module:api/HooksApi~hooksKayakPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Kayak webhook
     * @param {module:model/KayakWebhookEvent} body 
     * @param {module:api/HooksApi~hooksKayakPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.hooksKayakPost = function(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling hooksKayakPost");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/hooks/kayak', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
