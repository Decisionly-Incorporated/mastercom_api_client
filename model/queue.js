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
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.getAttributeTypeMap = function () {
        return Queue.attributeTypeMap;
    };
    Queue.discriminator = undefined;
    Queue.attributeTypeMap = [
        {
            "name": "queueName",
            "baseName": "queueName",
            "type": "string"
        },
        {
            "name": "queueDescription",
            "baseName": "queueDescription",
            "type": "string"
        }
    ];
    return Queue;
}());
exports.Queue = Queue;