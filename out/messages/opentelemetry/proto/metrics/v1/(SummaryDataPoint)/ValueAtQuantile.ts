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

export declare namespace $.opentelemetry.proto.metrics.v1.SummaryDataPoint {
  export type ValueAtQuantile = {
    quantile: number;
    value: number;
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile {
  return {
    quantile: 0,
    value: 0,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile>): $.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile): unknown {
  const result: any = {};
  if (value.quantile !== undefined) result.quantile = tsValueToJsonValueFns.double(value.quantile);
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.double(value.value);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile {
  const result = getDefaultValue();
  if (value.quantile !== undefined) result.quantile = jsonValueToTsValueFns.double(value.quantile);
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.double(value.value);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile): Uint8Array {
  const result: WireMessage = [];
  if (value.quantile !== undefined) {
    const tsValue = value.quantile;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.quantile = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
