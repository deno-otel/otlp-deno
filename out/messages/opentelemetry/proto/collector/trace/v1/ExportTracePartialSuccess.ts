// @ts-nocheck
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.collector.trace.v1 {
  export type ExportTracePartialSuccess = {
    rejectedSpans: string;
    errorMessage: string;
  }
}

export type Type = $.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;

export function getDefaultValue(): $.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess {
  return {
    rejectedSpans: "0",
    errorMessage: "",
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess>): $.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess): unknown {
  const result: any = {};
  if (value.rejectedSpans !== undefined) result.rejectedSpans = tsValueToJsonValueFns.int64(value.rejectedSpans);
  if (value.errorMessage !== undefined) result.errorMessage = tsValueToJsonValueFns.string(value.errorMessage);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess {
  const result = getDefaultValue();
  if (value.rejectedSpans !== undefined) result.rejectedSpans = jsonValueToTsValueFns.int64(value.rejectedSpans);
  if (value.errorMessage !== undefined) result.errorMessage = jsonValueToTsValueFns.string(value.errorMessage);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess): Uint8Array {
  const result: WireMessage = [];
  if (value.rejectedSpans !== undefined) {
    const tsValue = value.rejectedSpans;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.errorMessage !== undefined) {
    const tsValue = value.errorMessage;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.rejectedSpans = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.errorMessage = value;
  }
  return result;
}
