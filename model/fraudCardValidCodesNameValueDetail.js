"use strict";
/**
 * MasterCom
 * MasterCom
 *
 * The version of the OpenAPI document: v6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FraudCardValidCodesNameValueDetail = void 0;
var FraudCardValidCodesNameValueDetail = /** @class */ (function () {
    function FraudCardValidCodesNameValueDetail() {
    }
    FraudCardValidCodesNameValueDetail.getAttributeTypeMap = function () {
        return FraudCardValidCodesNameValueDetail.attributeTypeMap;
    };
    FraudCardValidCodesNameValueDetail.discriminator = undefined;
    FraudCardValidCodesNameValueDetail.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return FraudCardValidCodesNameValueDetail;
}());
exports.FraudCardValidCodesNameValueDetail = FraudCardValidCodesNameValueDetail;