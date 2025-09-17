import localVarRequest from 'dropin-request';

export * from './acquirerFulfillmentRequest';
export * from './acquirerFulfillmentResponse';
export * from './authorizationDetail';
export * from './authorizationSummary';
export * from './cardholderDisputeChargebackDrfDocumentStructure';
export * from './cardholderVerificationMethodStructure';
export * from './caseFilingClaim';
export * from './caseFilingClaimsRequest';
export * from './caseFilingClaimsResponse';
export * from './caseFilingDetails';
export * from './caseFilingEbdfStructure';
export * from './caseFilingIdSourceRequest';
export * from './caseFilingImageStatusRequest';
export * from './caseFilingImageStatusResponse';
export * from './caseFilingImageStatusResponseStructure';
export * from './caseFilingLifeCycle';
export * from './caseFilingRespHistory';
export * from './caseFilingResponse';
export * from './caseFilingStatusRequest';
export * from './caseFilingStatusRequestStructure';
export * from './caseFilingStatusResponse';
export * from './caseFilingStatusResponseStructure';
export * from './chargebackAmountNameValueDetail';
export * from './chargebackDetails';
export * from './chargebackDocIndicatorsNameValueDetail';
export * from './chargebackEbdfStructure';
export * from './chargebackImageStatusRequest';
export * from './chargebackImageStatusResponse';
export * from './chargebackImageStatusResponseStructure';
export * from './chargebackMarkProcessedRequest';
export * from './chargebackMarkProcessedRequestStructure';
export * from './chargebackMarkProcessedResponse';
export * from './chargebackMarkProcessedResponseStructure';
export * from './chargebackMessageTextsNameValueDetail';
export * from './chargebackReasonCodesNameValueDetail';
export * from './chargebackResponse';
export * from './chargebackStatusRequest';
export * from './chargebackStatusRequestStructure';
export * from './chargebackStatusResponse';
export * from './chargebackStatusResponseStructure';
export * from './claimDetail';
export * from './claimResponse';
export * from './claimSummary';
export * from './clearingDetail';
export * from './clearingSummary';
export * from './createCaseRequest';
export * from './createChargebackRequest';
export * from './createChargebackSingleRequest';
export * from './createChargebackSingleReversalRequest';
export * from './createClaimRequest';
export * from './createFeeRequest';
export * from './createFeeRequestSingle';
export * from './createFraudMasterCardRequest';
export * from './createRetrievalRequest';
export * from './createRetrievalRequestSingle';
export * from './createRetrievalResponse';
export * from './currenciesNameValueDetail';
export * from './cycle';
export * from './documentResponseStructure';
export * from './documentStructure';
export * from './documentStructureResp';
export * from './errorDetail';
export * from './errors';
export * from './expeditedBillingDrfDocumentStructure';
export * from './feeCountryCodesNameValueDetail';
export * from './feeDetails';
export * from './feeMessageTextsNameValueDetail';
export * from './feeReasonCodesNameValueDetail';
export * from './feeResponse';
export * from './feeSingleResponse';
export * from './fraudAcctDeviceTypesNameValueDetail';
export * from './fraudAcctStatusesNameValueDetail';
export * from './fraudCardValidCodesNameValueDetail';
export * from './fraudDrfDocumentStructure';
export * from './fraudResponse';
export * from './fraudSubTypesNameValueDetail';
export * from './getQueueContentRequest';
export * from './healthCheckResponse';
export * from './installmentParameters';
export * from './issuerFulfillmentRequest';
export * from './loadDataForChargebackResponse';
export * from './loadDataForChargebacksRequest';
export * from './loadDataForFeeResponse';
export * from './loadDataForFeesRequest';
export * from './loadDataForFraudResponse';
export * from './loadDataForRetrievalResponse';
export * from './modelError';
export * from './originalInformationInstallments';
export * from './pointOfInteractionErrorsDrfDocumentStructure';
export * from './queue';
export * from './queueContentSummary';
export * from './reconReportDataAcknowledgeRequest';
export * from './reconReportDataAcknowledgeResponse';
export * from './reconReportDataRetrivalResponse';
export * from './retrievalDocNeededNameValueDetail';
export * from './retrievalReasonCodesNameValueDetail';
export * from './retrievalResponse';
export * from './retrievalStatusRequest';
export * from './retrievalStatusRequestStructure';
export * from './retrievalStatusResponse';
export * from './retrievalStatusResponseStructure';
export * from './retrievalSummary';
export * from './retrievalsImageStatusRequest';
export * from './retrievalsImageStatusResponse';
export * from './retrievalsImageStatusResponseStructure';
export * from './singleMessageDetail';
export * from './singleMessageSummary';
export * from './singleMessageSummaryDetails';
export * from './smsLinkedCaseFilingDrfDocumentStructure';
export * from './transactionInformationEbdfStructure';
export * from './transactionSearchRequest';
export * from './transactionSingleMessageDetail';
export * from './transactionSingleMessageSummary';
export * from './transactionSingleMessageSummaryList';
export * from './transactionSingleSearchRequest';
export * from './transactionSummary';
export * from './updateCaseRequest';
export * from './updateChargebackRequest';
export * from './updateClaimRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AcquirerFulfillmentRequest } from './acquirerFulfillmentRequest';
import { AcquirerFulfillmentResponse } from './acquirerFulfillmentResponse';
import { AuthorizationDetail } from './authorizationDetail';
import { AuthorizationSummary } from './authorizationSummary';
import { CardholderDisputeChargebackDrfDocumentStructure } from './cardholderDisputeChargebackDrfDocumentStructure';
import { CardholderVerificationMethodStructure } from './cardholderVerificationMethodStructure';
import { CaseFilingClaim } from './caseFilingClaim';
import { CaseFilingClaimsRequest } from './caseFilingClaimsRequest';
import { CaseFilingClaimsResponse } from './caseFilingClaimsResponse';
import { CaseFilingDetails } from './caseFilingDetails';
import { CaseFilingEbdfStructure } from './caseFilingEbdfStructure';
import { CaseFilingIdSourceRequest } from './caseFilingIdSourceRequest';
import { CaseFilingImageStatusRequest } from './caseFilingImageStatusRequest';
import { CaseFilingImageStatusResponse } from './caseFilingImageStatusResponse';
import { CaseFilingImageStatusResponseStructure } from './caseFilingImageStatusResponseStructure';
import { CaseFilingLifeCycle } from './caseFilingLifeCycle';
import { CaseFilingRespHistory } from './caseFilingRespHistory';
import { CaseFilingResponse } from './caseFilingResponse';
import { CaseFilingStatusRequest } from './caseFilingStatusRequest';
import { CaseFilingStatusRequestStructure } from './caseFilingStatusRequestStructure';
import { CaseFilingStatusResponse } from './caseFilingStatusResponse';
import { CaseFilingStatusResponseStructure } from './caseFilingStatusResponseStructure';
import { ChargebackAmountNameValueDetail } from './chargebackAmountNameValueDetail';
import { ChargebackDetails } from './chargebackDetails';
import { ChargebackDocIndicatorsNameValueDetail } from './chargebackDocIndicatorsNameValueDetail';
import { ChargebackEbdfStructure } from './chargebackEbdfStructure';
import { ChargebackImageStatusRequest } from './chargebackImageStatusRequest';
import { ChargebackImageStatusResponse } from './chargebackImageStatusResponse';
import { ChargebackImageStatusResponseStructure } from './chargebackImageStatusResponseStructure';
import { ChargebackMarkProcessedRequest } from './chargebackMarkProcessedRequest';
import { ChargebackMarkProcessedRequestStructure } from './chargebackMarkProcessedRequestStructure';
import { ChargebackMarkProcessedResponse } from './chargebackMarkProcessedResponse';
import { ChargebackMarkProcessedResponseStructure } from './chargebackMarkProcessedResponseStructure';
import { ChargebackMessageTextsNameValueDetail } from './chargebackMessageTextsNameValueDetail';
import { ChargebackReasonCodesNameValueDetail } from './chargebackReasonCodesNameValueDetail';
import { ChargebackResponse } from './chargebackResponse';
import { ChargebackStatusRequest } from './chargebackStatusRequest';
import { ChargebackStatusRequestStructure } from './chargebackStatusRequestStructure';
import { ChargebackStatusResponse } from './chargebackStatusResponse';
import { ChargebackStatusResponseStructure } from './chargebackStatusResponseStructure';
import { ClaimDetail } from './claimDetail';
import { ClaimResponse } from './claimResponse';
import { ClaimSummary } from './claimSummary';
import { ClearingDetail } from './clearingDetail';
import { ClearingSummary } from './clearingSummary';
import { CreateCaseRequest } from './createCaseRequest';
import { CreateChargebackRequest } from './createChargebackRequest';
import { CreateChargebackSingleRequest } from './createChargebackSingleRequest';
import { CreateChargebackSingleReversalRequest } from './createChargebackSingleReversalRequest';
import { CreateClaimRequest } from './createClaimRequest';
import { CreateFeeRequest } from './createFeeRequest';
import { CreateFeeRequestSingle } from './createFeeRequestSingle';
import { CreateFraudMasterCardRequest } from './createFraudMasterCardRequest';
import { CreateRetrievalRequest } from './createRetrievalRequest';
import { CreateRetrievalRequestSingle } from './createRetrievalRequestSingle';
import { CreateRetrievalResponse } from './createRetrievalResponse';
import { CurrenciesNameValueDetail } from './currenciesNameValueDetail';
import { Cycle } from './cycle';
import { DocumentResponseStructure } from './documentResponseStructure';
import { DocumentStructure } from './documentStructure';
import { DocumentStructureResp } from './documentStructureResp';
import { ErrorDetail } from './errorDetail';
import { Errors } from './errors';
import { ExpeditedBillingDrfDocumentStructure } from './expeditedBillingDrfDocumentStructure';
import { FeeCountryCodesNameValueDetail } from './feeCountryCodesNameValueDetail';
import { FeeDetails } from './feeDetails';
import { FeeMessageTextsNameValueDetail } from './feeMessageTextsNameValueDetail';
import { FeeReasonCodesNameValueDetail } from './feeReasonCodesNameValueDetail';
import { FeeResponse } from './feeResponse';
import { FeeSingleResponse } from './feeSingleResponse';
import { FraudAcctDeviceTypesNameValueDetail } from './fraudAcctDeviceTypesNameValueDetail';
import { FraudAcctStatusesNameValueDetail } from './fraudAcctStatusesNameValueDetail';
import { FraudCardValidCodesNameValueDetail } from './fraudCardValidCodesNameValueDetail';
import { FraudDrfDocumentStructure } from './fraudDrfDocumentStructure';
import { FraudResponse } from './fraudResponse';
import { FraudSubTypesNameValueDetail } from './fraudSubTypesNameValueDetail';
import { GetQueueContentRequest } from './getQueueContentRequest';
import { HealthCheckResponse } from './healthCheckResponse';
import { InstallmentParameters } from './installmentParameters';
import { IssuerFulfillmentRequest } from './issuerFulfillmentRequest';
import { LoadDataForChargebackResponse } from './loadDataForChargebackResponse';
import { LoadDataForChargebacksRequest } from './loadDataForChargebacksRequest';
import { LoadDataForFeeResponse } from './loadDataForFeeResponse';
import { LoadDataForFeesRequest } from './loadDataForFeesRequest';
import { LoadDataForFraudResponse } from './loadDataForFraudResponse';
import { LoadDataForRetrievalResponse } from './loadDataForRetrievalResponse';
import { ModelError } from './modelError';
import { OriginalInformationInstallments } from './originalInformationInstallments';
import { PointOfInteractionErrorsDrfDocumentStructure } from './pointOfInteractionErrorsDrfDocumentStructure';
import { Queue } from './queue';
import { QueueContentSummary } from './queueContentSummary';
import { ReconReportDataAcknowledgeRequest } from './reconReportDataAcknowledgeRequest';
import { ReconReportDataAcknowledgeResponse } from './reconReportDataAcknowledgeResponse';
import { ReconReportDataRetrivalResponse } from './reconReportDataRetrivalResponse';
import { RetrievalDocNeededNameValueDetail } from './retrievalDocNeededNameValueDetail';
import { RetrievalReasonCodesNameValueDetail } from './retrievalReasonCodesNameValueDetail';
import { RetrievalResponse } from './retrievalResponse';
import { RetrievalStatusRequest } from './retrievalStatusRequest';
import { RetrievalStatusRequestStructure } from './retrievalStatusRequestStructure';
import { RetrievalStatusResponse } from './retrievalStatusResponse';
import { RetrievalStatusResponseStructure } from './retrievalStatusResponseStructure';
import { RetrievalSummary } from './retrievalSummary';
import { RetrievalsImageStatusRequest } from './retrievalsImageStatusRequest';
import { RetrievalsImageStatusResponse } from './retrievalsImageStatusResponse';
import { RetrievalsImageStatusResponseStructure } from './retrievalsImageStatusResponseStructure';
import { SingleMessageDetail } from './singleMessageDetail';
import { SingleMessageSummary } from './singleMessageSummary';
import { SingleMessageSummaryDetails } from './singleMessageSummaryDetails';
import { SmsLinkedCaseFilingDrfDocumentStructure } from './smsLinkedCaseFilingDrfDocumentStructure';
import { TransactionInformationEbdfStructure } from './transactionInformationEbdfStructure';
import { TransactionSearchRequest } from './transactionSearchRequest';
import { TransactionSingleMessageDetail } from './transactionSingleMessageDetail';
import { TransactionSingleMessageSummary } from './transactionSingleMessageSummary';
import { TransactionSingleMessageSummaryList } from './transactionSingleMessageSummaryList';
import { TransactionSingleSearchRequest } from './transactionSingleSearchRequest';
import { TransactionSummary } from './transactionSummary';
import { UpdateCaseRequest } from './updateCaseRequest';
import { UpdateChargebackRequest } from './updateChargebackRequest';
import { UpdateClaimRequest } from './updateClaimRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AcquirerFulfillmentRequest.AcquirerResponseCdEnum": AcquirerFulfillmentRequest.AcquirerResponseCdEnum,
        "CardholderDisputeChargebackDrfDocumentStructure.TypeEnum": CardholderDisputeChargebackDrfDocumentStructure.TypeEnum,
        "ChargebackDetails.ChargebackTypeEnum": ChargebackDetails.ChargebackTypeEnum,
        "ChargebackImageStatusRequest.StatusEnum": ChargebackImageStatusRequest.StatusEnum,
        "CreateCaseRequest.CaseTypeEnum": CreateCaseRequest.CaseTypeEnum,
        "CreateCaseRequest.FilingAsEnum": CreateCaseRequest.FilingAsEnum,
        "CreateCaseRequest.UpdatedChargebackReasonCodeEnum": CreateCaseRequest.UpdatedChargebackReasonCodeEnum,
        "CreateCaseRequest.ChargebackReasonCodeEnum": CreateCaseRequest.ChargebackReasonCodeEnum,
        "CreateChargebackRequest.ChargebackTypeEnum": CreateChargebackRequest.ChargebackTypeEnum,
        "CreateChargebackSingleRequest.BrandEnum": CreateChargebackSingleRequest.BrandEnum,
        "CreateChargebackSingleRequest.UsageCodeEnum": CreateChargebackSingleRequest.UsageCodeEnum,
        "CreateChargebackSingleRequest.ChargebackTypeEnum": CreateChargebackSingleRequest.ChargebackTypeEnum,
        "CreateChargebackSingleRequest.DataRecordTextEnum": CreateChargebackSingleRequest.DataRecordTextEnum,
        "CreateChargebackSingleRequest.DocumentIndicatorEnum": CreateChargebackSingleRequest.DocumentIndicatorEnum,
        "CreateChargebackSingleRequest.DocumentTypeEnum": CreateChargebackSingleRequest.DocumentTypeEnum,
        "CreateChargebackSingleRequest.IllegibleItemCdEnum": CreateChargebackSingleRequest.IllegibleItemCdEnum,
        "CreateChargebackSingleRequest.ProgramEnum": CreateChargebackSingleRequest.ProgramEnum,
        "CreateChargebackSingleReversalRequest.ReversalReasonCodeEnum": CreateChargebackSingleReversalRequest.ReversalReasonCodeEnum,
        "CreateClaimRequest.ClaimTypeEnum": CreateClaimRequest.ClaimTypeEnum,
        "CreateFeeRequestSingle.ConditionIndicatorEnum": CreateFeeRequestSingle.ConditionIndicatorEnum,
        "CreateFeeRequestSingle.FunctionCodeEnum": CreateFeeRequestSingle.FunctionCodeEnum,
        "CreateFeeRequestSingle.ReasonCodeEnum": CreateFeeRequestSingle.ReasonCodeEnum,
        "CreateFraudMasterCardRequest.AcctStatusEnum": CreateFraudMasterCardRequest.AcctStatusEnum,
        "CreateFraudMasterCardRequest.ChgbkIndicatorEnum": CreateFraudMasterCardRequest.ChgbkIndicatorEnum,
        "CreateFraudMasterCardRequest.CvcInvalidIndicatorEnum": CreateFraudMasterCardRequest.CvcInvalidIndicatorEnum,
        "CreateFraudMasterCardRequest.DeviceTypeEnum": CreateFraudMasterCardRequest.DeviceTypeEnum,
        "CreateFraudMasterCardRequest.FraudTypeEnum": CreateFraudMasterCardRequest.FraudTypeEnum,
        "CreateFraudMasterCardRequest.SubTypeEnum": CreateFraudMasterCardRequest.SubTypeEnum,
        "CreateRetrievalRequest.RetrievalRequestReasonEnum": CreateRetrievalRequest.RetrievalRequestReasonEnum,
        "CreateRetrievalRequest.DocNeededEnum": CreateRetrievalRequest.DocNeededEnum,
        "CreateRetrievalRequestSingle.DocumentTypeEnum": CreateRetrievalRequestSingle.DocumentTypeEnum,
        "CreateRetrievalRequestSingle.UsageCodeEnum": CreateRetrievalRequestSingle.UsageCodeEnum,
        "Cycle": Cycle,
        "FraudDrfDocumentStructure.CardIssuerRegionEnum": FraudDrfDocumentStructure.CardIssuerRegionEnum,
        "IssuerFulfillmentRequest.IssuerResponseCdEnum": IssuerFulfillmentRequest.IssuerResponseCdEnum,
        "IssuerFulfillmentRequest.RejectReasonCdEnum": IssuerFulfillmentRequest.RejectReasonCdEnum,
        "LoadDataForChargebacksRequest.ChargebackTypeEnum": LoadDataForChargebacksRequest.ChargebackTypeEnum,
        "PointOfInteractionErrorsDrfDocumentStructure.TypeEnum": PointOfInteractionErrorsDrfDocumentStructure.TypeEnum,
        "RetrievalsImageStatusRequest.StatusEnum": RetrievalsImageStatusRequest.StatusEnum,
        "UpdateCaseRequest.ActionEnum": UpdateCaseRequest.ActionEnum,
        "UpdateCaseRequest.RebuttedAsEnum": UpdateCaseRequest.RebuttedAsEnum,
        "UpdateCaseRequest.DocRetryAsEnum": UpdateCaseRequest.DocRetryAsEnum,
        "UpdateClaimRequest.ActionEnum": UpdateClaimRequest.ActionEnum,
        "UpdateClaimRequest.CloseClaimReasonCodeEnum": UpdateClaimRequest.CloseClaimReasonCodeEnum,
}

