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
exports.LoadDataForChargebacksRequest = void 0;
var LoadDataForChargebacksRequest = /** @class */ (function () {
    function LoadDataForChargebacksRequest() {
    }
    LoadDataForChargebacksRequest.getAttributeTypeMap = function () {
        return LoadDataForChargebacksRequest.attributeTypeMap;
    };
    LoadDataForChargebacksRequest.discriminator = undefined;
    LoadDataForChargebacksRequest.attributeTypeMap = [
        {
            "name": "chargebackType",
            "baseName": "chargebackType",
            "type": "LoadDataForChargebacksRequest.ChargebackTypeEnum"
        },
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }
    ];
    return LoadDataForChargebacksRequest;
}());
exports.LoadDataForChargebacksRequest = LoadDataForChargebacksRequest;
(function (LoadDataForChargebacksRequest) {
    var ChargebackTypeEnum;
    (function (ChargebackTypeEnum) {
        ChargebackTypeEnum[ChargebackTypeEnum["Chargeback"] = 'CHARGEBACK'] = "Chargeback";
        ChargebackTypeEnum[ChargebackTypeEnum["SecondPresentment"] = 'SECOND_PRESENTMENT'] = "SecondPresentment";
    })(ChargebackTypeEnum = LoadDataForChargebacksRequest.ChargebackTypeEnum || (LoadDataForChargebacksRequest.ChargebackTypeEnum = {}));
})(LoadDataForChargebacksRequest || (exports.LoadDataForChargebacksRequest = LoadDataForChargebacksRequest = {}));
