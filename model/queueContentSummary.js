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
exports.QueueContentSummary = void 0;
var QueueContentSummary = /** @class */ (function () {
    function QueueContentSummary() {
    }
    QueueContentSummary.getAttributeTypeMap = function () {
        return QueueContentSummary.attributeTypeMap;
    };
    QueueContentSummary.discriminator = undefined;
    QueueContentSummary.attributeTypeMap = [
        {
            "name": "pageCount",
            "baseName": "pageCount",
            "type": "string"
        },
        {
            "name": "claimList",
            "baseName": "claimList",
            "type": "Array<ClaimSummary>"
        }
    ];
    return QueueContentSummary;
}());
exports.QueueContentSummary = QueueContentSummary;