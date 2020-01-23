/**
 * Bottega
 * KSF Media's orders service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse415UnsupportedMediaType from './InlineResponse415UnsupportedMediaType';

/**
 * The InlineResponse415 model module.
 * @module model/InlineResponse415
 * @version 1.0.0
 */
class InlineResponse415 {
    /**
     * Constructs a new <code>InlineResponse415</code>.
     * @alias module:model/InlineResponse415
     */
    constructor() { 
        
        InlineResponse415.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse415</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse415} obj Optional instance to populate.
     * @return {module:model/InlineResponse415} The populated <code>InlineResponse415</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse415();

            if (data.hasOwnProperty('http_code')) {
                obj['http_code'] = ApiClient.convertToType(data['http_code'], 'Number');
            }
            if (data.hasOwnProperty('unsupported_media_type')) {
                obj['unsupported_media_type'] = InlineResponse415UnsupportedMediaType.constructFromObject(data['unsupported_media_type']);
            }
            if (data.hasOwnProperty('http_status')) {
                obj['http_status'] = ApiClient.convertToType(data['http_status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} http_code
 */
InlineResponse415.prototype['http_code'] = undefined;

/**
 * @member {module:model/InlineResponse415UnsupportedMediaType} unsupported_media_type
 */
InlineResponse415.prototype['unsupported_media_type'] = undefined;

/**
 * @member {module:model/InlineResponse415.HttpStatusEnum} http_status
 */
InlineResponse415.prototype['http_status'] = undefined;





/**
 * Allowed values for the <code>http_status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse415['HttpStatusEnum'] = {

    /**
     * value: "Unsupported media type"
     * @const
     */
    "Unsupported media type": "Unsupported media type"
};



export default InlineResponse415;

