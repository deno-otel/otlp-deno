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
  export type Link = {
    traceId: Uint8Array;
    spanId: Uint8Array;
    traceState: string;
    attributes: KeyValue[];
    droppedAttributesCount: number;
  }
}

export type Type = $.opentelemetry.proto.trace.v1.Span.Link;

export function getDefaultValue(): $.opentelemetry.proto.trace.v1.Span.Link {
  return {
    traceId: new Uint8Array(),
    spanId: new Uint8Array(),
    traceState: "",
    attributes: [],
    droppedAttributesCount: 0,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.trace.v1.Span.Link>): $.opentelemetry.proto.trace.v1.Span.Link {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.trace.v1.Span.Link): unknown {
  const result: any = {};
  if (value.traceId !== undefined) result.traceId = tsValueToJsonValueFns.bytes(value.traceId);
  if (value.spanId !== undefined) result.spanId = tsValueToJsonValueFns.bytes(value.spanId);
  if (value.traceState !== undefined) result.traceState = tsValueToJsonValueFns.string(value.traceState);
  result.attributes = value.attributes.map(value => encodeJson_1(value));
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = tsValueToJsonValueFns.uint32(value.droppedAttributesCount);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.trace.v1.Span.Link {
  const result = getDefaultValue();
  if (value.traceId !== undefined) result.traceId = jsonValueToTsValueFns.bytes(value.traceId);
  if (value.spanId !== undefined) result.spanId = jsonValueToTsValueFns.bytes(value.spanId);
  if (value.traceState !== undefined) result.traceState = jsonValueToTsValueFns.string(value.traceState);
  result.attributes = value.attributes?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = jsonValueToTsValueFns.uint32(value.droppedAttributesCount);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.trace.v1.Span.Link): Uint8Array {
  const result: WireMessage = [];
  if (value.traceId !== undefined) {
    const tsValue = value.traceId;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.spanId !== undefined) {
    const tsValue = value.spanId;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.traceState !== undefined) {
    const tsValue = value.traceState;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.attributes) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.droppedAttributesCount !== undefined) {
    const tsValue = value.droppedAttributesCount;
    result.push(
      [5, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.trace.v1.Span.Link {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.traceId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.spanId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.traceState = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attributes = value as any;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.droppedAttributesCount = value;
  }
  return result;
}
