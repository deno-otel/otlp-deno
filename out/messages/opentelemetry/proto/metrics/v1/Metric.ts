// @ts-nocheck
import {
  Type as Gauge,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Gauge.ts";
import {
  Type as Sum,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Sum.ts";
import {
  Type as Histogram,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./Histogram.ts";
import {
  Type as ExponentialHistogram,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./ExponentialHistogram.ts";
import {
  Type as Summary,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./Summary.ts";
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
  export type Metric = {
    name: string;
    description: string;
    unit: string;
    data?: (
      | { field: "gauge", value: Gauge }
      | { field: "sum", value: Sum }
      | { field: "histogram", value: Histogram }
      | { field: "exponentialHistogram", value: ExponentialHistogram }
      | { field: "summary", value: Summary }
  );
  }
}

export type Type = $.opentelemetry.proto.metrics.v1.Metric;

export function getDefaultValue(): $.opentelemetry.proto.metrics.v1.Metric {
  return {
    name: "",
    description: "",
    unit: "",
    data: undefined,
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.metrics.v1.Metric>): $.opentelemetry.proto.metrics.v1.Metric {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.metrics.v1.Metric): unknown {
  const result: any = {};
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.unit !== undefined) result.unit = tsValueToJsonValueFns.string(value.unit);
  switch (value.data?.field) {
    case "gauge": {
      result.gauge = encodeJson_1(value.data.value);
      break;
    }
    case "sum": {
      result.sum = encodeJson_2(value.data.value);
      break;
    }
    case "histogram": {
      result.histogram = encodeJson_3(value.data.value);
      break;
    }
    case "exponentialHistogram": {
      result.exponentialHistogram = encodeJson_4(value.data.value);
      break;
    }
    case "summary": {
      result.summary = encodeJson_5(value.data.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.metrics.v1.Metric {
  const result = getDefaultValue();
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.unit !== undefined) result.unit = jsonValueToTsValueFns.string(value.unit);
  if (value.gauge !== undefined) result.data = {field: "gauge", value: decodeJson_1(value.gauge)};
  if (value.sum !== undefined) result.data = {field: "sum", value: decodeJson_2(value.sum)};
  if (value.histogram !== undefined) result.data = {field: "histogram", value: decodeJson_3(value.histogram)};
  if (value.exponentialHistogram !== undefined) result.data = {field: "exponentialHistogram", value: decodeJson_4(value.exponentialHistogram)};
  if (value.summary !== undefined) result.data = {field: "summary", value: decodeJson_5(value.summary)};
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.metrics.v1.Metric): Uint8Array {
  const result: WireMessage = [];
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.unit !== undefined) {
    const tsValue = value.unit;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  switch (value.data?.field) {
    case "gauge": {
      const tsValue = value.data.value;
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "sum": {
      const tsValue = value.data.value;
      result.push(
        [7, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "histogram": {
      const tsValue = value.data.value;
      result.push(
        [9, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "exponentialHistogram": {
      const tsValue = value.data.value;
      result.push(
        [10, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
    case "summary": {
      const tsValue = value.data.value;
      result.push(
        [11, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  data: new Set([5, 7, 9, 10, 11]),
};

const oneofFieldNamesMap = {
  data: new Map([
    [5, "gauge" as const],
    [7, "sum" as const],
    [9, "histogram" as const],
    [10, "exponentialHistogram" as const],
    [11, "summary" as const],
  ]),
};

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.metrics.v1.Metric {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.unit = value;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.data;
    const oneofFieldNames = oneofFieldNamesMap.data;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [5](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [7](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [9](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [10](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
      [11](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.data = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
