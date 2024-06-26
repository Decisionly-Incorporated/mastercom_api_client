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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { AcquirerFulfillmentRequest } from '../model/acquirerFulfillmentRequest';
import { AcquirerFulfillmentResponse } from '../model/acquirerFulfillmentResponse';
import { CreateRetrievalRequest } from '../model/createRetrievalRequest';
import { CreateRetrievalResponse } from '../model/createRetrievalResponse';
import { DocumentResponseStructure } from '../model/documentResponseStructure';
import { Errors } from '../model/errors';
import { IssuerFulfillmentRequest } from '../model/issuerFulfillmentRequest';
import { LoadDataForRetrievalResponse } from '../model/loadDataForRetrievalResponse';
import { RetrievalResponse } from '../model/retrievalResponse';
import { RetrievalStatusRequest } from '../model/retrievalStatusRequest';
import { RetrievalStatusResponse } from '../model/retrievalStatusResponse';
import { RetrievalsImageStatusRequest } from '../model/retrievalsImageStatusRequest';
import { RetrievalsImageStatusResponse } from '../model/retrievalsImageStatusResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.mastercard.com/mastercom';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum RetrievalsApiApiKeys {
}

export class RetrievalsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: RetrievalsApiApiKeys, value: string) {
        (this.authentications as any)[RetrievalsApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * After receiving a retrieval request from an issuer, an acquirer uses this endpoint to either provide a copy or substitute draft of the transaction information document (TID) or provide a reason for failing to fulfill the retrieval request.   NOTE: Below acquirerResponseCd codes will be accepted starting on February 26th, 2023.<br>  A - Funds Movement Request<br>  B - Refunded<br>  C - Initiating Refund<br>  E - Reject Collaboration<br>  F - IIAS Unfulfillable<br>  G - IIAS Invalid request information<br>  H - IIAS Fulfilled outside MasterCom system
     * @param claimId Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
     * @param requestId Request Id for the retrieval request.   Length: 1-19   Valid Values/Format: Numeric
     * @param body Acquirer Retrieval Fulfillment information
     */
    public async acqFulfillRetrievalRequest (claimId: string, requestId: string, body: AcquirerFulfillmentRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AcquirerFulfillmentResponse;  }> {
        const localVarPath = this.basePath + '/v6/claims/{claim-id}/retrievalrequests/{request-id}/fulfillments'
            .replace('{' + 'claim-id' + '}', encodeURIComponent(String(claimId)))
            .replace('{' + 'request-id' + '}', encodeURIComponent(String(requestId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new Error('Required parameter claimId was null or undefined when calling acqFulfillRetrievalRequest.');
        }

        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new Error('Required parameter requestId was null or undefined when calling acqFulfillRetrievalRequest.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling acqFulfillRetrievalRequest.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "AcquirerFulfillmentRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: AcquirerFulfillmentResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AcquirerFulfillmentResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Prior to creating a chargeback, an issuer uses this endpoint to create a retrieval request for the acquirer to fulfill by providing a copy of the transaction information document (TID). The TID is used to satisfy a cardholder\'s inquiry or to satisfy an issuer\'s investigation of an original transaction.   NOTE: an issuer is not required to create a retrieval request in order to create a first chargeback on a claim.   NOTE: Below retrievalRequestReason codes will be accepted until October 23th, 2021.<br>  6305 - Cardholder does not agree with amount billed<br>  6321 - Cardholder does not recognize transaction<br>  6322 - Request Transaction Certificate for a chip transaction<br>  6323 - Cardholder needs information for personal records<br>  6341 - Fraud investigation<br>  6342 - Potential chargeback or compliance documentation is required<br>  6343 - IIAS Audit (for healthcare transactions only)<br>  6390 - Identifies a syntax error return   NOTE: Below retrievalRequestReason code will be accepted for creation of retrieval request starting on October 24th, 2021.<br>  6343 - IIAS Audit (for healthcare transactions only)
     * @param claimId Claim Id for the retrieval request.   Length: 1-19   Valid Values/Format: Numeric
     * @param body Create Retrieval Request
     */
    public async createRetrievalRequest (claimId: string, body: CreateRetrievalRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateRetrievalResponse;  }> {
        const localVarPath = this.basePath + '/v6/claims/{claim-id}/retrievalrequests'
            .replace('{' + 'claim-id' + '}', encodeURIComponent(String(claimId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new Error('Required parameter claimId was null or undefined when calling createRetrievalRequest.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createRetrievalRequest.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "CreateRetrievalRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateRetrievalResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateRetrievalResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * An issuer uses this endpoint to retrieve values associated with a claim in preparation for creating a retrieval request.
     * @param claimId Claim Id for the retrieval rrequest.   Length: 1-19   Valid Values/Format: Numeric
     */
    public async getDataForCreateRetrievalRequest (claimId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: LoadDataForRetrievalResponse;  }> {
        const localVarPath = this.basePath + '/v6/claims/{claim-id}/retrievalrequests/loaddataforretrievalrequests'
            .replace('{' + 'claim-id' + '}', encodeURIComponent(String(claimId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new Error('Required parameter claimId was null or undefined when calling getDataForCreateRetrievalRequest.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: LoadDataForRetrievalResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "LoadDataForRetrievalResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Issuers and acquirers use this endpoint to retrieve all documents from acquirers associated with retrieval request fulfillment.
     * @param claimId The Claim Id.   Length: 1-19   Valid Values/Format: Numeric
     * @param requestId The Request Id.   Length: 1-19   Valid Values/Format: Numeric
     * @param format File Format.   Length: 8-11   Valid Values/Format: ORIGINAL, MERGED_TIFF, MERGED_PDF
     */
    public async getRetrievalDoc (claimId: string, requestId: string, format: 'ORIGINAL' | 'MERGED_TIFF' | 'MERGED_PDF', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DocumentResponseStructure;  }> {
        const localVarPath = this.basePath + '/v6/claims/{claim-id}/retrievalrequests/{request-id}/documents'
            .replace('{' + 'claim-id' + '}', encodeURIComponent(String(claimId)))
            .replace('{' + 'request-id' + '}', encodeURIComponent(String(requestId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new Error('Required parameter claimId was null or undefined when calling getRetrievalDoc.');
        }

        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new Error('Required parameter requestId was null or undefined when calling getRetrievalDoc.');
        }

        // verify required parameter 'format' is not null or undefined
        if (format === null || format === undefined) {
            throw new Error('Required parameter format was null or undefined when calling getRetrievalDoc.');
        }

        if (format !== undefined) {
            localVarQueryParameters['format'] = ObjectSerializer.serialize(format, "'ORIGINAL' | 'MERGED_TIFF' | 'MERGED_PDF'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DocumentResponseStructure;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DocumentResponseStructure");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * After an acquirer fulfills a retrieval request, an issuer uses this endpoint to approve or reject a retrieval request fulfillment. The issuer approves the fulfillment or rejects the fulfillment if the documentation does not meet requirements.
     * @param claimId Claim Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
     * @param requestId Request Id for the Retrieval Request.   Length: 1-19   Valid Values/Format: Numeric
     * @param body Issuer Fulfillment Response
     */
    public async issuerResponseRetrievalRequest (claimId: string, requestId: string, body: IssuerFulfillmentRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: RetrievalResponse;  }> {
        const localVarPath = this.basePath + '/v6/claims/{claim-id}/retrievalrequests/{request-id}/fulfillments/response'
            .replace('{' + 'claim-id' + '}', encodeURIComponent(String(claimId)))
            .replace('{' + 'request-id' + '}', encodeURIComponent(String(requestId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new Error('Required parameter claimId was null or undefined when calling issuerResponseRetrievalRequest.');
        }

        // verify required parameter 'requestId' is not null or undefined
        if (requestId === null || requestId === undefined) {
            throw new Error('Required parameter requestId was null or undefined when calling issuerResponseRetrievalRequest.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling issuerResponseRetrievalRequest.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "IssuerFulfillmentRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: RetrievalResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "RetrievalResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Issuers and acquirers use this endpoint to search for documents that have a specific status (completed, pending, failed, unavailable, and document not applicable) for retrieval requests.   Note: For customers with high volumes of fulfillments or large numbers of BINs, Mastercom recommends using the Retrieval Fullfilment Status endpoint rather than the Retrieval Fullfilment Image Status endpoint.
     * @param body Retrieval information
     */
    public async retrieveFulfillmentImageStatus (body: RetrievalsImageStatusRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: RetrievalsImageStatusResponse;  }> {
        const localVarPath = this.basePath + '/v6/retrievalrequests/imagestatus';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling retrieveFulfillmentImageStatus.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "RetrievalsImageStatusRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: RetrievalsImageStatusResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "RetrievalsImageStatusResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Issuers and acquirers use this endpoint to search for the status of documents that are associated with a specific list of retrieval requests.   Note: issuers and acquirers may send a maximum of 2,000 retrieval fulfillment IDs within a single request.
     * @param body Retrieval information
     */
    public async retrieveFulfillmentStatus (body: RetrievalStatusRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: RetrievalStatusResponse;  }> {
        const localVarPath = this.basePath + '/v6/retrievalrequests/status';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling retrieveFulfillmentStatus.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "RetrievalStatusRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: RetrievalStatusResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "RetrievalStatusResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
