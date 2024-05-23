# Bottega.PaymentMethodsApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentMethodCreditCardGet**](PaymentMethodsApi.md#paymentMethodCreditCardGet) | **GET** /paymentMethod/creditCard | 
[**paymentMethodCreditCardIdDelete**](PaymentMethodsApi.md#paymentMethodCreditCardIdDelete) | **DELETE** /paymentMethod/creditCard/{id} | 
[**paymentMethodCreditCardIdGet**](PaymentMethodsApi.md#paymentMethodCreditCardIdGet) | **GET** /paymentMethod/creditCard/{id} | 
[**paymentMethodCreditCardIdRegisterNumberGet**](PaymentMethodsApi.md#paymentMethodCreditCardIdRegisterNumberGet) | **GET** /paymentMethod/creditCard/{id}/register/{number} | 
[**paymentMethodCreditCardIdRegisterPost**](PaymentMethodsApi.md#paymentMethodCreditCardIdRegisterPost) | **POST** /paymentMethod/creditCard/{id}/register | 
[**paymentMethodCreditCardRegisterPost**](PaymentMethodsApi.md#paymentMethodCreditCardRegisterPost) | **POST** /paymentMethod/creditCard/register | 
[**paymentMethodCreditCardRegisterProcessGet**](PaymentMethodsApi.md#paymentMethodCreditCardRegisterProcessGet) | **GET** /paymentMethod/creditCard/register/process | 
[**paymentMethodCreditCardSubscriptionSubsnoRegisterPost**](PaymentMethodsApi.md#paymentMethodCreditCardSubscriptionSubsnoRegisterPost) | **POST** /paymentMethod/creditCard/subscription/{subsno}/register | 



## paymentMethodCreditCardGet

> [CreditCard] paymentMethodCreditCardGet(opts)



Get credit cards of user

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PaymentMethodsApi();
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentMethodCreditCardGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**[CreditCard]**](CreditCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## paymentMethodCreditCardIdDelete

> [Object] paymentMethodCreditCardIdDelete(id, opts)



Delete a credit card

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PaymentMethodsApi();
var id = 56; // Number | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example", // String | 
  'provider': "provider_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentMethodCreditCardIdDelete(id, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **provider** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## paymentMethodCreditCardIdGet

> CreditCard paymentMethodCreditCardIdGet(id, opts)



Get a credit card

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PaymentMethodsApi();
var id = 56; // Number | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentMethodCreditCardIdGet(id, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**CreditCard**](CreditCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## paymentMethodCreditCardIdRegisterNumberGet

> CreditCardRegister paymentMethodCreditCardIdRegisterNumberGet(id, _number, opts)



Retrieve the status of a register operation for a credit card

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PaymentMethodsApi();
var id = 56; // Number | 
var _number = "_number_example"; // String | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentMethodCreditCardIdRegisterNumberGet(id, _number, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **_number** | **String**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**CreditCardRegister**](CreditCardRegister.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## paymentMethodCreditCardIdRegisterPost

> CreditCardRegister paymentMethodCreditCardIdRegisterPost(id, opts)



Register a credit card with payment provider, to replace an existing card

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PaymentMethodsApi();
var id = 56; // Number | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example", // String | 
  'provider': "provider_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentMethodCreditCardIdRegisterPost(id, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **provider** | **String**|  | [optional] 

### Return type

[**CreditCardRegister**](CreditCardRegister.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## paymentMethodCreditCardRegisterPost

> CreditCardRegister paymentMethodCreditCardRegisterPost(opts)



Register a credit card with payment provider

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PaymentMethodsApi();
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentMethodCreditCardRegisterPost(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**CreditCardRegister**](CreditCardRegister.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## paymentMethodCreditCardRegisterProcessGet

> String paymentMethodCreditCardRegisterProcessGet(opts)



Callback for processing a registered credit card

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PaymentMethodsApi();
var opts = {
  'transactionId': "transactionId_example", // String | 
  'responseCode': "responseCode_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentMethodCreditCardRegisterProcessGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**|  | [optional] 
 **responseCode** | **String**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html;charset=utf-8


## paymentMethodCreditCardSubscriptionSubsnoRegisterPost

> CreditCardRegister paymentMethodCreditCardSubscriptionSubsnoRegisterPost(subsno, opts)



Register a credit card with payment provider, to replace a card on a subscription

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PaymentMethodsApi();
var subsno = 56; // Number | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example", // String | 
  'callback': "callback_example", // String | 
  'provider': "provider_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentMethodCreditCardSubscriptionSubsnoRegisterPost(subsno, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subsno** | **Number**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **callback** | **String**|  | [optional] 
 **provider** | **String**|  | [optional] 

### Return type

[**CreditCardRegister**](CreditCardRegister.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

