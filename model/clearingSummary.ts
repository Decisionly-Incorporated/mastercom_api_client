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

export class ClearingSummary {
    /**
    * Primary Account Number
    */
    'primaryAccountNumber'?: string;
    /**
    * Transaction amount in local currency
    */
    'transactionAmountLocal'?: string;
    /**
    * Local date and time of transaction.The seconds in time will always be set to 00
    */
    'dateAndTimeLocal'?: string;
    /**
    * Indicates the conditions that exist at the point of service at the time of the transaction
    */
    'cardDataInputCapability'?: string;
    /**
    * Describes the capability of the terminal device to support/accept authentication data
    */
    'cardholderAuthenticationCapability'?: string;
    /**
    * Indicates if the card was present or not
    */
    'cardPresent'?: string;
    /**
    * Acquirer reference number
    */
    'acquirerReferenceNumber'?: string;
    /**
    * Name the card acceptor that defines the point of interaction in both local and interchange environments (excluding ATM and Card-Activated Public Phones)
    */
    'cardAcceptorName'?: string;
    /**
    * Currency code the issuer will be charging the cardholder for repayment
    */
    'currencyCode'?: string;
    /**
    * The field will contain installment payment data for Brazilian intracountry transactions
    */
    'installmentPaymentDataBrazil'?: string;
    /**
    * The host\'s identifier
    */
    'transactionId'?: string;
    /**
    * Field to identify GCO and NON-GCO transactions
    */
    'settlementIndicator'?: string;
    /**
    * Identifies a message as a reversal of a previous message
    */
    'messageReversalIndicator'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "primaryAccountNumber",
            "baseName": "primaryAccountNumber",
            "type": "string"
        },
        {
            "name": "transactionAmountLocal",
            "baseName": "transactionAmountLocal",
            "type": "string"
        },
        {
            "name": "dateAndTimeLocal",
            "baseName": "dateAndTimeLocal",
            "type": "string"
        },
        {
            "name": "cardDataInputCapability",
            "baseName": "cardDataInputCapability",
            "type": "string"
        },
        {
            "name": "cardholderAuthenticationCapability",
            "baseName": "cardholderAuthenticationCapability",
            "type": "string"
        },
        {
            "name": "cardPresent",
            "baseName": "cardPresent",
            "type": "string"
        },
        {
            "name": "acquirerReferenceNumber",
            "baseName": "acquirerReferenceNumber",
            "type": "string"
        },
        {
            "name": "cardAcceptorName",
            "baseName": "cardAcceptorName",
            "type": "string"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string"
        },
        {
            "name": "installmentPaymentDataBrazil",
            "baseName": "installmentPaymentDataBrazil",
            "type": "string"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "settlementIndicator",
            "baseName": "settlementIndicator",
            "type": "string"
        },
        {
            "name": "messageReversalIndicator",
            "baseName": "messageReversalIndicator",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ClearingSummary.attributeTypeMap;
    }
}

