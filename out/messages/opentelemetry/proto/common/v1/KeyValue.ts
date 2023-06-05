// @ts-nocheck
import {
  Type as AnyValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./AnyValue.ts";
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

export declare namespace $.opentelemetry.proto.common.v1 {
  export type KeyValue = {
    key: string;
    value?: AnyValue;
  }
}

export type Type = $.opentelemetry.proto.common.v1.KeyValue;

export function getDefaultValue(): $.opentelemetry.proto.common.v1.KeyValue {
  return {
    key: "",
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.common.v1.KeyValue>): $.opentelemetry.proto.common.v1.KeyValue {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.common.v1.KeyValue): unknown {
  const result: any = {};
  if (value.key !== undefined) result.key = tsValueToJsonValueFns.string(value.key);
  if (value.value !== undefined) result.value = encodeJson_1(value.value);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.common.v1.KeyValue {
  const result = getDefaultValue();
  if (value.key !== undefined) result.key = jsonValueToTsValueFns.string(value.key);
  if (value.value !== undefined) result.value = decodeJson_1(value.value);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.common.v1.KeyValue): Uint8Array {
  const result: WireMessage = [];
  if (value.key !== undefined) {
    const tsValue = value.key;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.common.v1.KeyValue {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.key = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
