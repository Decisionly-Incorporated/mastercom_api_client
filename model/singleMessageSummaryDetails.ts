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
import { SingleMessageSummary } from './singleMessageSummary';

export class SingleMessageSummaryDetails {
    'authTransaction'?: SingleMessageSummary;
    'clearingTransaction'?: SingleMessageSummary;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authTransaction",
            "baseName": "authTransaction",
            "type": "SingleMessageSummary"
        },
        {
            "name": "clearingTransaction",
            "baseName": "clearingTransaction",
            "type": "SingleMessageSummary"
        }    ];

    static getAttributeTypeMap() {
        return SingleMessageSummaryDetails.attributeTypeMap;
    }
}

