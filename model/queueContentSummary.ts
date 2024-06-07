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
import { ClaimSummary } from './claimSummary';

export class QueueContentSummary {
    /**
    * The number of pages queue results can be returned
    */
    'pageCount'?: string;
    'claimList'?: Array<ClaimSummary>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pageCount",
            "baseName": "pageCount",
            "type": "string"
        },
        {
            "name": "claimList",
            "baseName": "claimList",
            "type": "Array<ClaimSummary>"
        }    ];

    static getAttributeTypeMap() {
        return QueueContentSummary.attributeTypeMap;
    }
}

