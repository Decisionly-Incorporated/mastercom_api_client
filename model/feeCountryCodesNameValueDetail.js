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
exports.FeeCountryCodesNameValueDetail = void 0;
var FeeCountryCodesNameValueDetail = /** @class */ (function () {
    function FeeCountryCodesNameValueDetail() {
    }
    FeeCountryCodesNameValueDetail.getAttributeTypeMap = function () {
        return FeeCountryCodesNameValueDetail.attributeTypeMap;
    };
    FeeCountryCodesNameValueDetail.discriminator = undefined;
    FeeCountryCodesNameValueDetail.attributeTypeMap = [
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
    return FeeCountryCodesNameValueDetail;
}());
exports.FeeCountryCodesNameValueDetail = FeeCountryCodesNameValueDetail;