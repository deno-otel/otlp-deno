// @ts-nocheck
import {
  Type as ArrayValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ArrayValue.ts";
import {
  Type as KeyValueList,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./KeyValueList.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
  Field,
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
  export type AnyValue = {
    value?: (
      | { field: "stringValue", value: string }
      | { field: "boolValue", value: boolean }
      | { field: "intValue", value: string }
      | { field: "doubleValue", value: number }
      | { field: "arrayValue", value: ArrayValue }
      | { field: "kvlistValue", value: KeyValueList }
      | { field: "bytesValue", value: Uint8Array }
  );
  }
}

export type Type = $.opentelemetry.proto.common.v1.AnyValue;

export function getDefaultValue(): $.opentelemetry.proto.common.v1.AnyValue {
  return {
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.common.v1.AnyValue>): $.opentelemetry.proto.common.v1.AnyValue {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.common.v1.AnyValue): unknown {
  const result: any = {};
  switch (value.value?.field) {
    case "stringValue": {
      result.stringValue = tsValueToJsonValueFns.string(value.value.value);
      break;
    }
    case "boolValue": {
      result.boolValue = tsValueToJsonValueFns.bool(value.value.value);
      break;
    }
    case "intValue": {
      result.intValue = tsValueToJsonValueFns.int64(value.value.value);
      break;
    }
    case "doubleValue": {
      result.doubleValue = tsValueToJsonValueFns.double(value.value.value);
      break;
    }
    case "arrayValue": {
      result.arrayValue = encodeJson_1(value.value.value);
      break;
    }
    case "kvlistValue": {
      result.kvlistValue = encodeJson_2(value.value.value);
      break;
    }
    case "bytesValue": {
      result.bytesValue = tsValueToJsonValueFns.bytes(value.value.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.common.v1.AnyValue {
  const result = getDefaultValue();
  if (value.stringValue !== undefined) result.value = {field: "stringValue", value: jsonValueToTsValueFns.string(value.stringValue)};
  if (value.boolValue !== undefined) result.value = {field: "boolValue", value: jsonValueToTsValueFns.bool(value.boolValue)};
  if (value.intValue !== undefined) result.value = {field: "intValue", value: jsonValueToTsValueFns.int64(value.intValue)};
  if (value.doubleValue !== undefined) result.value = {field: "doubleValue", value: jsonValueToTsValueFns.double(value.doubleValue)};
  if (value.arrayValue !== undefined) result.value = {field: "arrayValue", value: decodeJson_1(value.arrayValue)};
  if (value.kvlistValue !== undefined) result.value = {field: "kvlistValue", value: decodeJson_2(value.kvlistValue)};
  if (value.bytesValue !== undefined) result.value = {field: "bytesValue", value: jsonValueToTsValueFns.bytes(value.bytesValue)};
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.common.v1.AnyValue): Uint8Array {
  const result: WireMessage = [];
  switch (value.value?.field) {
    case "stringValue": {
      const tsValue = value.value.value;
      result.push(
        [1, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "boolValue": {
      const tsValue = value.value.value;
      result.push(
        [2, tsValueToWireValueFns.bool(tsValue)],
      );
      break;
    }
    case "intValue": {
      const tsValue = value.value.value;
      result.push(
        [3, tsValueToWireValueFns.int64(tsValue)],
      );
      break;
    }
    case "doubleValue": {
      const tsValue = value.value.value;
      result.push(
        [4, tsValueToWireValueFns.double(tsValue)],
      );
      break;
    }
    case "arrayValue": {
      const tsValue = value.value.value;
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "kvlistValue": {
      const tsValue = value.value.value;
      result.push(
        [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "bytesValue": {
      const tsValue = value.value.value;
      result.push(
        [7, tsValueToWireValueFns.bytes(tsValue)],
      );
      break;
    }
  }
  return serialize(result);
}

const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  value: new Set([1, 2, 3, 4, 5, 6, 7]),
};

const oneofFieldNamesMap = {
  value: new Map([
    [1, "stringValue" as const],
    [2, "boolValue" as const],
    [3, "intValue" as const],
    [4, "doubleValue" as const],
    [5, "arrayValue" as const],
    [6, "kvlistValue" as const],
    [7, "bytesValue" as const],
  ]),
};

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.common.v1.AnyValue {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.value;
    const oneofFieldNames = oneofFieldNamesMap.value;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [2](wireValue: Field) { return wireValueToTsValueFns.bool(wireValue); },
      [3](wireValue: Field) { return wireValueToTsValueFns.int64(wireValue); },
      [4](wireValue: Field) { return wireValueToTsValueFns.double(wireValue); },
      [5](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [6](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [7](wireValue: Field) { return wireValueToTsValueFns.bytes(wireValue); },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.value = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
