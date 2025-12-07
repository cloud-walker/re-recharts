import { XAxis as ReXAxis } from "recharts";
import type { StringOnly, UnknownDataPoint } from "./types";

export declare namespace XAxis {
  type Props<TPoint extends UnknownDataPoint> = {
    [K in StringOnly<keyof TPoint>]: {
      dataKey: K;
      tickFormatter?: (value: TPoint[K]) => string;
    };
  }[StringOnly<keyof TPoint>];
}
export function XAxis<TPoint extends UnknownDataPoint>(
  props: XAxis.Props<TPoint>
) {
  return (
    <ReXAxis dataKey={props.dataKey} tickFormatter={props.tickFormatter} />
  );
}
