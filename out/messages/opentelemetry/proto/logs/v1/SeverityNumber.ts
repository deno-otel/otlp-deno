// @ts-nocheck
export declare namespace $.opentelemetry.proto.logs.v1 {
  export type SeverityNumber =
    | "SEVERITY_NUMBER_UNSPECIFIED"
    | "SEVERITY_NUMBER_TRACE"
    | "SEVERITY_NUMBER_TRACE2"
    | "SEVERITY_NUMBER_TRACE3"
    | "SEVERITY_NUMBER_TRACE4"
    | "SEVERITY_NUMBER_DEBUG"
    | "SEVERITY_NUMBER_DEBUG2"
    | "SEVERITY_NUMBER_DEBUG3"
    | "SEVERITY_NUMBER_DEBUG4"
    | "SEVERITY_NUMBER_INFO"
    | "SEVERITY_NUMBER_INFO2"
    | "SEVERITY_NUMBER_INFO3"
    | "SEVERITY_NUMBER_INFO4"
    | "SEVERITY_NUMBER_WARN"
    | "SEVERITY_NUMBER_WARN2"
    | "SEVERITY_NUMBER_WARN3"
    | "SEVERITY_NUMBER_WARN4"
    | "SEVERITY_NUMBER_ERROR"
    | "SEVERITY_NUMBER_ERROR2"
    | "SEVERITY_NUMBER_ERROR3"
    | "SEVERITY_NUMBER_ERROR4"
    | "SEVERITY_NUMBER_FATAL"
    | "SEVERITY_NUMBER_FATAL2"
    | "SEVERITY_NUMBER_FATAL3"
    | "SEVERITY_NUMBER_FATAL4";
}

export type Type = $.opentelemetry.proto.logs.v1.SeverityNumber;

export const num2name = {
  0: "SEVERITY_NUMBER_UNSPECIFIED",
  1: "SEVERITY_NUMBER_TRACE",
  2: "SEVERITY_NUMBER_TRACE2",
  3: "SEVERITY_NUMBER_TRACE3",
  4: "SEVERITY_NUMBER_TRACE4",
  5: "SEVERITY_NUMBER_DEBUG",
  6: "SEVERITY_NUMBER_DEBUG2",
  7: "SEVERITY_NUMBER_DEBUG3",
  8: "SEVERITY_NUMBER_DEBUG4",
  9: "SEVERITY_NUMBER_INFO",
  10: "SEVERITY_NUMBER_INFO2",
  11: "SEVERITY_NUMBER_INFO3",
  12: "SEVERITY_NUMBER_INFO4",
  13: "SEVERITY_NUMBER_WARN",
  14: "SEVERITY_NUMBER_WARN2",
  15: "SEVERITY_NUMBER_WARN3",
  16: "SEVERITY_NUMBER_WARN4",
  17: "SEVERITY_NUMBER_ERROR",
  18: "SEVERITY_NUMBER_ERROR2",
  19: "SEVERITY_NUMBER_ERROR3",
  20: "SEVERITY_NUMBER_ERROR4",
  21: "SEVERITY_NUMBER_FATAL",
  22: "SEVERITY_NUMBER_FATAL2",
  23: "SEVERITY_NUMBER_FATAL3",
  24: "SEVERITY_NUMBER_FATAL4",
} as const;

export const name2num = {
  SEVERITY_NUMBER_UNSPECIFIED: 0,
  SEVERITY_NUMBER_TRACE: 1,
  SEVERITY_NUMBER_TRACE2: 2,
  SEVERITY_NUMBER_TRACE3: 3,
  SEVERITY_NUMBER_TRACE4: 4,
  SEVERITY_NUMBER_DEBUG: 5,
  SEVERITY_NUMBER_DEBUG2: 6,
  SEVERITY_NUMBER_DEBUG3: 7,
  SEVERITY_NUMBER_DEBUG4: 8,
  SEVERITY_NUMBER_INFO: 9,
  SEVERITY_NUMBER_INFO2: 10,
  SEVERITY_NUMBER_INFO3: 11,
  SEVERITY_NUMBER_INFO4: 12,
  SEVERITY_NUMBER_WARN: 13,
  SEVERITY_NUMBER_WARN2: 14,
  SEVERITY_NUMBER_WARN3: 15,
  SEVERITY_NUMBER_WARN4: 16,
  SEVERITY_NUMBER_ERROR: 17,
  SEVERITY_NUMBER_ERROR2: 18,
  SEVERITY_NUMBER_ERROR3: 19,
  SEVERITY_NUMBER_ERROR4: 20,
  SEVERITY_NUMBER_FATAL: 21,
  SEVERITY_NUMBER_FATAL2: 22,
  SEVERITY_NUMBER_FATAL3: 23,
  SEVERITY_NUMBER_FATAL4: 24,
} as const;
