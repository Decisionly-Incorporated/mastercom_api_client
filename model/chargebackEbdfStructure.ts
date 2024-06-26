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
import { CardholderDisputeChargebackDrfDocumentStructure } from './cardholderDisputeChargebackDrfDocumentStructure';
import { FraudDrfDocumentStructure } from './fraudDrfDocumentStructure';
import { PointOfInteractionErrorsDrfDocumentStructure } from './pointOfInteractionErrorsDrfDocumentStructure';
import { TransactionInformationEbdfStructure } from './transactionInformationEbdfStructure';

/**
* NOTE: When chargebackEbdfDocuments is used for automatic EBDF document generation for transactionInformation (or) fraudDrfDocument (or) cardholderDisputeChargebackDrfDocument (or) pointOfInteractionErrorsDrfDocument, no other documents should be attached on the call and documentIndicator must be set to true. Attaching documents or setting documentIndicator to false will lead to call failure.
*/
export class ChargebackEbdfStructure {
    'transactionInformation'?: TransactionInformationEbdfStructure;
    'fraudDrfDocument'?: FraudDrfDocumentStructure;
    'cardholderDisputeChargebackDrfDocument'?: CardholderDisputeChargebackDrfDocumentStructure;
    'pointOfInteractionErrorsDrfDocument'?: PointOfInteractionErrorsDrfDocumentStructure;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionInformation",
            "baseName": "transactionInformation",
            "type": "TransactionInformationEbdfStructure"
        },
        {
            "name": "fraudDrfDocument",
            "baseName": "fraudDrfDocument",
            "type": "FraudDrfDocumentStructure"
        },
        {
            "name": "cardholderDisputeChargebackDrfDocument",
            "baseName": "cardholderDisputeChargebackDrfDocument",
            "type": "CardholderDisputeChargebackDrfDocumentStructure"
        },
        {
            "name": "pointOfInteractionErrorsDrfDocument",
            "baseName": "pointOfInteractionErrorsDrfDocument",
            "type": "PointOfInteractionErrorsDrfDocumentStructure"
        }    ];

    static getAttributeTypeMap() {
        return ChargebackEbdfStructure.attributeTypeMap;
    }
}

