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

export class CaseFilingImageStatusRequest {
    /**
    * Case filing image status.   Length: 6-11   Valid Values/Format: COMPLETED, FAILED, UNPROCESSED
    */
    'status': string;
    /**
    * Case filing image processing start date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
    */
    'startDate': string;
    /**
    * Case filing image processing end date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
    */
    'endDate': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CaseFilingImageStatusRequest.attributeTypeMap;
    }
}

