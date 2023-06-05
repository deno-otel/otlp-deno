// @ts-nocheck
export declare namespace $.opentelemetry.proto.trace.v1.Span {
  export type SpanKind =
    | "SPAN_KIND_UNSPECIFIED"
    | "SPAN_KIND_INTERNAL"
    | "SPAN_KIND_SERVER"
    | "SPAN_KIND_CLIENT"
    | "SPAN_KIND_PRODUCER"
    | "SPAN_KIND_CONSUMER";
}

export type Type = $.opentelemetry.proto.trace.v1.Span.SpanKind;

export const num2name = {
  0: "SPAN_KIND_UNSPECIFIED",
  1: "SPAN_KIND_INTERNAL",
  2: "SPAN_KIND_SERVER",
  3: "SPAN_KIND_CLIENT",
  4: "SPAN_KIND_PRODUCER",
  5: "SPAN_KIND_CONSUMER",
} as const;

export const name2num = {
  SPAN_KIND_UNSPECIFIED: 0,
  SPAN_KIND_INTERNAL: 1,
  SPAN_KIND_SERVER: 2,
  SPAN_KIND_CLIENT: 3,
  SPAN_KIND_PRODUCER: 4,
  SPAN_KIND_CONSUMER: 5,
} as const;
