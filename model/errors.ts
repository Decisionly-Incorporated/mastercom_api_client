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

export class Errors {
    /**
    * List of Errors returned to service
    */
    'errors'?: Array<Error>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "Errors",
            "type": "Array<Error>"
        }    ];

    static getAttributeTypeMap() {
        return Errors.attributeTypeMap;
    }
}

