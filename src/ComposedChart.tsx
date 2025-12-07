import { ComposedChart as ReComposedChart } from "recharts";
import type { UnknownDataPoint } from "./types";
import { Line } from "./Line";

export declare namespace ComposedChart {
  interface Props {
    /**
     * @todo recharts types are mutable, so we can't assume that the data array is readonly
     */
    data: UnknownDataPoint[];
    render: (props: { Line: typeof Line }) => React.ReactNode;
  }
}
export function ComposedChart(props: ComposedChart.Props) {
  return (
    <ReComposedChart
      responsive
      data={props.data}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {props.render({ Line })}
    </ReComposedChart>
  );
}
