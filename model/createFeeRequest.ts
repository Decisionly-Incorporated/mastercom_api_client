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

export class CreateFeeRequest {
    /**
    * Merchant Id associated with this fee collection..if any.   Length: 1-15   Valid Values/Format: Alphanumeric
    */
    'cardAcceptorIdCode'?: string;
    /**
    * Card number when required by the reason code.   Length: 1-19   Valid Values/Format: Numeric
    */
    'cardNumber'?: string;
    /**
    * Code identifying the country.   Length: 3   Valid Values/Format: A-Z (Uppercase alphabetic letters)
    */
    'countryCode'?: string;
    /**
    * Currency of the fee.   Length: 3   Valid Values/Format: A-Z (Uppercase alphabetic letters)
    */
    'currency': string;
    /**
    * Date the fee was attached to the claim.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
    */
    'feeDate': string;
    /**
    * Destination member for the fee collection.   Length: 1-6   Valid Values/Format: Numeric
    */
    'destinationMember': string;
    /**
    * Amount of the fee.   Length: 4-9   Valid Values/Format: Numeric
    */
    'feeAmount': string;
    /**
    * Credit the Sender   Length: 4-5   Valid Values/Format: true / false
    */
    'creditSender': boolean;
    /**
    * Credit the Receiver.   Length: 4-5   Valid Values/Format: true / false
    */
    'creditReceiver': boolean;
    /**
    * Used in routing chargeback and retrieval documentation. It contain either a MasterCom endpoint suffix, in case of 2 characters, or a full MasterCom endpoint in case of 7 characters. When mastercomControlNumber is present, it cannot be all spaces or all zeros.   Length: 1-7   Valid Values/Format: Numeric
    */
    'mastercomControlNumber'?: string;
    /**
    * Message regarding fee..   Length: 1-100   Valid Values/Format: Alphanumeric, Special Char (~!@#$%^&*()_+{}|:\"<>?,./;\'[]-=)
    */
    'message'?: string;
    /**
    * Collection Reason Code.   Length: 1-4   Valid Values/Format: Numeric
    */
    'reason': string;
    /**
    * CONDITIONAL: settlementDate is a conditional field and is required for Argentina and Uruguay\'s Settlement Service participation ID codes (LA00003201, LA00003202, LA00085801, LA00085802, LA00084011, LA00084012). The date may not be prior to the current date or beyond 90 days from the current date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
    */
    'settlementDate'?: string;
    /**
    * Fee identifier to be sent to reply to created Fee.   CONDITIONAL: This field is only applicable, if feeType is REPLY to an existing created feeId.   Length: 1-19   Valid Values/Format: Numeric
    */
    'replyFeeId'?: string;
    /**
    * The fee type.   The default value is CREATE   Valid Values/Format: CREATE, REPLY.
    */
    'feeType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardAcceptorIdCode",
            "baseName": "cardAcceptorIdCode",
            "type": "string"
        },
        {
            "name": "cardNumber",
            "baseName": "cardNumber",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "feeDate",
            "baseName": "feeDate",
            "type": "string"
        },
        {
            "name": "destinationMember",
            "baseName": "destinationMember",
            "type": "string"
        },
        {
            "name": "feeAmount",
            "baseName": "feeAmount",
            "type": "string"
        },
        {
            "name": "creditSender",
            "baseName": "creditSender",
            "type": "boolean"
        },
        {
            "name": "creditReceiver",
            "baseName": "creditReceiver",
            "type": "boolean"
        },
        {
            "name": "mastercomControlNumber",
            "baseName": "mastercomControlNumber",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string"
        },
        {
            "name": "replyFeeId",
            "baseName": "replyFeeId",
            "type": "string"
        },
        {
            "name": "feeType",
            "baseName": "feeType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateFeeRequest.attributeTypeMap;
    }
}

