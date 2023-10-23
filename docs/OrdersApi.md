# Bottega.OrdersApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderCallbackPost**](OrdersApi.md#orderCallbackPost) | **POST** /order/callback | 
[**orderGiftGiftCodeGet**](OrdersApi.md#orderGiftGiftCodeGet) | **GET** /order/gift/{giftCode} | 
[**orderGiftGiftCodePut**](OrdersApi.md#orderGiftGiftCodePut) | **PUT** /order/gift/{giftCode} | 
[**orderInitKlarnaPost**](OrdersApi.md#orderInitKlarnaPost) | **POST** /order/initKlarna | 
[**orderOrderNumberGet**](OrdersApi.md#orderOrderNumberGet) | **GET** /order/{orderNumber} | 
[**orderOrderNumberIdentifiedGet**](OrdersApi.md#orderOrderNumberIdentifiedGet) | **GET** /order/{orderNumber}/identified | 
[**orderOrderNumberPayPost**](OrdersApi.md#orderOrderNumberPayPost) | **POST** /order/{orderNumber}/pay | 
[**orderPost**](OrdersApi.md#orderPost) | **POST** /order | 
[**orderProcessOrderGet**](OrdersApi.md#orderProcessOrderGet) | **GET** /order/processOrder | 



## orderCallbackPost

> orderCallbackPost(authorization, body)



Handles Nets server side transaction callback

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var authorization = "authorization_example"; // String | 
var body = "body_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderCallbackPost(authorization, body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: Not defined


## orderGiftGiftCodeGet

> Gift orderGiftGiftCodeGet(giftCode)



Query a gift code

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var giftCode = "giftCode_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderGiftGiftCodeGet(giftCode, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftCode** | **String**|  | 

### Return type

[**Gift**](Gift.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## orderGiftGiftCodePut

> orderGiftGiftCodePut(giftCode, opts)



Redeem a gift code to get subscription

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var giftCode = "giftCode_example"; // String | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderGiftGiftCodePut(giftCode, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftCode** | **String**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## orderInitKlarnaPost

> KlarnaInitResponse orderInitKlarnaPost(body)



Initialize a Klarna payment

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var body = new Bottega.KlarnaOrderProduct(); // KlarnaOrderProduct | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orderInitKlarnaPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KlarnaOrderProduct**](KlarnaOrderProduct.md)|  | 

### Return type

[**KlarnaInitResponse**](KlarnaInitResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## orderOrderNumberGet

> Order orderOrderNumberGet(orderNumber, opts)



Fetch order by UUID

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var orderNumber = "orderNumber_example"; // String | 
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
apiInstance.orderOrderNumberGet(orderNumber, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNumber** | **String**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## orderOrderNumberIdentifiedGet

> orderOrderNumberIdentifiedGet(orderNumber, opts)



Let order proceed after customer identity verification

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var orderNumber = "orderNumber_example"; // String | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderOrderNumberIdentifiedGet(orderNumber, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNumber** | **String**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## orderOrderNumberPayPost

> PaymentTerminalUrl orderOrderNumberPayPost(orderNumber, body, opts)



Pay for an Order, marking it as ready for processing

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var orderNumber = "orderNumber_example"; // String | 
var body = new Bottega.PayOrderRequest(); // PayOrderRequest | 
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
apiInstance.orderOrderNumberPayPost(orderNumber, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNumber** | **String**|  | 
 **body** | [**PayOrderRequest**](PayOrderRequest.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**PaymentTerminalUrl**](PaymentTerminalUrl.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## orderPost

> Order orderPost(body, opts)



Create a new Order

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var body = new Bottega.OrderProduct(); // OrderProduct | 
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
apiInstance.orderPost(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderProduct**](OrderProduct.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## orderProcessOrderGet

> String orderProcessOrderGet(opts)



Handles Nets payment response

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
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
apiInstance.orderProcessOrderGet(opts, callback);
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

