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
exports.FraudAcctStatusesNameValueDetail = void 0;
var FraudAcctStatusesNameValueDetail = /** @class */ (function () {
    function FraudAcctStatusesNameValueDetail() {
    }
    FraudAcctStatusesNameValueDetail.getAttributeTypeMap = function () {
        return FraudAcctStatusesNameValueDetail.attributeTypeMap;
    };
    FraudAcctStatusesNameValueDetail.discriminator = undefined;
    FraudAcctStatusesNameValueDetail.attributeTypeMap = [
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
    return FraudAcctStatusesNameValueDetail;
}());
exports.FraudAcctStatusesNameValueDetail = FraudAcctStatusesNameValueDetail;