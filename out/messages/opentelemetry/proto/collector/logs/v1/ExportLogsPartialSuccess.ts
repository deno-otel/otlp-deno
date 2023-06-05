// @ts-nocheck
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.collector.logs.v1 {
  export type ExportLogsPartialSuccess = {
    rejectedLogRecords: string;
    errorMessage: string;
  }
}

export type Type = $.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess;

export function getDefaultValue(): $.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess {
  return {
    rejectedLogRecords: "0",
    errorMessage: "",
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess>): $.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess): unknown {
  const result: any = {};
  if (value.rejectedLogRecords !== undefined) result.rejectedLogRecords = tsValueToJsonValueFns.int64(value.rejectedLogRecords);
  if (value.errorMessage !== undefined) result.errorMessage = tsValueToJsonValueFns.string(value.errorMessage);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess {
  const result = getDefaultValue();
  if (value.rejectedLogRecords !== undefined) result.rejectedLogRecords = jsonValueToTsValueFns.int64(value.rejectedLogRecords);
  if (value.errorMessage !== undefined) result.errorMessage = jsonValueToTsValueFns.string(value.errorMessage);
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess): Uint8Array {
  const result: WireMessage = [];
  if (value.rejectedLogRecords !== undefined) {
    const tsValue = value.rejectedLogRecords;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.errorMessage !== undefined) {
    const tsValue = value.errorMessage;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.rejectedLogRecords = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.errorMessage = value;
  }
  return result;
}
