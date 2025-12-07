import {
  ComposedChart as ReComposedChart,
  ResponsiveContainer,
} from "recharts";

import type { UnknownDataPoint } from "./types";
import { Line } from "./Line";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import { Area } from "./Area";
import { Bar } from "./Bar";

export declare namespace ComposedChart {
  interface Props<TPoint extends UnknownDataPoint> {
    /**
     * @todo recharts types are mutable, so we can't assume that the data array is readonly
     */
    data: TPoint[];
    render: (props: {
      Line: typeof Line<TPoint>;
      Area: typeof Area<TPoint>;
      Bar: typeof Bar<TPoint>;
      XAxis: typeof XAxis<TPoint>;
      YAxis: typeof YAxis<TPoint>;
    }) => React.ReactNode;
  }
}
export function ComposedChart<TPoint extends UnknownDataPoint>(
  props: ComposedChart.Props<TPoint>
) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <ReComposedChart data={props.data} accessibilityLayer>
        {props.render({ Line, Area, Bar, XAxis, YAxis })}
      </ReComposedChart>
    </ResponsiveContainer>
  );
}
