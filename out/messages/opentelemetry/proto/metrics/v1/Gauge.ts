// @ts-nocheck
import {
  Type as NumberDataPoint,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./NumberDataPoint.ts";
import {
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
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.metrics.v1 {
  export type Gauge = {
    dataPoints: NumberDataPoint[];
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.Gauge;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.Gauge {
  return {
    dataPoints: [],
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.Gauge>): $.opentelemetry.proto.metrics.v1.Gauge {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.Gauge): unknown {
  const result: any = {};
  result.dataPoints = value.dataPoints.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.Gauge {
  const result = getDefaultValue();
  result.dataPoints = value.dataPoints?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.Gauge): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.dataPoints) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.Gauge {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.dataPoints = value as any;
  }
  return result;
}
