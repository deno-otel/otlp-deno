// @ts-nocheck
import {
  Type as ExportTracePartialSuccess,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ExportTracePartialSuccess.ts";
import {
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.ts";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.collector.trace.v1 {
  export type ExportTraceServiceResponse = {
    partialSuccess?: ExportTracePartialSuccess;
  }
}

export type Type = $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;

export function getDefaultValue(): $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse {
  return {
    partialSuccess: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse>): $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse): unknown {
  const result: any = {};
  if (value.partialSuccess !== undefined) result.partialSuccess = encodeJson_1(value.partialSuccess);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse {
  const result = getDefaultValue();
  if (value.partialSuccess !== undefined) result.partialSuccess = decodeJson_1(value.partialSuccess);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.partialSuccess !== undefined) {
    const tsValue = value.partialSuccess;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.partialSuccess = value;
  }
  return result;
}
