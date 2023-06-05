// @ts-nocheck
export declare namespace $.opentelemetry.proto.trace.v1.Status {
  export type StatusCode =
    | "STATUS_CODE_UNSET"
    | "STATUS_CODE_OK"
    | "STATUS_CODE_ERROR";
}

export type Type = $.opentelemetry.proto.trace.v1.Status.StatusCode;

export const num2name = {
  0: "STATUS_CODE_UNSET",
  1: "STATUS_CODE_OK",
  2: "STATUS_CODE_ERROR",
} as const;

export const name2num = {
  STATUS_CODE_UNSET: 0,
  STATUS_CODE_OK: 1,
  STATUS_CODE_ERROR: 2,
} as const;
