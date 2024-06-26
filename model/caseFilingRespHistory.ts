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

export class CaseFilingRespHistory {
    /**
    * Memo pertaining to the case
    */
    'memo'?: string;
    /**
    * Action taken by party.   Valid Values/Format: ACCEPT, REJECT, REBUT, ESCALATE, WITHDRAW, FAVORSENDER, FAVORRECEIVER, DECLINED, MODIFYCASE, CREATECASE, EXPIRED
    */
    'action'?: string;
    /**
    * The date and the response was provided
    */
    'responseDate'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "responseDate",
            "baseName": "responseDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CaseFilingRespHistory.attributeTypeMap;
    }
}

