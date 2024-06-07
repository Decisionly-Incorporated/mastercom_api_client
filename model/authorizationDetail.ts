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

export class AuthorizationDetail {
    /**
    * Account number associated with transaction in question
    */
    'accountNumber'?: string;
    /**
    * Indicates the type of PAN mapping account
    */
    'accountNumberIndicator'?: string;
    /**
    * The acquiring institution (for example, merchant bank) or its agent
    */
    'acquirer'?: string;
    /**
    * The code of the country where the acquirer is located
    */
    'acquiringInstitutionCountryCode'?: string;
    /**
    * Identifies the acquiring institution (for example, merchant bank) or its agent
    */
    'acquiringInstitutionId'?: string;
    /**
    * Indicates that verification of the cardholder billing address is requested in the authorization message
    */
    'addressVerificationServiceResponse'?: string;
    /**
    * Indicates the specific purpose of an advice message
    */
    'adviceReasonCode'?: string;
    /**
    * Indicates if the ATC Discrepancy Value is above, below or within the maximum values allowed by the issuer.
    */
    'atcDiscrepancyIndicator'?: string;
    /**
    * The differential between the transaction ATC and the maximum value allowed by the issuer when the transaction ATC is above the previous ATC, or the differential between the transaction ATC and the minimum value allowed by the issuer when the transaction ATC is below the previous ATC. ATC Discrepancy Value will be zero when the transaction ATC is within the issuer-defined limits
    */
    'atcDiscrepancyValue'?: string;
    /**
    * Contains the derived full ATC Value used in the validation
    */
    'atcValue'?: string;
    /**
    * Defined by the Authorization Platform and is passed to the issuer to indicate that the transaction qualified for Authentication service
    */
    'authenticationIndicator'?: string;
    /**
    * A transaction response ID code that the authorizing institution assigns. DE 38 is used to transmit a card issuer\'s authorization code for Authorization transactions
    */
    'authorizationIdResponse'?: string;
    /**
    * Date the transaction hit Mastercard network
    */
    'banknetDate'?: string;
    /**
    * Generated by the Authorization Platform for each originating message it routes
    */
    'banknetReferenceNumber'?: string;
    /**
    * Currency code for the billing amount
    */
    'billingCurrencyCode'?: string;
    /**
    * Contains the card acceptor city of the merchant or, if a payment facilitator is involved in the transaction, the sub-merchant
    */
    'cardAcceptorCity'?: string;
    /**
    * Identifies the card acceptor ID assigned by the acquirer
    */
    'cardAcceptorId'?: string;
    /**
    * Contains the card acceptor\'s name
    */
    'cardAcceptorName'?: string;
    /**
    * Contains the card acceptor\'s state
    */
    'cardAcceptorState'?: string;
    /**
    * A unique code identifying a terminal at the card acceptor location
    */
    'cardAcceptorTerminalId'?: string;
    /**
    * Indicates whether the cardholder activated the terminal with the use of the card and the CAT security level
    */
    'cardholderActivatedTerminalLevel'?: string;
    /**
    * The actual amount in the issuer currency
    */
    'cardholderBillingActualAmount'?: string;
    /**
    * The transaction amount in the issuers currency
    */
    'cardholderBillingAmount'?: string;
    /**
    * Indicates the method by which the cardholder\'s identity was verified at the point of service
    */
    'cardAuthenticationMethodValidationCode'?: string;
    /**
    * The month and day that the conversion rate is effective to convert the transaction amount from the transaction currency into the currency of settlement or to convert the transaction amount from the original currency into the cardholder billing currency
    */
    'conversionDate'?: string;
    /**
    * Indicates the conversion rate
    */
    'conversionRate'?: string;
    /**
    * Electronic commerce code
    */
    'electronicCommerceIndicators'?: string;
    /**
    * Indicates the electronic commerce security level and UCAF collection
    */
    'electronicCommerceSecurityLevelIndicatorAndUcafCollectionIndicator'?: string;
    /**
    * Indicates if expiration Date present on card
    */
    'expirationDatePresenceInd'?: string;
    /**
    * Designates whether the authorization is a final authorization
    */
    'finalAuthorizationIndicator'?: string;
    /**
    * Identifies the specific program or service (for example, the financial network, financial program, or card program) with which the transaction is associated. DE 63 will contain the graduated product when the issuer\'s cardholder account participates in the Product Graduation Account Level Management service
    */
    'financialNetworkCode'?: string;
    /**
    * Identifies the institution forwarding a Request or Advice message in an interchange system if it is not the same institution as specified in Acquiring Institution ID Code
    */
    'forwardingInstitutionId'?: string;
    /**
    * Contains acquiring network trace information that INFs may require to quickly and accurately route Administrative Advice/0620 messages back to the original acquiring institution
    */
    'infData'?: string;
    /**
    * Contains chip data formatted in accordance with the Europay MasterCard Visa (EMV) specifications
    */
    'integratedCircuitCardRelatedData'?: string;
    /**
    * The issuing institution
    */
    'issuer'?: string;
    /**
    * ontains the promotion code to identify unique use of a Mastercard product for a specific program or service established between issuers and merchants
    */
    'mastercardPromotionCode'?: string;
    /**
    * The classification (card acceptor business code/merchant category code [MCC]) of the merchant\'s type of business or service
    */
    'mccMessageId'?: string;
    /**
    * Contains the merchant advice code
    */
    'merchantAdviceCode'?: string;
    /**
    * Contains the Merchant Category Code
    */
    'merchantCategoryCode'?: string;
    /**
    * Contains the phone number of the wireless phone for which the customer is purchasing extra service
    */
    'mobilePhoneNumber'?: string;
    /**
    * Contains the name or other identifier of the mobile phone service provider
    */
    'mobilePhoneServiceProviderName'?: string;
    /**
    * Identifies the acquiring institution (for example, merchant bank) or its agent
    */
    'originalAcquiringInstitutionIdCode'?: string;
    /**
    * Identifies the level of UCAF supported in the authorization process.
    */
    'originalElectronicCommerceSecurityLevelIndicatorAndUcafCollectionIndicator'?: string;
    /**
    * Identifies a message\'s forwarding institution
    */
    'originalIssuerForwardingInstitutionIdCode'?: string;
    /**
    * Contains the message type identifier
    */
    'originalMessageTypeIdentifier'?: string;
    /**
    * Indicates the results of PIN processing by the Authorization Platform
    */
    'pinServiceCode'?: string;
    /**
    * Indicates if the merchant terminal verified the purchased items against the Inventory Information Approval System (IIAS)
    */
    'realTimeSubstantiationIndicator'?: string;
    /**
    * Describes the reason why the Authorization Request/0100 message was downgraded
    */
    'reasonForUcafCollectionIndicatorDowngrade'?: string;
    /**
    * Indicates the terminal capabilities for transferring the data on the card into the terminal
    */
    'posCardDataTerminalInputCapability'?: string;
    /**
    * Indicates whether the cardholder is present at the point of service and explains the condition if the cardholder is not present
    */
    'posCardholderPresence'?: string;
    /**
    * Indicates if the card is present at the point of service
    */
    'posCardPresence'?: string;
    /**
    * Describes the capability of the terminal device to support/accept PAN entry
    */
    'posEntryModePan'?: string;
    /**
    * Describes the capability of the terminal device to support/accept PIN entry
    */
    'posEntryModePin'?: string;
    /**
    * Indicates if the card acceptor is attending the terminal
    */
    'posTerminalAttendance'?: string;
    /**
    * Indicates the terminal location
    */
    'posTerminalLocation'?: string;
    /**
    * Indicates the purpose or status of the request
    */
    'posTransactionStatus'?: string;
    /**
    * Account number associated with transaction in question 
    */
    'primaryAccountNumber'?: string;
    /**
    * Carries either the first nine digits of the cardholder PAN, or the full Visa cardholder PAN in the authorization response for a transaction initiated with a Visa token
    */
    'primaryAccountNumberAccountRange'?: string;
    /**
    * Contain any private-use data that the customer may want to include in a message
    */
    'privateData'?: string;
    /**
    * A series of digits used to describe the effect of a transaction on the customer account and the type of accounts affected
    */
    'processingCode'?: string;
    /**
    * A variable-length data element used for transmitting file record data or textual character string data in various message types
    */
    'recordDataPresenceIndicator'?: string;
    /**
    * Defines the disposition of a previous message or an action taken as a result of receipt of a previous message. Response codes also are used to indicate approval or decline of a transaction. In the event an authorization is declined, the response code indicates the reason for rejection and may indicate an action to be taken at the card acceptor (for example, capture card)
    */
    'responseCode'?: string;
    /**
    * A document reference number supplied by the system retaining the original source document of the transaction and assists in locating that source document or a copy thereof 
    */
    'retrievalReferenceNumber'?: string;
    /**
    * Indicates the actual settlement amount in the settlement currency
    */
    'settlementActualAmount'?: string;
    /**
    * The date (month and day) that funds will be transferred between an acquirer and an issuer or an appropriate intermediate network facility (INF)
    */
    'settlementDate'?: string;
    /**
    * Indicates the Systems Trace Audit Number (STAN)
    */
    'stan'?: string;
    /**
    * Describes the Storage Technology of a requested or created token
    */
    'storageTechnology'?: string;
    /**
    * The unique identifier assigned to each transaction by the originator of the message
    */
    'systemsTraceAuditNumber'?: string;
    /**
    * Contains a value indicating the confidence level of the token to PAN/cardholder binding
    */
    'tokenAssuranceLevel'?: string;
    /**
    * Contains the ID assigned by the token service provider to the token requestor
    */
    'tokenRequestorId'?: string;
    /**
    * The information encoded on track 1 of the card\'s magnetic stripe as defined in the ISO 7813 specification, including data element separators but excluding beginning and ending sentinels and LRC characters as defined in this data element definition
    */
    'track1'?: string;
    /**
    * The information encoded on track 2 of the card magnetic stripe as defined in the ISO 7813 specification, including data element separators but excluding beginning and ending sentinels and longitudinal redundancy check (LRC) characters as defined therein
    */
    'track2'?: string;
    /**
    * Indicates the actual transaction amount
    */
    'transactionActualAmount'?: string;
    /**
    * Transaction in the currency of transaction
    */
    'transactionAmountLocal'?: string;
    /**
    * The format is LLLt, where t is the transaction category code (TCC). The message must contain an appropriate TCC as the first byte of data after the length within DE 48. The TCC classifies major categories of transactions, such as Retail Sale, Cash Disbursement, and Mail Order
    */
    'transactionCategoryCode'?: string;
    /**
    * The local currency of the acquirer or source location of the transaction 
    */
    'transactionCurrencyCode'?: string;
    /**
    * Contains the type of ATM credit card cash advance installment transaction
    */
    'transactionType'?: string;
    /**
    * The date and time a message was transmitted by a processing entity, to be expressed in Coordinated Universal Time (UTC)
    */
    'transmissionDateAndTime'?: string;
    /**
    * Contains the encoded MasterCard SecureCode  issuer or cardholder-generated authentication data (collected by the merchant) resulting from all SecureCode fully authenticated transactions, data for Visa or American Express transactions associated with the 3-D Secure Electronic Commerce Verification Service (if collected), or the static AAV assigned by MasterCard for Maestro or MasterCard Advance Registration Program, Maestro Recurring Payments Program, or MasterCard Utility Payment Program
    */
    'universalCardholderAuthenticationFieldUcaf'?: string;
    /**
    * The product code associated with the virtual card number VCN
    */
    'vcnProductCode'?: string;
    /**
    * Provides information about transactions initiated through the use of a digital wallet
    */
    'walletIdentifier'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "accountNumberIndicator",
            "baseName": "accountNumberIndicator",
            "type": "string"
        },
        {
            "name": "acquirer",
            "baseName": "acquirer",
            "type": "string"
        },
        {
            "name": "acquiringInstitutionCountryCode",
            "baseName": "acquiringInstitutionCountryCode",
            "type": "string"
        },
        {
            "name": "acquiringInstitutionId",
            "baseName": "acquiringInstitutionId",
            "type": "string"
        },
        {
            "name": "addressVerificationServiceResponse",
            "baseName": "addressVerificationServiceResponse",
            "type": "string"
        },
        {
            "name": "adviceReasonCode",
            "baseName": "adviceReasonCode",
            "type": "string"
        },
        {
            "name": "atcDiscrepancyIndicator",
            "baseName": "atcDiscrepancyIndicator",
            "type": "string"
        },
        {
            "name": "atcDiscrepancyValue",
            "baseName": "atcDiscrepancyValue",
            "type": "string"
        },
        {
            "name": "atcValue",
            "baseName": "atcValue",
            "type": "string"
        },
        {
            "name": "authenticationIndicator",
            "baseName": "authenticationIndicator",
            "type": "string"
        },
        {
            "name": "authorizationIdResponse",
            "baseName": "authorizationIdResponse",
            "type": "string"
        },
        {
            "name": "banknetDate",
            "baseName": "banknetDate",
            "type": "string"
        },
        {
            "name": "banknetReferenceNumber",
            "baseName": "banknetReferenceNumber",
            "type": "string"
        },
        {
            "name": "billingCurrencyCode",
            "baseName": "billingCurrencyCode",
            "type": "string"
        },
        {
            "name": "cardAcceptorCity",
            "baseName": "cardAcceptorCity",
            "type": "string"
        },
        {
            "name": "cardAcceptorId",
            "baseName": "cardAcceptorId",
            "type": "string"
        },
        {
            "name": "cardAcceptorName",
            "baseName": "cardAcceptorName",
            "type": "string"
        },
        {
            "name": "cardAcceptorState",
            "baseName": "cardAcceptorState",
            "type": "string"
        },
        {
            "name": "cardAcceptorTerminalId",
            "baseName": "cardAcceptorTerminalId",
            "type": "string"
        },
        {
            "name": "cardholderActivatedTerminalLevel",
            "baseName": "cardholderActivatedTerminalLevel",
            "type": "string"
        },
        {
            "name": "cardholderBillingActualAmount",
            "baseName": "cardholderBillingActualAmount",
            "type": "string"
        },
        {
            "name": "cardholderBillingAmount",
            "baseName": "cardholderBillingAmount",
            "type": "string"
        },
        {
            "name": "cardAuthenticationMethodValidationCode",
            "baseName": "cardAuthenticationMethodValidationCode",
            "type": "string"
        },
        {
            "name": "conversionDate",
            "baseName": "conversionDate",
            "type": "string"
        },
        {
            "name": "conversionRate",
            "baseName": "conversionRate",
            "type": "string"
        },
        {
            "name": "electronicCommerceIndicators",
            "baseName": "electronicCommerceIndicators",
            "type": "string"
        },
        {
            "name": "electronicCommerceSecurityLevelIndicatorAndUcafCollectionIndicator",
            "baseName": "electronicCommerceSecurityLevelIndicatorAndUcafCollectionIndicator",
            "type": "string"
        },
        {
            "name": "expirationDatePresenceInd",
            "baseName": "expirationDatePresenceInd",
            "type": "string"
        },
        {
            "name": "finalAuthorizationIndicator",
            "baseName": "finalAuthorizationIndicator",
            "type": "string"
        },
        {
            "name": "financialNetworkCode",
            "baseName": "financialNetworkCode",
            "type": "string"
        },
        {
            "name": "forwardingInstitutionId",
            "baseName": "forwardingInstitutionId",
            "type": "string"
        },
        {
            "name": "infData",
            "baseName": "infData",
            "type": "string"
        },
        {
            "name": "integratedCircuitCardRelatedData",
            "baseName": "integratedCircuitCardRelatedData",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "mastercardPromotionCode",
            "baseName": "mastercardPromotionCode",
            "type": "string"
        },
        {
            "name": "mccMessageId",
            "baseName": "mccMessageId",
            "type": "string"
        },
        {
            "name": "merchantAdviceCode",
            "baseName": "merchantAdviceCode",
            "type": "string"
        },
        {
            "name": "merchantCategoryCode",
            "baseName": "merchantCategoryCode",
            "type": "string"
        },
        {
            "name": "mobilePhoneNumber",
            "baseName": "mobilePhoneNumber",
            "type": "string"
        },
        {
            "name": "mobilePhoneServiceProviderName",
            "baseName": "mobilePhoneServiceProviderName",
            "type": "string"
        },
        {
            "name": "originalAcquiringInstitutionIdCode",
            "baseName": "originalAcquiringInstitutionIdCode",
            "type": "string"
        },
        {
            "name": "originalElectronicCommerceSecurityLevelIndicatorAndUcafCollectionIndicator",
            "baseName": "originalElectronicCommerceSecurityLevelIndicatorAndUcafCollectionIndicator",
            "type": "string"
        },
        {
            "name": "originalIssuerForwardingInstitutionIdCode",
            "baseName": "originalIssuerForwardingInstitutionIdCode",
            "type": "string"
        },
        {
            "name": "originalMessageTypeIdentifier",
            "baseName": "originalMessageTypeIdentifier",
            "type": "string"
        },
        {
            "name": "pinServiceCode",
            "baseName": "pinServiceCode",
            "type": "string"
        },
        {
            "name": "realTimeSubstantiationIndicator",
            "baseName": "realTimeSubstantiationIndicator",
            "type": "string"
        },
        {
            "name": "reasonForUcafCollectionIndicatorDowngrade",
            "baseName": "reasonForUcafCollectionIndicatorDowngrade",
            "type": "string"
        },
        {
            "name": "posCardDataTerminalInputCapability",
            "baseName": "posCardDataTerminalInputCapability",
            "type": "string"
        },
        {
            "name": "posCardholderPresence",
            "baseName": "posCardholderPresence",
            "type": "string"
        },
        {
            "name": "posCardPresence",
            "baseName": "posCardPresence",
            "type": "string"
        },
        {
            "name": "posEntryModePan",
            "baseName": "posEntryModePan",
            "type": "string"
        },
        {
            "name": "posEntryModePin",
            "baseName": "posEntryModePin",
            "type": "string"
        },
        {
            "name": "posTerminalAttendance",
            "baseName": "posTerminalAttendance",
            "type": "string"
        },
        {
            "name": "posTerminalLocation",
            "baseName": "posTerminalLocation",
            "type": "string"
        },
        {
            "name": "posTransactionStatus",
            "baseName": "posTransactionStatus",
            "type": "string"
        },
        {
            "name": "primaryAccountNumber",
            "baseName": "primaryAccountNumber",
            "type": "string"
        },
        {
            "name": "primaryAccountNumberAccountRange",
            "baseName": "primaryAccountNumberAccountRange",
            "type": "string"
        },
        {
            "name": "privateData",
            "baseName": "privateData",
            "type": "string"
        },
        {
            "name": "processingCode",
            "baseName": "processingCode",
            "type": "string"
        },
        {
            "name": "recordDataPresenceIndicator",
            "baseName": "recordDataPresenceIndicator",
            "type": "string"
        },
        {
            "name": "responseCode",
            "baseName": "responseCode",
            "type": "string"
        },
        {
            "name": "retrievalReferenceNumber",
            "baseName": "retrievalReferenceNumber",
            "type": "string"
        },
        {
            "name": "settlementActualAmount",
            "baseName": "settlementActualAmount",
            "type": "string"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string"
        },
        {
            "name": "stan",
            "baseName": "stan",
            "type": "string"
        },
        {
            "name": "storageTechnology",
            "baseName": "storageTechnology",
            "type": "string"
        },
        {
            "name": "systemsTraceAuditNumber",
            "baseName": "systemsTraceAuditNumber",
            "type": "string"
        },
        {
            "name": "tokenAssuranceLevel",
            "baseName": "tokenAssuranceLevel",
            "type": "string"
        },
        {
            "name": "tokenRequestorId",
            "baseName": "tokenRequestorId",
            "type": "string"
        },
        {
            "name": "track1",
            "baseName": "track1",
            "type": "string"
        },
        {
            "name": "track2",
            "baseName": "track2",
            "type": "string"
        },
        {
            "name": "transactionActualAmount",
            "baseName": "transactionActualAmount",
            "type": "string"
        },
        {
            "name": "transactionAmountLocal",
            "baseName": "transactionAmountLocal",
            "type": "string"
        },
        {
            "name": "transactionCategoryCode",
            "baseName": "transactionCategoryCode",
            "type": "string"
        },
        {
            "name": "transactionCurrencyCode",
            "baseName": "transactionCurrencyCode",
            "type": "string"
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "string"
        },
        {
            "name": "transmissionDateAndTime",
            "baseName": "transmissionDateAndTime",
            "type": "string"
        },
        {
            "name": "universalCardholderAuthenticationFieldUcaf",
            "baseName": "universalCardholderAuthenticationFieldUcaf",
            "type": "string"
        },
        {
            "name": "vcnProductCode",
            "baseName": "vcnProductCode",
            "type": "string"
        },
        {
            "name": "walletIdentifier",
            "baseName": "walletIdentifier",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AuthorizationDetail.attributeTypeMap;
    }
}

