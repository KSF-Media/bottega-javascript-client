# Bottega.PackagesApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**packageGet**](PackagesApi.md#packageGet) | **GET** /package | Get all packages



## packageGet

> [ModelPackage] packageGet()

Get all packages

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.PackagesApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.packageGet(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ModelPackage]**](ModelPackage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

