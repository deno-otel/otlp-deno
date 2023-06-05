// @ts-nocheck
import {
  Type as KeyValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../../common/v1/KeyValue.ts";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.trace.v1.Span {
  export type Event = {
    timeUnixNano: string;
    name: string;
    attributes: KeyValue[];
    droppedAttributesCount: number;
  }
}

export type Type = $.opentelemetry.proto.trace.v1.Span.Event;

export function getDefaultValue(): $.opentelemetry.proto.trace.v1.Span.Event {
  return {
    timeUnixNano: "0",
    name: "",
    attributes: [],
    droppedAttributesCount: 0,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.trace.v1.Span.Event>): $.opentelemetry.proto.trace.v1.Span.Event {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.trace.v1.Span.Event): unknown {
  const result: any = {};
  if (value.timeUnixNano !== undefined) result.timeUnixNano = tsValueToJsonValueFns.fixed64(value.timeUnixNano);
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  result.attributes = value.attributes.map(value => encodeJson_1(value));
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = tsValueToJsonValueFns.uint32(value.droppedAttributesCount);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.trace.v1.Span.Event {
  const result = getDefaultValue();
  if (value.timeUnixNano !== undefined) result.timeUnixNano = jsonValueToTsValueFns.fixed64(value.timeUnixNano);
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  result.attributes = value.attributes?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = jsonValueToTsValueFns.uint32(value.droppedAttributesCount);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.trace.v1.Span.Event): Uint8Array {
  const result: WireMessage = [];
  if (value.timeUnixNano !== undefined) {
    const tsValue = value.timeUnixNano;
    result.push(
      [1, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.attributes) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.droppedAttributesCount !== undefined) {
    const tsValue = value.droppedAttributesCount;
    result.push(
      [4, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.trace.v1.Span.Event {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.timeUnixNano = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attributes = value as any;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.droppedAttributesCount = value;
  }
  return result;
}
