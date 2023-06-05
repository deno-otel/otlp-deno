// @ts-nocheck
import {
  Type as KeyValue,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../../common/v1/KeyValue.ts";
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

export declare namespace $.opentelemetry.proto.metrics.v1 {
  export type Exemplar = {
    timeUnixNano: string;
    spanId: Uint8Array;
    traceId: Uint8Array;
    filteredAttributes: KeyValue[];
    value?: (
      | { field: "asDouble", value: number }
      | { field: "asInt", value: string }
  );
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.Exemplar;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.Exemplar {
  return {
    timeUnixNano: "0",
    spanId: new Uint8Array(),
    traceId: new Uint8Array(),
    filteredAttributes: [],
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.Exemplar>): $.opentelemetry.proto.metrics.v1.Exemplar {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.Exemplar): unknown {
  const result: any = {};
  if (value.timeUnixNano !== undefined) result.timeUnixNano = tsValueToJsonValueFns.fixed64(value.timeUnixNano);
  if (value.spanId !== undefined) result.spanId = tsValueToJsonValueFns.bytes(value.spanId);
  if (value.traceId !== undefined) result.traceId = tsValueToJsonValueFns.bytes(value.traceId);
  result.filteredAttributes = value.filteredAttributes.map(value => encodeJson_1(value));
  switch (value.value?.field) {
    case "asDouble": {
      result.asDouble = tsValueToJsonValueFns.double(value.value.value);
      break;
    }
    case "asInt": {
      result.asInt = tsValueToJsonValueFns.sfixed64(value.value.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.Exemplar {
  const result = getDefaultValue();
  if (value.timeUnixNano !== undefined) result.timeUnixNano = jsonValueToTsValueFns.fixed64(value.timeUnixNano);
  if (value.spanId !== undefined) result.spanId = jsonValueToTsValueFns.bytes(value.spanId);
  if (value.traceId !== undefined) result.traceId = jsonValueToTsValueFns.bytes(value.traceId);
  result.filteredAttributes = value.filteredAttributes?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.asDouble !== undefined) result.value = {field: "asDouble", value: jsonValueToTsValueFns.double(value.asDouble)};
  if (value.asInt !== undefined) result.value = {field: "asInt", value: jsonValueToTsValueFns.sfixed64(value.asInt)};
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.Exemplar): Uint8Array {
  const result: WireMessage = [];
  if (value.timeUnixNano !== undefined) {
    const tsValue = value.timeUnixNano;
    result.push(
      [2, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.spanId !== undefined) {
    const tsValue = value.spanId;
    result.push(
      [4, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.traceId !== undefined) {
    const tsValue = value.traceId;
    result.push(
      [5, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  for (const tsValue of value.filteredAttributes) {
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  switch (value.value?.field) {
    case "asDouble": {
      const tsValue = value.value.value;
      result.push(
        [3, tsValueToWireValueFns.double(tsValue)],
      );
      break;
    }
    case "asInt": {
      const tsValue = value.value.value;
      result.push(
        [6, tsValueToWireValueFns.sfixed64(tsValue)],
      );
      break;
    }
  }
  return serialize(result);
}

const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  value: new Set([3, 6]),
};

const oneofFieldNamesMap = {
  value: new Map([
    [3, "asDouble" as const],
    [6, "asInt" as const],
  ]),
};

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.Exemplar {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.timeUnixNano = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.spanId = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.traceId = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.filteredAttributes = value as any;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.value;
    const oneofFieldNames = oneofFieldNamesMap.value;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [3](wireValue: Field) { return wireValueToTsValueFns.double(wireValue); },
      [6](wireValue: Field) { return wireValueToTsValueFns.sfixed64(wireValue); },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.value = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
