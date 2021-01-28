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
    define(['ApiClient', 'model/InlineResponse400', 'model/InlineResponse415', 'model/Order', 'model/OrderProduct', 'model/PaymentOption', 'model/PaymentTerminalUrl'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse400'), require('../model/InlineResponse415'), require('../model/Order'), require('../model/OrderProduct'), require('../model/PaymentOption'), require('../model/PaymentTerminalUrl'));
  } else {
    // Browser globals (root is window)
    if (!root.Bottega) {
      root.Bottega = {};
    }
    root.Bottega.OrdersApi = factory(root.Bottega.ApiClient, root.Bottega.InlineResponse400, root.Bottega.InlineResponse415, root.Bottega.Order, root.Bottega.OrderProduct, root.Bottega.PaymentOption, root.Bottega.PaymentTerminalUrl);
  }
}(this, function(ApiClient, InlineResponse400, InlineResponse415, Order, OrderProduct, PaymentOption, PaymentTerminalUrl) {
  'use strict';

  /**
   * Orders service.
   * @module api/OrdersApi
   * @version 1.0.0
   */

  /**
   * Constructs a new OrdersApi. 
   * @alias module:api/OrdersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the orderOrderNumberGet operation.
     * @callback module:api/OrdersApi~orderOrderNumberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch order by UUID
     * @param {String} orderNumber 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/OrdersApi~orderOrderNumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.orderOrderNumberGet = function(orderNumber, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'orderNumber' is set
      if (orderNumber === undefined || orderNumber === null) {
        throw new Error("Missing the required parameter 'orderNumber' when calling orderOrderNumberGet");
      }

      var pathParams = {
        'orderNumber': orderNumber
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'AuthUser': opts['authUser'],
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Order;
      return this.apiClient.callApi(
        '/order/{orderNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the orderOrderNumberPayPost operation.
     * @callback module:api/OrdersApi~orderOrderNumberPayPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentTerminalUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pay for an Order, marking it as ready for processing
     * @param {String} orderNumber 
     * @param {module:model/PaymentOption} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/OrdersApi~orderOrderNumberPayPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentTerminalUrl}
     */
    this.orderOrderNumberPayPost = function(orderNumber, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'orderNumber' is set
      if (orderNumber === undefined || orderNumber === null) {
        throw new Error("Missing the required parameter 'orderNumber' when calling orderOrderNumberPayPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling orderOrderNumberPayPost");
      }

      var pathParams = {
        'orderNumber': orderNumber
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'AuthUser': opts['authUser'],
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PaymentTerminalUrl;
      return this.apiClient.callApi(
        '/order/{orderNumber}/pay', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the orderPost operation.
     * @callback module:api/OrdersApi~orderPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Order
     * @param {module:model/OrderProduct} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/OrdersApi~orderPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.orderPost = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling orderPost");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'AuthUser': opts['authUser'],
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Order;
      return this.apiClient.callApi(
        '/order', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the orderProcessOrderGet operation.
     * @callback module:api/OrdersApi~orderProcessOrderGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Handles Nets payment response
     * @param {Object} opts Optional parameters
     * @param {String} opts.transactionId 
     * @param {String} opts.responseCode 
     * @param {module:api/OrdersApi~orderProcessOrderGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    this.orderProcessOrderGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'transactionId': opts['transactionId'],
        'responseCode': opts['responseCode'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html;charset=utf-8'];
      var returnType = 'String';
      return this.apiClient.callApi(
        '/order/processOrder', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
