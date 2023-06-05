// @ts-nocheck
import {
  Type as SeverityNumber,
  name2num,
  num2name,
} from "./SeverityNumber.ts";
import {
  Type as AnyValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../common/v1/AnyValue.ts";
import {
  Type as KeyValue,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
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
  default as Long,
} from "../../../../../runtime/Long.ts";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.logs.v1 {
  export type LogRecord = {
    timeUnixNano: string;
    severityNumber: SeverityNumber;
    severityText: string;
    body?: AnyValue;
    attributes: KeyValue[];
    droppedAttributesCount: number;
    flags: number;
    traceId: Uint8Array;
    spanId: Uint8Array;
    observedTimeUnixNano: string;
  }
}

export type Type = $.opentelemetry.proto.logs.v1.LogRecord;

export function getDefaultValue(): $.opentelemetry.proto.logs.v1.LogRecord {
  return {
    timeUnixNano: "0",
    severityNumber: "SEVERITY_NUMBER_UNSPECIFIED",
    severityText: "",
    body: undefined,
    attributes: [],
    droppedAttributesCount: 0,
    flags: 0,
    traceId: new Uint8Array(),
    spanId: new Uint8Array(),
    observedTimeUnixNano: "0",
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.logs.v1.LogRecord>): $.opentelemetry.proto.logs.v1.LogRecord {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.logs.v1.LogRecord): unknown {
  const result: any = {};
  if (value.timeUnixNano !== undefined) result.timeUnixNano = tsValueToJsonValueFns.fixed64(value.timeUnixNano);
  if (value.severityNumber !== undefined) result.severityNumber = tsValueToJsonValueFns.enum(value.severityNumber);
  if (value.severityText !== undefined) result.severityText = tsValueToJsonValueFns.string(value.severityText);
  if (value.body !== undefined) result.body = encodeJson_1(value.body);
  result.attributes = value.attributes.map(value => encodeJson_2(value));
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = tsValueToJsonValueFns.uint32(value.droppedAttributesCount);
  if (value.flags !== undefined) result.flags = tsValueToJsonValueFns.fixed32(value.flags);
  if (value.traceId !== undefined) result.traceId = tsValueToJsonValueFns.bytes(value.traceId);
  if (value.spanId !== undefined) result.spanId = tsValueToJsonValueFns.bytes(value.spanId);
  if (value.observedTimeUnixNano !== undefined) result.observedTimeUnixNano = tsValueToJsonValueFns.fixed64(value.observedTimeUnixNano);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.logs.v1.LogRecord {
  const result = getDefaultValue();
  if (value.timeUnixNano !== undefined) result.timeUnixNano = jsonValueToTsValueFns.fixed64(value.timeUnixNano);
  if (value.severityNumber !== undefined) result.severityNumber = jsonValueToTsValueFns.enum(value.severityNumber) as SeverityNumber;
  if (value.severityText !== undefined) result.severityText = jsonValueToTsValueFns.string(value.severityText);
  if (value.body !== undefined) result.body = decodeJson_1(value.body);
  result.attributes = value.attributes?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.droppedAttributesCount !== undefined) result.droppedAttributesCount = jsonValueToTsValueFns.uint32(value.droppedAttributesCount);
  if (value.flags !== undefined) result.flags = jsonValueToTsValueFns.fixed32(value.flags);
  if (value.traceId !== undefined) result.traceId = jsonValueToTsValueFns.bytes(value.traceId);
  if (value.spanId !== undefined) result.spanId = jsonValueToTsValueFns.bytes(value.spanId);
  if (value.observedTimeUnixNano !== undefined) result.observedTimeUnixNano = jsonValueToTsValueFns.fixed64(value.observedTimeUnixNano);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.logs.v1.LogRecord): Uint8Array {
  const result: WireMessage = [];
  if (value.timeUnixNano !== undefined) {
    const tsValue = value.timeUnixNano;
    result.push(
      [1, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.severityNumber !== undefined) {
    const tsValue = value.severityNumber;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.severityText !== undefined) {
    const tsValue = value.severityText;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.body !== undefined) {
    const tsValue = value.body;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.attributes) {
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.droppedAttributesCount !== undefined) {
    const tsValue = value.droppedAttributesCount;
    result.push(
      [7, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.flags !== undefined) {
    const tsValue = value.flags;
    result.push(
      [8, tsValueToWireValueFns.fixed32(tsValue)],
    );
  }
  if (value.traceId !== undefined) {
    const tsValue = value.traceId;
    result.push(
      [9, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.spanId !== undefined) {
    const tsValue = value.spanId;
    result.push(
      [10, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.observedTimeUnixNano !== undefined) {
    const tsValue = value.observedTimeUnixNano;
    result.push(
      [11, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.logs.v1.LogRecord {
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
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.severityNumber = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.severityText = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.body = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attributes = value as any;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.droppedAttributesCount = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed32(wireValue);
    if (value === undefined) break field;
    result.flags = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.traceId = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.spanId = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.observedTimeUnixNano = value;
  }
  return result;
}
