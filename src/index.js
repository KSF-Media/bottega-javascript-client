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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActiveDays', 'model/CreditCard', 'model/CreditCardRegister', 'model/CreditCardRegisterStatus', 'model/InlineResponse400', 'model/InlineResponse400InvalidRequestBody', 'model/InlineResponse415', 'model/InlineResponse415UnsupportedMediaType', 'model/ModelPackage', 'model/Order', 'model/OrderProduct', 'model/OrderStatus', 'model/PackageCampaign', 'model/PackageOffer', 'model/Paper', 'model/PaymentOption', 'model/PaymentTerminalUrl', 'model/Product', 'api/OrdersApi', 'api/PackagesApi', 'api/PaymentMethodsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ActiveDays'), require('./model/CreditCard'), require('./model/CreditCardRegister'), require('./model/CreditCardRegisterStatus'), require('./model/InlineResponse400'), require('./model/InlineResponse400InvalidRequestBody'), require('./model/InlineResponse415'), require('./model/InlineResponse415UnsupportedMediaType'), require('./model/ModelPackage'), require('./model/Order'), require('./model/OrderProduct'), require('./model/OrderStatus'), require('./model/PackageCampaign'), require('./model/PackageOffer'), require('./model/Paper'), require('./model/PaymentOption'), require('./model/PaymentTerminalUrl'), require('./model/Product'), require('./api/OrdersApi'), require('./api/PackagesApi'), require('./api/PaymentMethodsApi'));
  }
}(function(ApiClient, ActiveDays, CreditCard, CreditCardRegister, CreditCardRegisterStatus, InlineResponse400, InlineResponse400InvalidRequestBody, InlineResponse415, InlineResponse415UnsupportedMediaType, ModelPackage, Order, OrderProduct, OrderStatus, PackageCampaign, PackageOffer, Paper, PaymentOption, PaymentTerminalUrl, Product, OrdersApi, PackagesApi, PaymentMethodsApi) {
  'use strict';

  /**
   * KSF_Medias_orders_service.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Bottega = require('index'); // See note below*.
   * var xxxSvc = new Bottega.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Bottega.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Bottega.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Bottega.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ActiveDays model constructor.
     * @property {module:model/ActiveDays}
     */
    ActiveDays: ActiveDays,
    /**
     * The CreditCard model constructor.
     * @property {module:model/CreditCard}
     */
    CreditCard: CreditCard,
    /**
     * The CreditCardRegister model constructor.
     * @property {module:model/CreditCardRegister}
     */
    CreditCardRegister: CreditCardRegister,
    /**
     * The CreditCardRegisterStatus model constructor.
     * @property {module:model/CreditCardRegisterStatus}
     */
    CreditCardRegisterStatus: CreditCardRegisterStatus,
    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400: InlineResponse400,
    /**
     * The InlineResponse400InvalidRequestBody model constructor.
     * @property {module:model/InlineResponse400InvalidRequestBody}
     */
    InlineResponse400InvalidRequestBody: InlineResponse400InvalidRequestBody,
    /**
     * The InlineResponse415 model constructor.
     * @property {module:model/InlineResponse415}
     */
    InlineResponse415: InlineResponse415,
    /**
     * The InlineResponse415UnsupportedMediaType model constructor.
     * @property {module:model/InlineResponse415UnsupportedMediaType}
     */
    InlineResponse415UnsupportedMediaType: InlineResponse415UnsupportedMediaType,
    /**
     * The ModelPackage model constructor.
     * @property {module:model/ModelPackage}
     */
    ModelPackage: ModelPackage,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderProduct model constructor.
     * @property {module:model/OrderProduct}
     */
    OrderProduct: OrderProduct,
    /**
     * The OrderStatus model constructor.
     * @property {module:model/OrderStatus}
     */
    OrderStatus: OrderStatus,
    /**
     * The PackageCampaign model constructor.
     * @property {module:model/PackageCampaign}
     */
    PackageCampaign: PackageCampaign,
    /**
     * The PackageOffer model constructor.
     * @property {module:model/PackageOffer}
     */
    PackageOffer: PackageOffer,
    /**
     * The Paper model constructor.
     * @property {module:model/Paper}
     */
    Paper: Paper,
    /**
     * The PaymentOption model constructor.
     * @property {module:model/PaymentOption}
     */
    PaymentOption: PaymentOption,
    /**
     * The PaymentTerminalUrl model constructor.
     * @property {module:model/PaymentTerminalUrl}
     */
    PaymentTerminalUrl: PaymentTerminalUrl,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The OrdersApi service constructor.
     * @property {module:api/OrdersApi}
     */
    OrdersApi: OrdersApi,
    /**
     * The PackagesApi service constructor.
     * @property {module:api/PackagesApi}
     */
    PackagesApi: PackagesApi,
    /**
     * The PaymentMethodsApi service constructor.
     * @property {module:api/PaymentMethodsApi}
     */
    PaymentMethodsApi: PaymentMethodsApi
  };

  return exports;
}));
