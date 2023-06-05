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

export declare namespace $.opentelemetry.proto.collector.metrics.v1 {
  export type ExportMetricsPartialSuccess = {
    rejectedDataPoints: string;
    errorMessage: string;
  }
}

export type Type = $.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;

export function getDefaultValue(): $.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess {
  return {
    rejectedDataPoints: "0",
    errorMessage: "",
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess>): $.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess): unknown {
  const result: any = {};
  if (value.rejectedDataPoints !== undefined) result.rejectedDataPoints = tsValueToJsonValueFns.int64(value.rejectedDataPoints);
  if (value.errorMessage !== undefined) result.errorMessage = tsValueToJsonValueFns.string(value.errorMessage);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess {
  const result = getDefaultValue();
  if (value.rejectedDataPoints !== undefined) result.rejectedDataPoints = jsonValueToTsValueFns.int64(value.rejectedDataPoints);
  if (value.errorMessage !== undefined) result.errorMessage = jsonValueToTsValueFns.string(value.errorMessage);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess): Uint8Array {
  const result: WireMessage = [];
  if (value.rejectedDataPoints !== undefined) {
    const tsValue = value.rejectedDataPoints;
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

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.rejectedDataPoints = value;
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
