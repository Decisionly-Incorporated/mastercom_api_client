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

export class LoadDataForFeesRequest {
    /**
    * Reason Code.   Length: 1-4   Valid Values/Format: Numeric
    */
    'reasonCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reasonCode",
            "baseName": "reasonCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LoadDataForFeesRequest.attributeTypeMap;
    }
}

