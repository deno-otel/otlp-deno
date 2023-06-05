// @ts-nocheck
import {
  Type as Exemplar,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Exemplar.ts";
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
  unpackFns,
} from "../../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.metrics.v1 {
  export type HistogramDataPoint = {
    startTimeUnixNano: string;
    timeUnixNano: string;
    count: string;
    sum?: number;
    bucketCounts: string[];
    explicitBounds: number[];
    exemplars: Exemplar[];
    attributes: KeyValue[];
    flags: number;
    min?: number;
    max?: number;
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.HistogramDataPoint;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.HistogramDataPoint {
  return {
    startTimeUnixNano: "0",
    timeUnixNano: "0",
    count: "0",
    sum: undefined,
    bucketCounts: [],
    explicitBounds: [],
    exemplars: [],
    attributes: [],
    flags: 0,
    min: undefined,
    max: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.HistogramDataPoint>): $.opentelemetry.proto.metrics.v1.HistogramDataPoint {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.HistogramDataPoint): unknown {
  const result: any = {};
  if (value.startTimeUnixNano !== undefined) result.startTimeUnixNano = tsValueToJsonValueFns.fixed64(value.startTimeUnixNano);
  if (value.timeUnixNano !== undefined) result.timeUnixNano = tsValueToJsonValueFns.fixed64(value.timeUnixNano);
  if (value.count !== undefined) result.count = tsValueToJsonValueFns.fixed64(value.count);
  if (value.sum !== undefined) result.sum = tsValueToJsonValueFns.double(value.sum);
  result.bucketCounts = value.bucketCounts.map(value => tsValueToJsonValueFns.fixed64(value));
  result.explicitBounds = value.explicitBounds.map(value => tsValueToJsonValueFns.double(value));
  result.exemplars = value.exemplars.map(value => encodeJson_1(value));
  result.attributes = value.attributes.map(value => encodeJson_2(value));
  if (value.flags !== undefined) result.flags = tsValueToJsonValueFns.uint32(value.flags);
  if (value.min !== undefined) result.min = tsValueToJsonValueFns.double(value.min);
  if (value.max !== undefined) result.max = tsValueToJsonValueFns.double(value.max);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.HistogramDataPoint {
  const result = getDefaultValue();
  if (value.startTimeUnixNano !== undefined) result.startTimeUnixNano = jsonValueToTsValueFns.fixed64(value.startTimeUnixNano);
  if (value.timeUnixNano !== undefined) result.timeUnixNano = jsonValueToTsValueFns.fixed64(value.timeUnixNano);
  if (value.count !== undefined) result.count = jsonValueToTsValueFns.fixed64(value.count);
  if (value.sum !== undefined) result.sum = jsonValueToTsValueFns.double(value.sum);
  result.bucketCounts = value.bucketCounts?.map((value: any) => jsonValueToTsValueFns.fixed64(value)) ?? [];
  result.explicitBounds = value.explicitBounds?.map((value: any) => jsonValueToTsValueFns.double(value)) ?? [];
  result.exemplars = value.exemplars?.map((value: any) => decodeJson_1(value)) ?? [];
  result.attributes = value.attributes?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.flags !== undefined) result.flags = jsonValueToTsValueFns.uint32(value.flags);
  if (value.min !== undefined) result.min = jsonValueToTsValueFns.double(value.min);
  if (value.max !== undefined) result.max = jsonValueToTsValueFns.double(value.max);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.HistogramDataPoint): Uint8Array {
  const result: WireMessage = [];
  if (value.startTimeUnixNano !== undefined) {
    const tsValue = value.startTimeUnixNano;
    result.push(
      [2, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.timeUnixNano !== undefined) {
    const tsValue = value.timeUnixNano;
    result.push(
      [3, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.count !== undefined) {
    const tsValue = value.count;
    result.push(
      [4, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.sum !== undefined) {
    const tsValue = value.sum;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  for (const tsValue of value.bucketCounts) {
    result.push(
      [6, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  for (const tsValue of value.explicitBounds) {
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  for (const tsValue of value.exemplars) {
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.attributes) {
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.flags !== undefined) {
    const tsValue = value.flags;
    result.push(
      [10, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.min !== undefined) {
    const tsValue = value.min;
    result.push(
      [11, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.max !== undefined) {
    const tsValue = value.max;
    result.push(
      [12, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.HistogramDataPoint {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.startTimeUnixNano = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.timeUnixNano = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.count = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sum = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.fixed64(wireValues));
    if (!value.length) break collection;
    result.bucketCounts = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.double(wireValues));
    if (!value.length) break collection;
    result.explicitBounds = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 8).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.exemplars = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 9).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attributes = value as any;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.flags = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.min = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.max = value;
  }
  return result;
}
