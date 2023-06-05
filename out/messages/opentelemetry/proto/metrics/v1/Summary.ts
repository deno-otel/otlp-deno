// @ts-nocheck
import {
  Type as SummaryDataPoint,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./SummaryDataPoint.ts";
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
  export type Summary = {
    dataPoints: SummaryDataPoint[];
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.Summary;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.Summary {
  return {
    dataPoints: [],
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.Summary>): $.opentelemetry.proto.metrics.v1.Summary {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.Summary): unknown {
  const result: any = {};
  result.dataPoints = value.dataPoints.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.Summary {
  const result = getDefaultValue();
  result.dataPoints = value.dataPoints?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.Summary): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.dataPoints) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.Summary {
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
