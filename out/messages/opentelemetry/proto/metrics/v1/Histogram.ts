// @ts-nocheck
import {
  Type as HistogramDataPoint,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./HistogramDataPoint.ts";
import {
  Type as AggregationTemporality,
  name2num,
  num2name,
} from "./AggregationTemporality.ts";
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
  default as Long,
} from "../../../../../runtime/Long.ts";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.metrics.v1 {
  export type Histogram = {
    dataPoints: HistogramDataPoint[];
    aggregationTemporality: AggregationTemporality;
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.Histogram;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.Histogram {
  return {
    dataPoints: [],
    aggregationTemporality: "AGGREGATION_TEMPORALITY_UNSPECIFIED",
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.Histogram>): $.opentelemetry.proto.metrics.v1.Histogram {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.Histogram): unknown {
  const result: any = {};
  result.dataPoints = value.dataPoints.map(value => encodeJson_1(value));
  if (value.aggregationTemporality !== undefined) result.aggregationTemporality = tsValueToJsonValueFns.enum(value.aggregationTemporality);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.Histogram {
  const result = getDefaultValue();
  result.dataPoints = value.dataPoints?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.aggregationTemporality !== undefined) result.aggregationTemporality = jsonValueToTsValueFns.enum(value.aggregationTemporality) as AggregationTemporality;
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.Histogram): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.dataPoints) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.aggregationTemporality !== undefined) {
    const tsValue = value.aggregationTemporality;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.Histogram {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.dataPoints = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.aggregationTemporality = value;
  }
  return result;
}
