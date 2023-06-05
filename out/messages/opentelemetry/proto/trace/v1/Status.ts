// @ts-nocheck
import {
  Type as StatusCode,
  name2num,
  num2name,
} from "./(Status)/StatusCode.ts";
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
  default as Long,
} from "../../../../../runtime/Long.ts";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.opentelemetry.proto.trace.v1 {
  export type Status = {
    message: string;
    code: StatusCode;
  }
}

export type Type = $.opentelemetry.proto.trace.v1.Status;

export function getDefaultValue(): $.opentelemetry.proto.trace.v1.Status {
  return {
    message: "",
    code: "STATUS_CODE_UNSET",
  };
}

export function createValue(partialValue: Partial<$.opentelemetry.proto.trace.v1.Status>): $.opentelemetry.proto.trace.v1.Status {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.opentelemetry.proto.trace.v1.Status): unknown {
  const result: any = {};
  if (value.message !== undefined) result.message = tsValueToJsonValueFns.string(value.message);
  if (value.code !== undefined) result.code = tsValueToJsonValueFns.enum(value.code);
  return result;
}

export function decodeJson(value: any): $.opentelemetry.proto.trace.v1.Status {
  const result = getDefaultValue();
  if (value.message !== undefined) result.message = jsonValueToTsValueFns.string(value.message);
  if (value.code !== undefined) result.code = jsonValueToTsValueFns.enum(value.code) as StatusCode;
  return result;
}

export function encodeBinary(value: $.opentelemetry.proto.trace.v1.Status): Uint8Array {
  const result: WireMessage = [];
  if (value.message !== undefined) {
    const tsValue = value.message;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.code !== undefined) {
    const tsValue = value.code;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.opentelemetry.proto.trace.v1.Status {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.message = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.code = value;
  }
  return result;
}
