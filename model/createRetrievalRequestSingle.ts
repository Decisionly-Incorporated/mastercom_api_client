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

export class CreateRetrievalRequestSingle {
    /**
    * The document type field indicates what type of documentation is sent supporting the retrieval.   Length: 1   Valid Values/Format: 2, 4
    */
    'documentType': CreateRetrievalRequestSingle.DocumentTypeEnum;
    /**
    * Replacement Amount.  The replacement amount should reflect the final amount of the transaction value that should remain applied to the cardholder balance.   Length: 4-12   Valid Values/Format: Numeric
    */
    'replacementAmount': string;
    /**
    * MDS dispute reason code for healthcare toÂ createÂ the dispute item.   NOTE:Â Creation of retrieval request is allowed only for reversalReasonCode (healthcare reason code (43)) starting on October 24th, 2021.   Length: 2   Valid Values/Format: 43  
    */
    'reversalReasonCode': string;
    /**
    * The usage code indicates the type of retrieval request record processed.   Length: 1   Valid Values/Format: 1, 2, 3, 6, 7
    */
    'usageCode': CreateRetrievalRequestSingle.UsageCodeEnum;
    /**
    * Any additional information or note may be entered in this field.   Length: 1-38   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;\'[]-=)
    */
    'additionalInformation'?: string;
    /**
    * Control Number.  Used to identify the specific transaction for internal auditing and tracing purposes.   Length: 1-5   Valid Values/Format: Numeric
    */
    'controlNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentType",
            "baseName": "documentType",
            "type": "CreateRetrievalRequestSingle.DocumentTypeEnum"
        },
        {
            "name": "replacementAmount",
            "baseName": "replacementAmount",
            "type": "string"
        },
        {
            "name": "reversalReasonCode",
            "baseName": "reversalReasonCode",
            "type": "string"
        },
        {
            "name": "usageCode",
            "baseName": "usageCode",
            "type": "CreateRetrievalRequestSingle.UsageCodeEnum"
        },
        {
            "name": "additionalInformation",
            "baseName": "additionalInformation",
            "type": "string"
        },
        {
            "name": "controlNumber",
            "baseName": "controlNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateRetrievalRequestSingle.attributeTypeMap;
    }
}

export namespace CreateRetrievalRequestSingle {
    export enum DocumentTypeEnum {
        _2 = <any> '2',
        _4 = <any> '4'
    }
    export enum UsageCodeEnum {
        _1 = <any> '1',
        _2 = <any> '2',
        _3 = <any> '3',
        _6 = <any> '6',
        _7 = <any> '7'
    }
}
