import { Line as ReLine } from "recharts";
import type { StringOnly, UnknownDataPoint } from "./types";

export declare namespace Line {
  interface Props<TPoint extends UnknownDataPoint> {
    dataKey: StringOnly<keyof TPoint>;
  }
}
export function Line<TPoint extends UnknownDataPoint>(
  props: Line.Props<TPoint>
) {
  return <ReLine dataKey={props.dataKey} />;
}
