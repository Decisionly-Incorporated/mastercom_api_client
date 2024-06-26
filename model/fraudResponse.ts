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

export class FraudResponse {
    /**
    * Identifier assigned to the fraud item
    */
    'fraudId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fraudId",
            "baseName": "fraudId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FraudResponse.attributeTypeMap;
    }
}

