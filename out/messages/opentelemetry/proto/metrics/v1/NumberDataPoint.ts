// @ts-nocheck
import {
  Type as Exemplar,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Exemplar.ts";
import {
  Type as KeyValue,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
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
  export type NumberDataPoint = {
    startTimeUnixNano: string;
    timeUnixNano: string;
    exemplars: Exemplar[];
    attributes: KeyValue[];
    flags: number;
    value?: (
      | { field: "asDouble", value: number }
      | { field: "asInt", value: string }
  );
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.NumberDataPoint;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.NumberDataPoint {
  return {
    startTimeUnixNano: "0",
    timeUnixNano: "0",
    exemplars: [],
    attributes: [],
    flags: 0,
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.NumberDataPoint>): $.opentelemetry.proto.metrics.v1.NumberDataPoint {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.NumberDataPoint): unknown {
  const result: any = {};
  if (value.startTimeUnixNano !== undefined) result.startTimeUnixNano = tsValueToJsonValueFns.fixed64(value.startTimeUnixNano);
  if (value.timeUnixNano !== undefined) result.timeUnixNano = tsValueToJsonValueFns.fixed64(value.timeUnixNano);
  result.exemplars = value.exemplars.map(value => encodeJson_1(value));
  result.attributes = value.attributes.map(value => encodeJson_2(value));
  if (value.flags !== undefined) result.flags = tsValueToJsonValueFns.uint32(value.flags);
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

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.NumberDataPoint {
  const result = getDefaultValue();
  if (value.startTimeUnixNano !== undefined) result.startTimeUnixNano = jsonValueToTsValueFns.fixed64(value.startTimeUnixNano);
  if (value.timeUnixNano !== undefined) result.timeUnixNano = jsonValueToTsValueFns.fixed64(value.timeUnixNano);
  result.exemplars = value.exemplars?.map((value: any) => decodeJson_1(value)) ?? [];
  result.attributes = value.attributes?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.flags !== undefined) result.flags = jsonValueToTsValueFns.uint32(value.flags);
  if (value.asDouble !== undefined) result.value = {field: "asDouble", value: jsonValueToTsValueFns.double(value.asDouble)};
  if (value.asInt !== undefined) result.value = {field: "asInt", value: jsonValueToTsValueFns.sfixed64(value.asInt)};
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.NumberDataPoint): Uint8Array {
  const result: WireMessage = [];
  if (value.startTimeUnixNano !== undefined) {
    const tsValue = value.startTimeUnixNano;
    result.push(
      [2, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  if (value.timeUnixNano !== undefined) {
    const tsValue = value.timeUnixNano;
    result.push(
      [3, tsValueToWireValueFns.fixed64(tsValue)],
    );
  }
  for (const tsValue of value.exemplars) {
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.attributes) {
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.flags !== undefined) {
    const tsValue = value.flags;
    result.push(
      [8, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  switch (value.value?.field) {
    case "asDouble": {
      const tsValue = value.value.value;
      result.push(
        [4, tsValueToWireValueFns.double(tsValue)],
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
  value: new Set([4, 6]),
};

const oneofFieldNamesMap = {
  value: new Map([
    [4, "asDouble" as const],
    [6, "asInt" as const],
  ]),
};

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.NumberDataPoint {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.startTimeUnixNano = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.fixed64(wireValue);
    if (value === undefined) break field;
    result.timeUnixNano = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.exemplars = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.attributes = value as any;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.flags = value;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.value;
    const oneofFieldNames = oneofFieldNamesMap.value;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [4](wireValue: Field) { return wireValueToTsValueFns.double(wireValue); },
      [6](wireValue: Field) { return wireValueToTsValueFns.sfixed64(wireValue); },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.value = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
