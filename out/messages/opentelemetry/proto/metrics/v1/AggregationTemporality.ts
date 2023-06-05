// @ts-nocheck
export declare namespace $.opentelemetry.proto.metrics.v1 {
  export type AggregationTemporality =
    | "AGGREGATION_TEMPORALITY_UNSPECIFIED"
    | "AGGREGATION_TEMPORALITY_DELTA"
    | "AGGREGATION_TEMPORALITY_CUMULATIVE";
}

export type Type = $.opentelemetry.proto.metrics.v1.AggregationTemporality;

export const num2name = {
  0: "AGGREGATION_TEMPORALITY_UNSPECIFIED",
  1: "AGGREGATION_TEMPORALITY_DELTA",
  2: "AGGREGATION_TEMPORALITY_CUMULATIVE",
} as const;

export const name2num = {
  AGGREGATION_TEMPORALITY_UNSPECIFIED: 0,
  AGGREGATION_TEMPORALITY_DELTA: 1,
  AGGREGATION_TEMPORALITY_CUMULATIVE: 2,
} as const;
