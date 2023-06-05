// @ts-nocheck
import {
  Type as KeyValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../common/v1/KeyValue.ts";
import {
  Type as Buckets,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(ExponentialHistogramDataPoint)/Buckets.ts";
import {
  Type as Exemplar,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./Exemplar.ts";
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
  export type ExponentialHistogramDataPoint = {
    attributes: KeyValue[];
    startTimeUnixNano: string;
    timeUnixNano: string;
    count: string;
    sum?: number;
    scale: number;
    zeroCount: string;
    positive?: Buckets;
    negative?: Buckets;
    flags: number;
    exemplars: Exemplar[];
    min?: number;
    max?: number;
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint {
  return {
    attributes: [],
    startTimeUnixNano: "0",
    timeUnixNano: "0",
    count: "0",
    sum: undefined,
    scale: 0,
    zeroCount: "0",
    positive: undefined,
    negative: undefined,
    flags: 0,
    exemplars: [],
    min: undefined,
    max: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint>): $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint): unknown {
  const result: any = {};
  result.attributes = value.attributes.map(value => encodeJson_1(value));
  if (value.startTimeUnixNano !== undefined) result.startTimeUnixNano = tsValueToJsonValueFns.fixed64(value.startTimeUnixNano);
  if (value.timeUnixNano !== undefined) result.timeUnixNano = tsValueToJsonValueFns.fixed64(value.timeUnixNano);
  if (value.count !== undefined) result.count = tsValueToJsonValueFns.fixed64(value.count);
  if (value.sum !== undefined) result.sum = tsValueToJsonValueFns.double(value.sum);
  if (value.scale !== undefined) result.scale = tsValueToJsonValueFns.sint32(value.scale);
  if (value.zeroCount !== undefined) result.zeroCount = tsValueToJsonValueFns.fixed64(value.zeroCount);
  if (value.positive !== undefined) result.positive = encodeJson_2(value.positive);
  if (value.negative !== undefined) result.negative = encodeJson_2(value.negative);
  if (value.flags !== undefined) result.flags = tsValueToJsonValueFns.uint32(value.flags);
  result.exemplars = value.exemplars.map(value => encodeJson_3(value));
  if (value.min !== undefined) result.min = tsValueToJsonValueFns.double(value.min);
  if (value.max !== undefined) result.max = tsValueToJsonValueFns.double(value.max);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint {
  const result = getDefaultValue();
  result.attributes = value.attributes?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.startTimeUnixNano !== undefined) result.startTimeUnixNano = jsonValueToTsValueFns.fixed64(value.startTimeUnixNano);
  if (value.timeUnixNano !== undefined) result.timeUnixNano = jsonValueToTsValueFns.fixed64(value.timeUnixNano);
  if (value.count !== undefined) result.count = jsonValueToTsValueFns.fixed64(value.count);
  if (value.sum !== undefined) result.sum = jsonValueToTsValueFns.double(value.sum);
  if (value.scale !== undefined) result.scale = jsonValueToTsValueFns.sint32(value.scale);
  if (value.zeroCount !== undefined) result.zeroCount = jsonValueToTsValueFns.fixed64(value.zeroCount);
  if (value.positive !== undefined) result.positive = decodeJson_2(value.positive);
  if (value.negative !== undefined) result.negative = decodeJson_2(value.negative);
  if (value.flags !== undefined) result.flags = jsonValueToTsValueFns.uint32(value.flags);
  result.exemplars = value.exemplars?.map((value: any) => decodeJson_3(value)) ?? [];
  if (value.min !== undefined) result.min = jsonValueToTsValueFns.double(value.min);
  if (value.max !== undefined) result.max = jsonValueToTsValueFns.double(value.max);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.attributes) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
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
  if (value.scale !== undefined) {
    const tsValue = value.scale;
    result.push(
      [6, tsValueToWireValueFns.sint32(tsValue)],
    );
  }
  if (value.zeroCount !== undefined) {
    const tsValue = value.zeroCount;
    result.push(
      [7, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.positive !== undefined) {
    const tsValue = value.positive;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.negative !== undefined) {
    const tsValue = value.negative;
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
  for (const tsValue of value.exemplars) {
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.min !== undefined) {
    const tsValue = value.min;
    result.push(
      [12, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.max !== undefined) {
    const tsValue = value.max;
    result.push(
      [13, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint {
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
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.sint32(wireValue);
    if (value === undefined) break field;
    result.scale = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.zeroCount = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.positive = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.negative = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.flags = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 11).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.exemplars = value as any;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.min = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.max = value;
  }
  return result;
}
