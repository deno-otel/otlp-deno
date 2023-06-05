// @ts-nocheck
import {
  Type as Resource,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../resource/v1/Resource.ts";
import {
  Type as ScopeMetrics,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./ScopeMetrics.ts";
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
  export type ResourceMetrics = {
    resource?: Resource;
    scopeMetrics: ScopeMetrics[];
    schemaUrl: string;
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.ResourceMetrics;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.ResourceMetrics {
  return {
    resource: undefined,
    scopeMetrics: [],
    schemaUrl: "",
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.ResourceMetrics>): $.opentelemetry.proto.metrics.v1.ResourceMetrics {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.ResourceMetrics): unknown {
  const result: any = {};
  if (value.resource !== undefined) result.resource = encodeJson_1(value.resource);
  result.scopeMetrics = value.scopeMetrics.map(value => encodeJson_2(value));
  if (value.schemaUrl !== undefined) result.schemaUrl = tsValueToJsonValueFns.string(value.schemaUrl);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.ResourceMetrics {
  const result = getDefaultValue();
  if (value.resource !== undefined) result.resource = decodeJson_1(value.resource);
  result.scopeMetrics = value.scopeMetrics?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.schemaUrl !== undefined) result.schemaUrl = jsonValueToTsValueFns.string(value.schemaUrl);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.ResourceMetrics): Uint8Array {
  const result: WireMessage = [];
  if (value.resource !== undefined) {
    const tsValue = value.resource;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.scopeMetrics) {
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

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.ResourceMetrics {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.resource = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.scopeMetrics = value as any;
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
