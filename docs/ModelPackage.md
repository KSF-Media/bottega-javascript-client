# Bottega.ModelPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Package identifier | 
**name** | **String** | Package name | 
**paper** | [**Paper**](Paper.md) |  | 
**digitalOnly** | **Boolean** | All products in this package are digital | 
**products** | [**[Product]**](Product.md) | The Products contained in a package | 
**offers** | [**[PackageOffer]**](PackageOffer.md) | Offers for the package | 
**campaigns** | [**[PackageCampaign]**](PackageCampaign.md) | Active campaigns for the package | 
**nextDelivery** | **Date** |  | [optional] 
**canPause** | **Boolean** | Does the package allow delivery pauses | 
**canTempAddr** | **Boolean** | Does the package allow temporary address changes | 
**description** | [**PackageDescription**](PackageDescription.md) |  | [optional] 


