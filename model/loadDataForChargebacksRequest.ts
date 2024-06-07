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

import { RequestFile } from './models';

export class LoadDataForChargebacksRequest {
    /**
    * The type of chargeback.The default value is CHARGEBACK   Length: 10-18   Valid Values/Format: CHARGEBACK, SECOND_PRESENTMENT
    */
    'chargebackType': LoadDataForChargebacksRequest.ChargebackTypeEnum;
    /**
    * Reason Code    Length: 4   Valid Values/Format: Numeric
    */
    'reasonCode'?: string;
    /**
    * The currency in with the chargeback will be created.   Length: 3   Valid Values/Format: A-Z (uppercase alphabetic letter)
    */
    'currency'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return LoadDataForChargebacksRequest.attributeTypeMap;
    }
}

export namespace LoadDataForChargebacksRequest {
    export enum ChargebackTypeEnum {
        Chargeback = <any> 'CHARGEBACK',
        SecondPresentment = <any> 'SECOND_PRESENTMENT'
    }
}