let typeMap: {[index: string]: any} = {
    "AcquirerFulfillmentRequest": AcquirerFulfillmentRequest,
    "AcquirerFulfillmentResponse": AcquirerFulfillmentResponse,
    "AuthorizationDetail": AuthorizationDetail,
    "AuthorizationSummary": AuthorizationSummary,
    "CardholderDisputeChargebackDrfDocumentStructure": CardholderDisputeChargebackDrfDocumentStructure,
    "CardholderVerificationMethodStructure": CardholderVerificationMethodStructure,
    "CaseFilingClaim": CaseFilingClaim,
    "CaseFilingClaimsRequest": CaseFilingClaimsRequest,
    "CaseFilingClaimsResponse": CaseFilingClaimsResponse,
    "CaseFilingDetails": CaseFilingDetails,
    "CaseFilingEbdfStructure": CaseFilingEbdfStructure,
    "CaseFilingIdSourceRequest": CaseFilingIdSourceRequest,
    "CaseFilingImageStatusRequest": CaseFilingImageStatusRequest,
    "CaseFilingImageStatusResponse": CaseFilingImageStatusResponse,
    "CaseFilingImageStatusResponseStructure": CaseFilingImageStatusResponseStructure,
    "CaseFilingLifeCycle": CaseFilingLifeCycle,
    "CaseFilingRespHistory": CaseFilingRespHistory,
    "CaseFilingResponse": CaseFilingResponse,
    "CaseFilingStatusRequest": CaseFilingStatusRequest,
    "CaseFilingStatusRequestStructure": CaseFilingStatusRequestStructure,
    "CaseFilingStatusResponse": CaseFilingStatusResponse,
    "CaseFilingStatusResponseStructure": CaseFilingStatusResponseStructure,
    "ChargebackAmountNameValueDetail": ChargebackAmountNameValueDetail,
    "ChargebackDetails": ChargebackDetails,
    "ChargebackDocIndicatorsNameValueDetail": ChargebackDocIndicatorsNameValueDetail,
    "ChargebackEbdfStructure": ChargebackEbdfStructure,
    "ChargebackImageStatusRequest": ChargebackImageStatusRequest,
    "ChargebackImageStatusResponse": ChargebackImageStatusResponse,
    "ChargebackImageStatusResponseStructure": ChargebackImageStatusResponseStructure,
    "ChargebackMarkProcessedRequest": ChargebackMarkProcessedRequest,
    "ChargebackMarkProcessedRequestStructure": ChargebackMarkProcessedRequestStructure,
    "ChargebackMarkProcessedResponse": ChargebackMarkProcessedResponse,
    "ChargebackMarkProcessedResponseStructure": ChargebackMarkProcessedResponseStructure,
    "ChargebackMessageTextsNameValueDetail": ChargebackMessageTextsNameValueDetail,
    "ChargebackReasonCodesNameValueDetail": ChargebackReasonCodesNameValueDetail,
    "ChargebackResponse": ChargebackResponse,
    "ChargebackStatusRequest": ChargebackStatusRequest,
    "ChargebackStatusRequestStructure": ChargebackStatusRequestStructure,
    "ChargebackStatusResponse": ChargebackStatusResponse,
    "ChargebackStatusResponseStructure": ChargebackStatusResponseStructure,
    "ClaimDetail": ClaimDetail,
    "ClaimResponse": ClaimResponse,
    "ClaimSummary": ClaimSummary,
    "ClearingDetail": ClearingDetail,
    "ClearingSummary": ClearingSummary,
    "CreateCaseRequest": CreateCaseRequest,
    "CreateChargebackRequest": CreateChargebackRequest,
    "CreateChargebackSingleRequest": CreateChargebackSingleRequest,
    "CreateChargebackSingleReversalRequest": CreateChargebackSingleReversalRequest,
    "CreateClaimRequest": CreateClaimRequest,
    "CreateFeeRequest": CreateFeeRequest,
    "CreateFeeRequestSingle": CreateFeeRequestSingle,
    "CreateFraudMasterCardRequest": CreateFraudMasterCardRequest,
    "CreateRetrievalRequest": CreateRetrievalRequest,
    "CreateRetrievalRequestSingle": CreateRetrievalRequestSingle,
    "CreateRetrievalResponse": CreateRetrievalResponse,
    "CurrenciesNameValueDetail": CurrenciesNameValueDetail,
    "DocumentResponseStructure": DocumentResponseStructure,
    "DocumentStructure": DocumentStructure,
    "DocumentStructureResp": DocumentStructureResp,
    "ErrorDetail": ErrorDetail,
    "Errors": Errors,
    "ExpeditedBillingDrfDocumentStructure": ExpeditedBillingDrfDocumentStructure,
    "FeeCountryCodesNameValueDetail": FeeCountryCodesNameValueDetail,
    "FeeDetails": FeeDetails,
    "FeeMessageTextsNameValueDetail": FeeMessageTextsNameValueDetail,
    "FeeReasonCodesNameValueDetail": FeeReasonCodesNameValueDetail,
    "FeeResponse": FeeResponse,
    "FeeSingleResponse": FeeSingleResponse,
    "FraudAcctDeviceTypesNameValueDetail": FraudAcctDeviceTypesNameValueDetail,
    "FraudAcctStatusesNameValueDetail": FraudAcctStatusesNameValueDetail,
    "FraudCardValidCodesNameValueDetail": FraudCardValidCodesNameValueDetail,
    "FraudDrfDocumentStructure": FraudDrfDocumentStructure,
    "FraudResponse": FraudResponse,
    "FraudSubTypesNameValueDetail": FraudSubTypesNameValueDetail,
    "GetQueueContentRequest": GetQueueContentRequest,
    "HealthCheckResponse": HealthCheckResponse,
    "InstallmentParameters": InstallmentParameters,
    "IssuerFulfillmentRequest": IssuerFulfillmentRequest,
    "LoadDataForChargebackResponse": LoadDataForChargebackResponse,
    "LoadDataForChargebacksRequest": LoadDataForChargebacksRequest,
    "LoadDataForFeeResponse": LoadDataForFeeResponse,
    "LoadDataForFeesRequest": LoadDataForFeesRequest,
    "LoadDataForFraudResponse": LoadDataForFraudResponse,
    "LoadDataForRetrievalResponse": LoadDataForRetrievalResponse,
    "ModelError": ModelError,
    "OriginalInformationInstallments": OriginalInformationInstallments,
    "PointOfInteractionErrorsDrfDocumentStructure": PointOfInteractionErrorsDrfDocumentStructure,
    "Queue": Queue,
    "QueueContentSummary": QueueContentSummary,
    "ReconReportDataAcknowledgeRequest": ReconReportDataAcknowledgeRequest,
    "ReconReportDataAcknowledgeResponse": ReconReportDataAcknowledgeResponse,
    "ReconReportDataRetrivalResponse": ReconReportDataRetrivalResponse,
    "RetrievalDocNeededNameValueDetail": RetrievalDocNeededNameValueDetail,
    "RetrievalReasonCodesNameValueDetail": RetrievalReasonCodesNameValueDetail,
    "RetrievalResponse": RetrievalResponse,
    "RetrievalStatusRequest": RetrievalStatusRequest,
    "RetrievalStatusRequestStructure": RetrievalStatusRequestStructure,
    "RetrievalStatusResponse": RetrievalStatusResponse,
    "RetrievalStatusResponseStructure": RetrievalStatusResponseStructure,
    "RetrievalSummary": RetrievalSummary,
    "RetrievalsImageStatusRequest": RetrievalsImageStatusRequest,
    "RetrievalsImageStatusResponse": RetrievalsImageStatusResponse,
    "RetrievalsImageStatusResponseStructure": RetrievalsImageStatusResponseStructure,
    "SingleMessageDetail": SingleMessageDetail,
    "SingleMessageSummary": SingleMessageSummary,
    "SingleMessageSummaryDetails": SingleMessageSummaryDetails,
    "SmsLinkedCaseFilingDrfDocumentStructure": SmsLinkedCaseFilingDrfDocumentStructure,
    "TransactionInformationEbdfStructure": TransactionInformationEbdfStructure,
    "TransactionSearchRequest": TransactionSearchRequest,
    "TransactionSingleMessageDetail": TransactionSingleMessageDetail,
    "TransactionSingleMessageSummary": TransactionSingleMessageSummary,
    "TransactionSingleMessageSummaryList": TransactionSingleMessageSummaryList,
    "TransactionSingleSearchRequest": TransactionSingleSearchRequest,
    "TransactionSummary": TransactionSummary,
    "UpdateCaseRequest": UpdateCaseRequest,
    "UpdateChargebackRequest": UpdateChargebackRequest,
    "UpdateClaimRequest": UpdateClaimRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
