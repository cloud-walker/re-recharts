import { Bar as ReBar } from "recharts";
import type { StringOnly, UnknownDataPoint } from "./types";

export declare namespace Bar {
  interface Props<TPoint extends UnknownDataPoint> {
    dataKey: StringOnly<keyof TPoint>;
  }
}
export function Bar<TPoint extends UnknownDataPoint>(props: Bar.Props<TPoint>) {
  return <ReBar dataKey={props.dataKey} />;
}
