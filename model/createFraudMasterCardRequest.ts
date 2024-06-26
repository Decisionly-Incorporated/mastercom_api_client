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

export class CreateFraudMasterCardRequest {
    /**
    * Account status.   Length: 12-20   Valid Values/Format: ACCT_IS_OPEN, ACCT_HAS_BEEN_CLOSED
    */
    'acctStatus'?: CreateFraudMasterCardRequest.AcctStatusEnum;
    /**
    * Chargeback Indicator.   Length:    Valid Values/Format: (VALUES)/(Numeric, Alphanumeric, Special Char)
    */
    'chgbkIndicator': CreateFraudMasterCardRequest.ChgbkIndicatorEnum;
    /**
    * CVC Invalid Indicator.   Length: 1   Valid Values/Format: Y, *, M, N, P, U, ?, E
    */
    'cvcInvalidIndicator': CreateFraudMasterCardRequest.CvcInvalidIndicatorEnum;
    /**
    * Account Device Type.   Length: 1   Valid Values/Format: 1, 2, 3, 4, A, B, C, D, E, F, G, H, I, J
    */
    'deviceType'?: CreateFraudMasterCardRequest.DeviceTypeEnum;
    /**
    * Fraud Type.   Length: 2   Valid Values/Format: 00, 01, 02, 03 ,04 ,05, 06, 07, 51
    */
    'fraudType': CreateFraudMasterCardRequest.FraudTypeEnum;
    /**
    * Fraud Report Date.   Length: 10   Valid Values/Format: Date (yyyy-MM-dd)
    */
    'reportDate': string;
    /**
    * Fraud Sub Type.   Length: 1   Valid Values/Format: K, N, P, U
    */
    'subType': CreateFraudMasterCardRequest.SubTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acctStatus",
            "baseName": "acctStatus",
            "type": "CreateFraudMasterCardRequest.AcctStatusEnum"
        },
        {
            "name": "chgbkIndicator",
            "baseName": "chgbkIndicator",
            "type": "CreateFraudMasterCardRequest.ChgbkIndicatorEnum"
        },
        {
            "name": "cvcInvalidIndicator",
            "baseName": "cvcInvalidIndicator",
            "type": "CreateFraudMasterCardRequest.CvcInvalidIndicatorEnum"
        },
        {
            "name": "deviceType",
            "baseName": "deviceType",
            "type": "CreateFraudMasterCardRequest.DeviceTypeEnum"
        },
        {
            "name": "fraudType",
            "baseName": "fraudType",
            "type": "CreateFraudMasterCardRequest.FraudTypeEnum"
        },
        {
            "name": "reportDate",
            "baseName": "reportDate",
            "type": "string"
        },
        {
            "name": "subType",
            "baseName": "subType",
            "type": "CreateFraudMasterCardRequest.SubTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateFraudMasterCardRequest.attributeTypeMap;
    }
}

export namespace CreateFraudMasterCardRequest {
    export enum AcctStatusEnum {
        IsOpen = <any> 'ACCT_IS_OPEN',
        HasBeenClosed = <any> 'ACCT_HAS_BEEN_CLOSED'
    }
    export enum ChgbkIndicatorEnum {
        _0 = <any> '0',
        _1 = <any> '1'
    }
    export enum CvcInvalidIndicatorEnum {
        Y = <any> 'Y',
        Star = <any> '*',
        M = <any> 'M',
        N = <any> 'N',
        P = <any> 'P',
        U = <any> 'U',
        QuestionMark = <any> '?',
        E = <any> 'E'
    }
    export enum DeviceTypeEnum {
        _1 = <any> '1',
        _2 = <any> '2',
        _3 = <any> '3',
        _4 = <any> '4',
        A = <any> 'A',
        B = <any> 'B',
        C = <any> 'C',
        D = <any> 'D',
        E = <any> 'E',
        F = <any> 'F',
        G = <any> 'G',
        H = <any> 'H',
        I = <any> 'I',
        J = <any> 'J'
    }
    export enum FraudTypeEnum {
        _00 = <any> '00',
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04',
        _05 = <any> '05',
        _06 = <any> '06',
        _07 = <any> '07',
        _51 = <any> '51'
    }
    export enum SubTypeEnum {
        K = <any> 'K',
        N = <any> 'N',
        P = <any> 'P',
        U = <any> 'U'
    }
}
