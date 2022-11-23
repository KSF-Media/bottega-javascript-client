# bottega

Bottega - JavaScript client for bottega
KSF Media's orders service
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install bottega --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your bottega from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('bottega')` in javascript files from the directory you ran the last command above from.

### git

If the library is hosted at a git repository, e.g. https://github.com/KSF-Media/bottega-javascript-client
then install it via:

```shell
    npm install KSF-Media/bottega-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Bottega = require('bottega');


var api = new Bottega.OrdersApi()
var authorization = "authorization_example"; // {String} 
var body = "body_example"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.orderCallbackPost(authorization, body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://http:/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Bottega.OrdersApi* | [**orderCallbackPost**](docs/OrdersApi.md#orderCallbackPost) | **POST** /order/callback | 
*Bottega.OrdersApi* | [**orderConfirmationPost**](docs/OrdersApi.md#orderConfirmationPost) | **POST** /order/confirmation | 
*Bottega.OrdersApi* | [**orderGiftGiftCodeGet**](docs/OrdersApi.md#orderGiftGiftCodeGet) | **GET** /order/gift/{giftCode} | 
*Bottega.OrdersApi* | [**orderGiftGiftCodePut**](docs/OrdersApi.md#orderGiftGiftCodePut) | **PUT** /order/gift/{giftCode} | 
*Bottega.OrdersApi* | [**orderOrderNumberGet**](docs/OrdersApi.md#orderOrderNumberGet) | **GET** /order/{orderNumber} | 
*Bottega.OrdersApi* | [**orderOrderNumberPayPost**](docs/OrdersApi.md#orderOrderNumberPayPost) | **POST** /order/{orderNumber}/pay | 
*Bottega.OrdersApi* | [**orderPost**](docs/OrdersApi.md#orderPost) | **POST** /order | 
*Bottega.OrdersApi* | [**orderProcessOrderGet**](docs/OrdersApi.md#orderProcessOrderGet) | **GET** /order/processOrder | 
*Bottega.PackagesApi* | [**packageGet**](docs/PackagesApi.md#packageGet) | **GET** /package | Get all packages
*Bottega.PaymentMethodsApi* | [**paymentMethodCreditCardGet**](docs/PaymentMethodsApi.md#paymentMethodCreditCardGet) | **GET** /paymentMethod/creditCard | 
*Bottega.PaymentMethodsApi* | [**paymentMethodCreditCardIdDelete**](docs/PaymentMethodsApi.md#paymentMethodCreditCardIdDelete) | **DELETE** /paymentMethod/creditCard/{id} | 
*Bottega.PaymentMethodsApi* | [**paymentMethodCreditCardIdGet**](docs/PaymentMethodsApi.md#paymentMethodCreditCardIdGet) | **GET** /paymentMethod/creditCard/{id} | 
*Bottega.PaymentMethodsApi* | [**paymentMethodCreditCardIdRegisterNumberGet**](docs/PaymentMethodsApi.md#paymentMethodCreditCardIdRegisterNumberGet) | **GET** /paymentMethod/creditCard/{id}/register/{number} | 
*Bottega.PaymentMethodsApi* | [**paymentMethodCreditCardIdRegisterPost**](docs/PaymentMethodsApi.md#paymentMethodCreditCardIdRegisterPost) | **POST** /paymentMethod/creditCard/{id}/register | 
*Bottega.PaymentMethodsApi* | [**paymentMethodCreditCardRegisterPost**](docs/PaymentMethodsApi.md#paymentMethodCreditCardRegisterPost) | **POST** /paymentMethod/creditCard/register | 
*Bottega.PaymentMethodsApi* | [**paymentMethodCreditCardRegisterProcessGet**](docs/PaymentMethodsApi.md#paymentMethodCreditCardRegisterProcessGet) | **GET** /paymentMethod/creditCard/register/process | 


## Documentation for Models

 - [Bottega.ActiveDays](docs/ActiveDays.md)
 - [Bottega.CreditCard](docs/CreditCard.md)
 - [Bottega.CreditCardRegister](docs/CreditCardRegister.md)
 - [Bottega.CreditCardRegisterStatus](docs/CreditCardRegisterStatus.md)
 - [Bottega.ExternalOrderConfirmation](docs/ExternalOrderConfirmation.md)
 - [Bottega.Gift](docs/Gift.md)
 - [Bottega.InlineResponse400](docs/InlineResponse400.md)
 - [Bottega.InlineResponse400InvalidRequestBody](docs/InlineResponse400InvalidRequestBody.md)
 - [Bottega.InlineResponse415](docs/InlineResponse415.md)
 - [Bottega.InlineResponse415UnsupportedMediaType](docs/InlineResponse415UnsupportedMediaType.md)
 - [Bottega.ModelPackage](docs/ModelPackage.md)
 - [Bottega.Order](docs/Order.md)
 - [Bottega.OrderProduct](docs/OrderProduct.md)
 - [Bottega.OrderSource](docs/OrderSource.md)
 - [Bottega.OrderStatus](docs/OrderStatus.md)
 - [Bottega.PackageCampaign](docs/PackageCampaign.md)
 - [Bottega.PackageOffer](docs/PackageOffer.md)
 - [Bottega.Paper](docs/Paper.md)
 - [Bottega.PaymentOption](docs/PaymentOption.md)
 - [Bottega.PaymentTerminalUrl](docs/PaymentTerminalUrl.md)
 - [Bottega.Product](docs/Product.md)


## Documentation for Authorization

All endpoints do not require authorization.
