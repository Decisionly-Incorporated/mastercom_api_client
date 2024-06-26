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

export class TransactionSearchRequest {
    /**
    * CONDITIONAL: Acquirer Reference Number. If provided bankNetRefNumber may not be used. This field is required and applicable if primaryAccountNum is not provided.   Length: 23   Valid Values/Format: Numeric
    */
    'acquirerRefNumber'?: string;
    /**
    * CONDITIONAL: This field is comprised of the Financial Network Code + Banknet Reference Number. If provided, must provide PAN in primaryAccountNum parameter. If provided, cannot use acquirerRefNumber parameter.  Length: 9  Valid Values/Format: Alphanumeric
    */
    'bankNetRefNumber'?: string;
    /**
    * CONDITIONAL: Primary Account Number. This field is required and applicable if acquirerRefNum is not provided.   Length: 11-19   Valid Values/Format: Numeric
    */
    'primaryAccountNum'?: string;
    /**
    * Transaction amount lower limit value to be searched.   Length: 0-12   Valid Values/Format: Numeric
    */
    'transAmountFrom'?: string;
    /**
    * Transaction amount upper limit value to be searched.   Length: 0-12   Valid Values/Format: Numeric
    */
    'transAmountTo'?: string;
    /**
    * Transaction Date min search range.  The search range is a maximum of 30 days, and searches can be completed for up to 730 days of history.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
    */
    'tranStartDate': string;
    /**
    * Transaction Date max search range.  The search range is a maximum of 30 days, and searches can be completed for up to 730 days of history.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
    */
    'tranEndDate': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquirerRefNumber",
            "baseName": "acquirerRefNumber",
            "type": "string"
        },
        {
            "name": "bankNetRefNumber",
            "baseName": "bankNetRefNumber",
            "type": "string"
        },
        {
            "name": "primaryAccountNum",
            "baseName": "primaryAccountNum",
            "type": "string"
        },
        {
            "name": "transAmountFrom",
            "baseName": "transAmountFrom",
            "type": "string"
        },
        {
            "name": "transAmountTo",
            "baseName": "transAmountTo",
            "type": "string"
        },
        {
            "name": "tranStartDate",
            "baseName": "tranStartDate",
            "type": "string"
        },
        {
            "name": "tranEndDate",
            "baseName": "tranEndDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionSearchRequest.attributeTypeMap;
    }
}

