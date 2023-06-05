// @ts-nocheck
import {
  Type as KeyValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../common/v1/KeyValue.ts";
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

export declare namespace $.opentelemetry.proto.resource.v1 {
  export type Resource = {
    attributes: KeyValue[];
    droppedAttributesCount: number;
  }
}

export type Type = $.opentelemetry.proto.resource.v1.Resource;

export function getDefaultValue(): $.opentelemetry.proto.resource.v1.Resource {
  return {
    attributes: [],
    droppedAttributesCount: 0,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.resource.v1.Resource>): $.opentelemetry.proto.resource.v1.Resource {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.resource.v1.Resource): unknown {
  const result: any = {};
  result.attributes = value.attributes.map(value => encodeJson_1(value));
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = tsValueToJsonValueFns.uint32(value.droppedAttributesCount);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.resource.v1.Resource {
  const result = getDefaultValue();
  result.attributes = value.attributes?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = jsonValueToTsValueFns.uint32(value.droppedAttributesCount);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.resource.v1.Resource): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.attributes) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.droppedAttributesCount !== undefined) {
    const tsValue = value.droppedAttributesCount;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.resource.v1.Resource {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attributes = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.droppedAttributesCount = value;
  }
  return result;
}
