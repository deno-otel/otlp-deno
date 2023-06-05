// @ts-nocheck
import {
  Type as InstrumentationScope,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../common/v1/InstrumentationScope.ts";
import {
  Type as Metric,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Metric.ts";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.metrics.v1 {
  export type ScopeMetrics = {
    scope?: InstrumentationScope;
    metrics: Metric[];
    schemaUrl: string;
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.ScopeMetrics;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.ScopeMetrics {
  return {
    scope: undefined,
    metrics: [],
    schemaUrl: "",
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.ScopeMetrics>): $.opentelemetry.proto.metrics.v1.ScopeMetrics {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.ScopeMetrics): unknown {
  const result: any = {};
  if (value.scope !== undefined) result.scope = encodeJson_1(value.scope);
  result.metrics = value.metrics.map(value => encodeJson_2(value));
  if (value.schemaUrl !== undefined) result.schemaUrl = tsValueToJsonValueFns.string(value.schemaUrl);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.ScopeMetrics {
  const result = getDefaultValue();
  if (value.scope !== undefined) result.scope = decodeJson_1(value.scope);
  result.metrics = value.metrics?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.schemaUrl !== undefined) result.schemaUrl = jsonValueToTsValueFns.string(value.schemaUrl);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.ScopeMetrics): Uint8Array {
  const result: WireMessage = [];
  if (value.scope !== undefined) {
    const tsValue = value.scope;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.metrics) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.schemaUrl !== undefined) {
    const tsValue = value.schemaUrl;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.ScopeMetrics {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.scope = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.metrics = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.schemaUrl = value;
  }
  return result;
}
