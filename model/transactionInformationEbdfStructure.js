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
exports.TransactionInformationEbdfStructure = void 0;
var TransactionInformationEbdfStructure = /** @class */ (function () {
    function TransactionInformationEbdfStructure() {
    }
    TransactionInformationEbdfStructure.getAttributeTypeMap = function () {
        return TransactionInformationEbdfStructure.attributeTypeMap;
    };
    TransactionInformationEbdfStructure.discriminator = undefined;
    TransactionInformationEbdfStructure.attributeTypeMap = [
        {
            "name": "acquirerRefDataOrSwitchSerialNum",
            "baseName": "acquirerRefDataOrSwitchSerialNum",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "merchantName",
            "type": "string"
        },
        {
            "name": "transactionOrSettlementDate",
            "baseName": "transactionOrSettlementDate",
            "type": "string"
        },
        {
            "name": "disputedAmount",
            "baseName": "disputedAmount",
            "type": "string"
        }
    ];
    return TransactionInformationEbdfStructure;
}());
exports.TransactionInformationEbdfStructure = TransactionInformationEbdfStructure;
