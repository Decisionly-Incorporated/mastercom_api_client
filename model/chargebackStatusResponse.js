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
exports.ChargebackStatusResponse = void 0;
var ChargebackStatusResponse = /** @class */ (function () {
    function ChargebackStatusResponse() {
    }
    ChargebackStatusResponse.getAttributeTypeMap = function () {
        return ChargebackStatusResponse.attributeTypeMap;
    };
    ChargebackStatusResponse.discriminator = undefined;
    ChargebackStatusResponse.attributeTypeMap = [
        {
            "name": "chargebackResponseList",
            "baseName": "chargebackResponseList",
            "type": "Array<ChargebackStatusResponseStructure>"
        }
    ];
    return ChargebackStatusResponse;
}());
exports.ChargebackStatusResponse = ChargebackStatusResponse;