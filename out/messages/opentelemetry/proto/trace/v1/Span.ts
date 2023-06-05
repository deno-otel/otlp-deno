// @ts-nocheck
import {
  Type as SpanKind,
  name2num,
  num2name,
} from "./(Span)/SpanKind.ts";
import {
  Type as KeyValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../common/v1/KeyValue.ts";
import {
  Type as Event,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(Span)/Event.ts";
import {
  Type as Link,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(Span)/Link.ts";
import {
  Type as Status,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./Status.ts";
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
  default as Long,
} from "../../../../../runtime/Long.ts";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.trace.v1 {
  export type Span = {
    traceId: Uint8Array;
    spanId: Uint8Array;
    traceState: string;
    parentSpanId: Uint8Array;
    name: string;
    kind: SpanKind;
    startTimeUnixNano: string;
    endTimeUnixNano: string;
    attributes: KeyValue[];
    droppedAttributesCount: number;
    events: Event[];
    droppedEventsCount: number;
    links: Link[];
    droppedLinksCount: number;
    status?: Status;
  }
}

export type Type = $.opentelemetry.proto.trace.v1.Span;

export function getDefaultValue(): $.opentelemetry.proto.trace.v1.Span {
  return {
    traceId: new Uint8Array(),
    spanId: new Uint8Array(),
    traceState: "",
    parentSpanId: new Uint8Array(),
    name: "",
    kind: "SPAN_KIND_UNSPECIFIED",
    startTimeUnixNano: "0",
    endTimeUnixNano: "0",
    attributes: [],
    droppedAttributesCount: 0,
    events: [],
    droppedEventsCount: 0,
    links: [],
    droppedLinksCount: 0,
    status: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.trace.v1.Span>): $.opentelemetry.proto.trace.v1.Span {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.trace.v1.Span): unknown {
  const result: any = {};
  if (value.traceId !== undefined) result.traceId = tsValueToJsonValueFns.bytes(value.traceId);
  if (value.spanId !== undefined) result.spanId = tsValueToJsonValueFns.bytes(value.spanId);
  if (value.traceState !== undefined) result.traceState = tsValueToJsonValueFns.string(value.traceState);
  if (value.parentSpanId !== undefined) result.parentSpanId = tsValueToJsonValueFns.bytes(value.parentSpanId);
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.kind !== undefined) result.kind = tsValueToJsonValueFns.enum(value.kind);
  if (value.startTimeUnixNano !== undefined) result.startTimeUnixNano = tsValueToJsonValueFns.fixed64(value.startTimeUnixNano);
  if (value.endTimeUnixNano !== undefined) result.endTimeUnixNano = tsValueToJsonValueFns.fixed64(value.endTimeUnixNano);
  result.attributes = value.attributes.map(value => encodeJson_1(value));
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = tsValueToJsonValueFns.uint32(value.droppedAttributesCount);
  result.events = value.events.map(value => encodeJson_2(value));
  if (value.droppedEventsCount !== undefined) result.droppedEventsCount = tsValueToJsonValueFns.uint32(value.droppedEventsCount);
  result.links = value.links.map(value => encodeJson_3(value));
  if (value.droppedLinksCount !== undefined) result.droppedLinksCount = tsValueToJsonValueFns.uint32(value.droppedLinksCount);
  if (value.status !== undefined) result.status = encodeJson_4(value.status);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.trace.v1.Span {
  const result = getDefaultValue();
  if (value.traceId !== undefined) result.traceId = jsonValueToTsValueFns.bytes(value.traceId);
  if (value.spanId !== undefined) result.spanId = jsonValueToTsValueFns.bytes(value.spanId);
  if (value.traceState !== undefined) result.traceState = jsonValueToTsValueFns.string(value.traceState);
  if (value.parentSpanId !== undefined) result.parentSpanId = jsonValueToTsValueFns.bytes(value.parentSpanId);
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.kind !== undefined) result.kind = jsonValueToTsValueFns.enum(value.kind) as SpanKind;
  if (value.startTimeUnixNano !== undefined) result.startTimeUnixNano = jsonValueToTsValueFns.fixed64(value.startTimeUnixNano);
  if (value.endTimeUnixNano !== undefined) result.endTimeUnixNano = jsonValueToTsValueFns.fixed64(value.endTimeUnixNano);
  result.attributes = value.attributes?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = jsonValueToTsValueFns.uint32(value.droppedAttributesCount);
  result.events = value.events?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.droppedEventsCount !== undefined) result.droppedEventsCount = jsonValueToTsValueFns.uint32(value.droppedEventsCount);
  result.links = value.links?.map((value: any) => decodeJson_3(value)) ?? [];
  if (value.droppedLinksCount !== undefined) result.droppedLinksCount = jsonValueToTsValueFns.uint32(value.droppedLinksCount);
  if (value.status !== undefined) result.status = decodeJson_4(value.status);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.trace.v1.Span): Uint8Array {
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
  if (value.parentSpanId !== undefined) {
    const tsValue = value.parentSpanId;
    result.push(
      [4, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.kind !== undefined) {
    const tsValue = value.kind;
    result.push(
      [6, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.startTimeUnixNano !== undefined) {
    const tsValue = value.startTimeUnixNano;
    result.push(
      [7, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.endTimeUnixNano !== undefined) {
    const tsValue = value.endTimeUnixNano;
    result.push(
      [8, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  for (const tsValue of value.attributes) {
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.droppedAttributesCount !== undefined) {
    const tsValue = value.droppedAttributesCount;
    result.push(
      [10, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  for (const tsValue of value.events) {
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.droppedEventsCount !== undefined) {
    const tsValue = value.droppedEventsCount;
    result.push(
      [12, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  for (const tsValue of value.links) {
    result.push(
      [13, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.droppedLinksCount !== undefined) {
    const tsValue = value.droppedLinksCount;
    result.push(
      [14, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [15, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.trace.v1.Span {
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
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.parentSpanId = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.kind = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.startTimeUnixNano = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.endTimeUnixNano = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 9).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attributes = value as any;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.droppedAttributesCount = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 11).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.events = value as any;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.droppedEventsCount = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 13).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.links = value as any;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.droppedLinksCount = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.status = value;
  }
  return result;
}
