// @ts-nocheck
export declare namespace $.opentelemetry.proto.logs.v1 {
  export type LogRecordFlags =
    | "LOG_RECORD_FLAG_UNSPECIFIED"
    | "LOG_RECORD_FLAG_TRACE_FLAGS_MASK";
}

export type Type = $.opentelemetry.proto.logs.v1.LogRecordFlags;

export const num2name = {
  0: "LOG_RECORD_FLAG_UNSPECIFIED",
  255: "LOG_RECORD_FLAG_TRACE_FLAGS_MASK",
} as const;

export const name2num = {
  LOG_RECORD_FLAG_UNSPECIFIED: 0,
  LOG_RECORD_FLAG_TRACE_FLAGS_MASK: 255,
} as const;
