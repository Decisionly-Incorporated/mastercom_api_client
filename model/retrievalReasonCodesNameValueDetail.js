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
exports.RetrievalReasonCodesNameValueDetail = void 0;
var RetrievalReasonCodesNameValueDetail = /** @class */ (function () {
    function RetrievalReasonCodesNameValueDetail() {
    }
    RetrievalReasonCodesNameValueDetail.getAttributeTypeMap = function () {
        return RetrievalReasonCodesNameValueDetail.attributeTypeMap;
    };
    RetrievalReasonCodesNameValueDetail.discriminator = undefined;
    RetrievalReasonCodesNameValueDetail.attributeTypeMap = [
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
    return RetrievalReasonCodesNameValueDetail;
}());
exports.RetrievalReasonCodesNameValueDetail = RetrievalReasonCodesNameValueDetail;
