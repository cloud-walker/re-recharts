import { Area as ReArea } from "recharts";
import type { StringOnly, UnknownDataPoint } from "./types";

export declare namespace Area {
  interface Props<TPoint extends UnknownDataPoint> {
    dataKey: StringOnly<keyof TPoint>;
  }
}
export function Area<TPoint extends UnknownDataPoint>(
  props: Area.Props<TPoint>
) {
  return (
    <ReArea
      dataKey={props.dataKey}
      activeDot={false}
      isAnimationActive={false}
    />
  );
}
