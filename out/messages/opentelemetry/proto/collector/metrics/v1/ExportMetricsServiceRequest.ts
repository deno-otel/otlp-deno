// @ts-nocheck
import {
  Type as ResourceMetrics,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../../metrics/v1/ResourceMetrics.ts";
import {
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
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.collector.metrics.v1 {
  export type ExportMetricsServiceRequest = {
    resourceMetrics: ResourceMetrics[];
  }
}

export type Type = $.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;

export function getDefaultValue(): $.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest {
  return {
    resourceMetrics: [],
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest>): $.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest): unknown {
  const result: any = {};
  result.resourceMetrics = value.resourceMetrics.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest {
  const result = getDefaultValue();
  result.resourceMetrics = value.resourceMetrics?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.resourceMetrics) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.resourceMetrics = value as any;
  }
  return result;
}
