"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../base/query/v1beta1/pagination");
const staking_1 = require("./staking");
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseQueryValidatorsRequest() {
    return { status: "", pagination: undefined };
}
exports.QueryValidatorsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? String(object.status) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValidatorsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorsResponse() {
    return { validators: [], pagination: undefined };
}
exports.QueryValidatorsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => staking_1.Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? staking_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValidatorsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorsResponse();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.Validator.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorRequest() {
    return { validatorAddr: "" };
}
exports.QueryValidatorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.validatorAddr = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    create(base) {
        return exports.QueryValidatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryValidatorResponse() {
    return { validator: undefined };
}
exports.QueryValidatorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { validator: isSet(object.validator) ? staking_1.Validator.fromJSON(object.validator) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator ? staking_1.Validator.toJSON(message.validator) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValidatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorResponse();
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? staking_1.Validator.fromPartial(object.validator)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorDelegationsRequest() {
    return { validatorAddr: "", pagination: undefined };
}
exports.QueryValidatorDelegationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.validatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValidatorDelegationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorDelegationsRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorDelegationsResponse() {
    return { delegationResponses: [], pagination: undefined };
}
exports.QueryValidatorDelegationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.delegationResponses) {
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegationResponses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegationResponses)
                ? object.delegationResponses.map((e) => staking_1.DelegationResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegationResponses) {
            obj.delegationResponses = message.delegationResponses.map((e) => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegationResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValidatorDelegationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorDelegationsResponse();
        message.delegationResponses = ((_a = object.delegationResponses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.DelegationResponse.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
    return { validatorAddr: "", pagination: undefined };
}
exports.QueryValidatorUnbondingDelegationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.validatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValidatorUnbondingDelegationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
    return { unbondingResponses: [], pagination: undefined };
}
exports.QueryValidatorUnbondingDelegationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.unbondingResponses) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.unbondingResponses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            unbondingResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingResponses)
                ? object.unbondingResponses.map((e) => staking_1.UnbondingDelegation.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbondingResponses) {
            obj.unbondingResponses = message.unbondingResponses.map((e) => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbondingResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryValidatorUnbondingDelegationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        message.unbondingResponses = ((_a = object.unbondingResponses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.UnbondingDelegation.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegationRequest() {
    return { delegatorAddr: "", validatorAddr: "" };
}
exports.QueryDelegationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.validatorAddr = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
            validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    create(base) {
        return exports.QueryDelegationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegationRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegationResponse() {
    return { delegationResponse: undefined };
}
exports.QueryDelegationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegationResponse !== undefined) {
            staking_1.DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegationResponse = staking_1.DelegationResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegationResponse: isSet(object.delegationResponse)
                ? staking_1.DelegationResponse.fromJSON(object.delegationResponse)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegationResponse !== undefined && (obj.delegationResponse = message.delegationResponse
            ? staking_1.DelegationResponse.toJSON(message.delegationResponse)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDelegationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationResponse();
        message.delegationResponse = (object.delegationResponse !== undefined && object.delegationResponse !== null)
            ? staking_1.DelegationResponse.fromPartial(object.delegationResponse)
            : undefined;
        return message;
    },
};
function createBaseQueryUnbondingDelegationRequest() {
    return { delegatorAddr: "", validatorAddr: "" };
}
exports.QueryUnbondingDelegationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.validatorAddr = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
            validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    create(base) {
        return exports.QueryUnbondingDelegationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryUnbondingDelegationRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryUnbondingDelegationResponse() {
    return { unbond: undefined };
}
exports.QueryUnbondingDelegationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.unbond !== undefined) {
            staking_1.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.unbond = staking_1.UnbondingDelegation.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { unbond: isSet(object.unbond) ? staking_1.UnbondingDelegation.fromJSON(object.unbond) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.unbond !== undefined &&
            (obj.unbond = message.unbond ? staking_1.UnbondingDelegation.toJSON(message.unbond) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryUnbondingDelegationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingDelegationResponse();
        message.unbond = (object.unbond !== undefined && object.unbond !== null)
            ? staking_1.UnbondingDelegation.fromPartial(object.unbond)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegatorDelegationsRequest() {
    return { delegatorAddr: "", pagination: undefined };
}
exports.QueryDelegatorDelegationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDelegatorDelegationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorDelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegatorDelegationsResponse() {
    return { delegationResponses: [], pagination: undefined };
}
exports.QueryDelegatorDelegationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.delegationResponses) {
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegationResponses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegationResponses)
                ? object.delegationResponses.map((e) => staking_1.DelegationResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegationResponses) {
            obj.delegationResponses = message.delegationResponses.map((e) => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegationResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDelegatorDelegationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorDelegationsResponse();
        message.delegationResponses = ((_a = object.delegationResponses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.DelegationResponse.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
    return { delegatorAddr: "", pagination: undefined };
}
exports.QueryDelegatorUnbondingDelegationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDelegatorUnbondingDelegationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
    return { unbondingResponses: [], pagination: undefined };
}
exports.QueryDelegatorUnbondingDelegationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.unbondingResponses) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.unbondingResponses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            unbondingResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingResponses)
                ? object.unbondingResponses.map((e) => staking_1.UnbondingDelegation.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbondingResponses) {
            obj.unbondingResponses = message.unbondingResponses.map((e) => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbondingResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDelegatorUnbondingDelegationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        message.unbondingResponses = ((_a = object.unbondingResponses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.UnbondingDelegation.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryRedelegationsRequest() {
    return { delegatorAddr: "", srcValidatorAddr: "", dstValidatorAddr: "", pagination: undefined };
}
exports.QueryRedelegationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.srcValidatorAddr !== "") {
            writer.uint32(18).string(message.srcValidatorAddr);
        }
        if (message.dstValidatorAddr !== "") {
            writer.uint32(26).string(message.dstValidatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.srcValidatorAddr = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.dstValidatorAddr = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
            srcValidatorAddr: isSet(object.srcValidatorAddr) ? String(object.srcValidatorAddr) : "",
            dstValidatorAddr: isSet(object.dstValidatorAddr) ? String(object.dstValidatorAddr) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
        message.srcValidatorAddr !== undefined && (obj.srcValidatorAddr = message.srcValidatorAddr);
        message.dstValidatorAddr !== undefined && (obj.dstValidatorAddr = message.dstValidatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryRedelegationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryRedelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.srcValidatorAddr = (_b = object.srcValidatorAddr) !== null && _b !== void 0 ? _b : "";
        message.dstValidatorAddr = (_c = object.dstValidatorAddr) !== null && _c !== void 0 ? _c : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryRedelegationsResponse() {
    return { redelegationResponses: [], pagination: undefined };
}
exports.QueryRedelegationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.redelegationResponses) {
            staking_1.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.redelegationResponses.push(staking_1.RedelegationResponse.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            redelegationResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegationResponses)
                ? object.redelegationResponses.map((e) => staking_1.RedelegationResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redelegationResponses) {
            obj.redelegationResponses = message.redelegationResponses.map((e) => e ? staking_1.RedelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.redelegationResponses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryRedelegationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRedelegationsResponse();
        message.redelegationResponses = ((_a = object.redelegationResponses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.RedelegationResponse.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorsRequest() {
    return { delegatorAddr: "", pagination: undefined };
}
exports.QueryDelegatorValidatorsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDelegatorValidatorsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorValidatorsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorsResponse() {
    return { validators: [], pagination: undefined };
}
exports.QueryDelegatorValidatorsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map((e) => staking_1.Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? staking_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDelegatorValidatorsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.Validator.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorRequest() {
    return { delegatorAddr: "", validatorAddr: "" };
}
exports.QueryDelegatorValidatorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.delegatorAddr = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.validatorAddr = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
            validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
        message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
        return obj;
    },
    create(base) {
        return exports.QueryDelegatorValidatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegatorValidatorRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegatorValidatorResponse() {
    return { validator: undefined };
}
exports.QueryDelegatorValidatorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { validator: isSet(object.validator) ? staking_1.Validator.fromJSON(object.validator) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator ? staking_1.Validator.toJSON(message.validator) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryDelegatorValidatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorResponse();
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? staking_1.Validator.fromPartial(object.validator)
            : undefined;
        return message;
    },
};
function createBaseQueryHistoricalInfoRequest() {
    return { height: long_1.default.ZERO };
}
exports.QueryHistoricalInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.height = reader.int64();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || long_1.default.ZERO).toString());
        return obj;
    },
    create(base) {
        return exports.QueryHistoricalInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalInfoRequest();
        message.height = (object.height !== undefined && object.height !== null)
            ? long_1.default.fromValue(object.height)
            : long_1.default.ZERO;
        return message;
    },
};
function createBaseQueryHistoricalInfoResponse() {
    return { hist: undefined };
}
exports.QueryHistoricalInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hist !== undefined) {
            staking_1.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.hist = staking_1.HistoricalInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { hist: isSet(object.hist) ? staking_1.HistoricalInfo.fromJSON(object.hist) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.hist !== undefined && (obj.hist = message.hist ? staking_1.HistoricalInfo.toJSON(message.hist) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryHistoricalInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalInfoResponse();
        message.hist = (object.hist !== undefined && object.hist !== null)
            ? staking_1.HistoricalInfo.fromPartial(object.hist)
            : undefined;
        return message;
    },
};
function createBaseQueryPoolRequest() {
    return {};
}
exports.QueryPoolRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryPoolRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryPoolRequest();
        return message;
    },
};
function createBaseQueryPoolResponse() {
    return { pool: undefined };
}
exports.QueryPoolResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pool !== undefined) {
            staking_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.pool = staking_1.Pool.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { pool: isSet(object.pool) ? staking_1.Pool.fromJSON(object.pool) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? staking_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryPoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = (object.pool !== undefined && object.pool !== null) ? staking_1.Pool.fromPartial(object.pool) : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? staking_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? staking_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? staking_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.staking.v1beta1.Query";
        this.rpc = rpc;
        this.Validators = this.Validators.bind(this);
        this.Validator = this.Validator.bind(this);
        this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
        this.ValidatorUnbondingDelegations = this.ValidatorUnbondingDelegations.bind(this);
        this.Delegation = this.Delegation.bind(this);
        this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
        this.DelegatorDelegations = this.DelegatorDelegations.bind(this);
        this.DelegatorUnbondingDelegations = this.DelegatorUnbondingDelegations.bind(this);
        this.Redelegations = this.Redelegations.bind(this);
        this.DelegatorValidators = this.DelegatorValidators.bind(this);
        this.DelegatorValidator = this.DelegatorValidator.bind(this);
        this.HistoricalInfo = this.HistoricalInfo.bind(this);
        this.Pool = this.Pool.bind(this);
        this.Params = this.Params.bind(this);
    }
    Validators(request) {
        const data = exports.QueryValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Validators", data);
        return promise.then((data) => exports.QueryValidatorsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Validator(request) {
        const data = exports.QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Validator", data);
        return promise.then((data) => exports.QueryValidatorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ValidatorDelegations(request) {
        const data = exports.QueryValidatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ValidatorDelegations", data);
        return promise.then((data) => exports.QueryValidatorDelegationsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ValidatorUnbondingDelegations(request) {
        const data = exports.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ValidatorUnbondingDelegations", data);
        return promise.then((data) => exports.QueryValidatorUnbondingDelegationsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Delegation(request) {
        const data = exports.QueryDelegationRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Delegation", data);
        return promise.then((data) => exports.QueryDelegationResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UnbondingDelegation(request) {
        const data = exports.QueryUnbondingDelegationRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnbondingDelegation", data);
        return promise.then((data) => exports.QueryUnbondingDelegationResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DelegatorDelegations(request) {
        const data = exports.QueryDelegatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DelegatorDelegations", data);
        return promise.then((data) => exports.QueryDelegatorDelegationsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DelegatorUnbondingDelegations(request) {
        const data = exports.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DelegatorUnbondingDelegations", data);
        return promise.then((data) => exports.QueryDelegatorUnbondingDelegationsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Redelegations(request) {
        const data = exports.QueryRedelegationsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Redelegations", data);
        return promise.then((data) => exports.QueryRedelegationsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DelegatorValidators(request) {
        const data = exports.QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DelegatorValidators", data);
        return promise.then((data) => exports.QueryDelegatorValidatorsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DelegatorValidator(request) {
        const data = exports.QueryDelegatorValidatorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DelegatorValidator", data);
        return promise.then((data) => exports.QueryDelegatorValidatorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    HistoricalInfo(request) {
        const data = exports.QueryHistoricalInfoRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "HistoricalInfo", data);
        return promise.then((data) => exports.QueryHistoricalInfoResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Pool(request) {
        const data = exports.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Pool", data);
        return promise.then((data) => exports.QueryPoolResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
