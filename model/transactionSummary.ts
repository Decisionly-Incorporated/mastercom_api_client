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
import { AuthorizationSummary } from './authorizationSummary';

export class TransactionSummary {
    /**
    * The number of records returned in the response
    */
    'authorizationSummaryCount'?: string;
    /**
    * Provides the message receiver with the reason for sending the message
    */
    'message'?: string;
    'authorizationSummary'?: Array<AuthorizationSummary>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorizationSummaryCount",
            "baseName": "authorizationSummaryCount",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "authorizationSummary",
            "baseName": "authorizationSummary",
            "type": "Array<AuthorizationSummary>"
        }    ];

    static getAttributeTypeMap() {
        return TransactionSummary.attributeTypeMap;
    }
}

