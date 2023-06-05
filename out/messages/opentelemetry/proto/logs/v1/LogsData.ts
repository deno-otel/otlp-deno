// @ts-nocheck
import {
  Type as ResourceLogs,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ResourceLogs.ts";
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

export declare namespace $.opentelemetry.proto.logs.v1 {
  export type LogsData = {
    resourceLogs: ResourceLogs[];
  }
}

export type Type = $.opentelemetry.proto.logs.v1.LogsData;

export function getDefaultValue(): $.opentelemetry.proto.logs.v1.LogsData {
  return {
    resourceLogs: [],
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.logs.v1.LogsData>): $.opentelemetry.proto.logs.v1.LogsData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.logs.v1.LogsData): unknown {
  const result: any = {};
  result.resourceLogs = value.resourceLogs.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.logs.v1.LogsData {
  const result = getDefaultValue();
  result.resourceLogs = value.resourceLogs?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.logs.v1.LogsData): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.resourceLogs) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.logs.v1.LogsData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.resourceLogs = value as any;
  }
  return result;
}
