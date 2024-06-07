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
exports.ChargebackEbdfStructure = void 0;
/**
* NOTE: When chargebackEbdfDocuments is used for automatic EBDF document generation for transactionInformation (or) fraudDrfDocument (or) cardholderDisputeChargebackDrfDocument (or) pointOfInteractionErrorsDrfDocument, no other documents should be attached on the call and documentIndicator must be set to true. Attaching documents or setting documentIndicator to false will lead to call failure.
*/
var ChargebackEbdfStructure = /** @class */ (function () {
    function ChargebackEbdfStructure() {
    }
    ChargebackEbdfStructure.getAttributeTypeMap = function () {
        return ChargebackEbdfStructure.attributeTypeMap;
    };
    ChargebackEbdfStructure.discriminator = undefined;
    ChargebackEbdfStructure.attributeTypeMap = [
        {
            "name": "transactionInformation",
            "baseName": "transactionInformation",
            "type": "TransactionInformationEbdfStructure"
        },
        {
            "name": "fraudDrfDocument",
            "baseName": "fraudDrfDocument",
            "type": "FraudDrfDocumentStructure"
        },
        {
            "name": "cardholderDisputeChargebackDrfDocument",
            "baseName": "cardholderDisputeChargebackDrfDocument",
            "type": "CardholderDisputeChargebackDrfDocumentStructure"
        },
        {
            "name": "pointOfInteractionErrorsDrfDocument",
            "baseName": "pointOfInteractionErrorsDrfDocument",
            "type": "PointOfInteractionErrorsDrfDocumentStructure"
        }
    ];
    return ChargebackEbdfStructure;
}());
exports.ChargebackEbdfStructure = ChargebackEbdfStructure;
