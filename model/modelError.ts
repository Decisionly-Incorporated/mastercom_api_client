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
import { ErrorDetail } from './errorDetail';

export class ModelError {
    /**
    * Request id for the error
    */
    'requestId'?: string;
    /**
    * Source for the error
    */
    'source'?: string;
    /**
    * Reason code for error
    */
    'reasonCode'?: string;
    /**
    * Brief description of error
    */
    'description'?: string;
    /**
    * Indicates whether the client can make changes to resolve this issue
    */
    'recoverable'?: boolean = false;
    /**
    * Detail structure containing error detail code
    */
    'details'?: Array<ErrorDetail>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestId",
            "baseName": "RequestId",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "Source",
            "type": "string"
        },
        {
            "name": "reasonCode",
            "baseName": "ReasonCode",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "recoverable",
            "baseName": "Recoverable",
            "type": "boolean"
        },
        {
            "name": "details",
            "baseName": "Details",
            "type": "Array<ErrorDetail>"
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

