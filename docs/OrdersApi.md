# Bottega.OrdersApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderOrderNumberGet**](OrdersApi.md#orderOrderNumberGet) | **GET** /order/{orderNumber} | 
[**orderOrderNumberPayPost**](OrdersApi.md#orderOrderNumberPayPost) | **POST** /order/{orderNumber}/pay | 
[**orderPost**](OrdersApi.md#orderPost) | **POST** /order | 
[**orderProcessOrderGet**](OrdersApi.md#orderProcessOrderGet) | **GET** /order/processOrder | 



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


## orderOrderNumberPayPost

> PaymentTerminalUrl orderOrderNumberPayPost(orderNumber, body, opts)



Pay for an Order, marking it as ready for processing

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.OrdersApi();
var orderNumber = "orderNumber_example"; // String | 
var body = new Bottega.PaymentOption(); // PaymentOption | 
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
 **body** | [**PaymentOption**](PaymentOption.md)|  | 
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
var body = new Bottega.BuyingOption(); // BuyingOption | 
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
 **body** | [**BuyingOption**](BuyingOption.md)|  | 
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

