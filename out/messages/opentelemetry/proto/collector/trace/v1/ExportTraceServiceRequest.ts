// @ts-nocheck
import {
  Type as ResourceSpans,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../../trace/v1/ResourceSpans.ts";
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

export declare namespace $.opentelemetry.proto.collector.trace.v1 {
  export type ExportTraceServiceRequest = {
    resourceSpans: ResourceSpans[];
  }
}

export type Type = $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;

export function getDefaultValue(): $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest {
  return {
    resourceSpans: [],
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest>): $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest): unknown {
  const result: any = {};
  result.resourceSpans = value.resourceSpans.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest {
  const result = getDefaultValue();
  result.resourceSpans = value.resourceSpans?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.resourceSpans) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.resourceSpans = value as any;
  }
  return result;
}
