import { ComposedChart as ReComposedChart } from "recharts";

export declare namespace ComposedChart {
  type UnknownDataPoint = Record<string, unknown>;
  interface Props {
    /**
     * @todo recharts types are mutable, so we can't assume that the data array is readonly
     */
    data: UnknownDataPoint[];
    render: () => React.ReactNode;
  }
}
export function ComposedChart(props: ComposedChart.Props) {
  return <ReComposedChart data={props.data}>{props.render()}</ReComposedChart>;
}
