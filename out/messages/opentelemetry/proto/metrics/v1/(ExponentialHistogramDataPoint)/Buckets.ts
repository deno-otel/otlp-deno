// @ts-nocheck
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
  unpackFns,
} from "../../../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint {
  export type Buckets = {
    offset: number;
    bucketCounts: string[];
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets {
  return {
    offset: 0,
    bucketCounts: [],
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets>): $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets): unknown {
  const result: any = {};
  if (value.offset !== undefined) result.offset = tsValueToJsonValueFns.sint32(value.offset);
  result.bucketCounts = value.bucketCounts.map(value => tsValueToJsonValueFns.uint64(value));
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets {
  const result = getDefaultValue();
  if (value.offset !== undefined) result.offset = jsonValueToTsValueFns.sint32(value.offset);
  result.bucketCounts = value.bucketCounts?.map((value: any) => jsonValueToTsValueFns.uint64(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets): Uint8Array {
  const result: WireMessage = [];
  if (value.offset !== undefined) {
    const tsValue = value.offset;
    result.push(
      [1, tsValueToWireValueFns.sint32(tsValue)],
    );
  }
  for (const tsValue of value.bucketCounts) {
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.sint32(wireValue);
    if (value === undefined) break field;
    result.offset = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.uint64(wireValues));
    if (!value.length) break collection;
    result.bucketCounts = value as any;
  }
  return result;
}
