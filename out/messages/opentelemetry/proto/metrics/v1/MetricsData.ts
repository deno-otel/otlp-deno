// @ts-nocheck
import {
  Type as ResourceMetrics,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ResourceMetrics.ts";
import {
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize.ts";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.metrics.v1 {
  export type MetricsData = {
    resourceMetrics: ResourceMetrics[];
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.MetricsData;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.MetricsData {
  return {
    resourceMetrics: [],
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.MetricsData>): $.opentelemetry.proto.metrics.v1.MetricsData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.MetricsData): unknown {
  const result: any = {};
  result.resourceMetrics = value.resourceMetrics.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.MetricsData {
  const result = getDefaultValue();
  result.resourceMetrics = value.resourceMetrics?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.MetricsData): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.resourceMetrics) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.MetricsData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.resourceMetrics = value as any;
  }
  return result;
}
