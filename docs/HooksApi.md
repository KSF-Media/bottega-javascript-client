# Bottega.HooksApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hooksKayakPost**](HooksApi.md#hooksKayakPost) | **POST** /hooks/kayak | 



## hooksKayakPost

> hooksKayakPost(body)



Kayak webhook

### Example

```javascript
var Bottega = require('bottega');

var apiInstance = new Bottega.HooksApi();
var body = new Bottega.KayakWebhookEvent(); // KayakWebhookEvent | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.hooksKayakPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KayakWebhookEvent**](KayakWebhookEvent.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: Not defined

