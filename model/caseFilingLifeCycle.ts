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
import { CaseFilingDetails } from './caseFilingDetails';
import { CaseFilingRespHistory } from './caseFilingRespHistory';

export class CaseFilingLifeCycle {
    /**
    * Case Filing Status
    */
    'caseFilingStatus'?: string;
    'caseFilingDetails'?: CaseFilingDetails;
    'caseFilingRespHistory'?: Array<CaseFilingRespHistory>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "caseFilingStatus",
            "baseName": "caseFilingStatus",
            "type": "string"
        },
        {
            "name": "caseFilingDetails",
            "baseName": "caseFilingDetails",
            "type": "CaseFilingDetails"
        },
        {
            "name": "caseFilingRespHistory",
            "baseName": "caseFilingRespHistory",
            "type": "Array<CaseFilingRespHistory>"
        }    ];

    static getAttributeTypeMap() {
        return CaseFilingLifeCycle.attributeTypeMap;
    }
}

