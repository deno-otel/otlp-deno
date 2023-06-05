// @ts-nocheck
export declare namespace $.opentelemetry.proto.metrics.v1 {
  export type DataPointFlags =
    | "FLAG_NONE"
    | "FLAG_NO_RECORDED_VALUE";
}

export type Type = $.opentelemetry.proto.metrics.v1.DataPointFlags;

export const num2name = {
  0: "FLAG_NONE",
  1: "FLAG_NO_RECORDED_VALUE",
} as const;

export const name2num = {
  FLAG_NONE: 0,
  FLAG_NO_RECORDED_VALUE: 1,
} as const;
