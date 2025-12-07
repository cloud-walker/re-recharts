import { YAxis as ReYAxis } from "recharts";
import type { StringOnly, UnknownDataPoint } from "./types";

export declare namespace YAxis {
  type Props<TPoint extends UnknownDataPoint> = {
    [K in StringOnly<keyof TPoint>]: {
      dataKey: K;
      tickFormatter?: (value: TPoint[K]) => string;
    };
  }[StringOnly<keyof TPoint>];
}
export function YAxis<TPoint extends UnknownDataPoint>(
  props: YAxis.Props<TPoint>
) {
  return (
    <ReYAxis dataKey={props.dataKey} tickFormatter={props.tickFormatter} />
  );
}
