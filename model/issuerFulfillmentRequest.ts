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

export class IssuerFulfillmentRequest {
    /**
    * This is a test memo.   Length: 1-100   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;\'[]-=)
    */
    'memo'?: string;
    /**
    * Issuer Response Code.   Length: 7-36   Valid Values/Format: APPROVE, REJECT_DOCUMENTATION_NOT_AS_REQUIRED, REJECT_ILLEGIBLE_OR_MISSING
    */
    'issuerResponseCd': IssuerFulfillmentRequest.IssuerResponseCdEnum;
    /**
    * Reject Reason Code.   Length: 1   Valid Values/Format: A - TRANSACTION AMOUNT MISSING/ILLEGIBLE, M - MERCHANT NAME MISSING/ILLEGIBLE, P - PRIMARY ACCOUNT NUMBER MISSING/ILLEGIBLE, D - TRANSACTION DATE MISSING/ILLEGIBLE, O - OTHER (it can also be used for NOT A SUBSTITUTE DRAFT
    */
    'rejectReasonCd'?: IssuerFulfillmentRequest.RejectReasonCdEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "issuerResponseCd",
            "baseName": "issuerResponseCd",
            "type": "IssuerFulfillmentRequest.IssuerResponseCdEnum"
        },
        {
            "name": "rejectReasonCd",
            "baseName": "rejectReasonCd",
            "type": "IssuerFulfillmentRequest.RejectReasonCdEnum"
        }    ];

    static getAttributeTypeMap() {
        return IssuerFulfillmentRequest.attributeTypeMap;
    }
}

export namespace IssuerFulfillmentRequest {
    export enum IssuerResponseCdEnum {
        Approve = <any> 'APPROVE',
        RejectDocumentationNotAsRequired = <any> 'REJECT_DOCUMENTATION_NOT_AS_REQUIRED',
        RejectIllegibleOrMissing = <any> 'REJECT_ILLEGIBLE_OR_MISSING'
    }
    export enum RejectReasonCdEnum {
        A = <any> 'A',
        M = <any> 'M',
        P = <any> 'P',
        D = <any> 'D',
        O = <any> 'O'
    }
}
