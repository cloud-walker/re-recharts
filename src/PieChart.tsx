import { PieChart as RePieChart, ResponsiveContainer } from "recharts";
import { Pie } from "./Pie";

export declare namespace PieChart {
  interface Props {
    render: (props: { Pie: typeof Pie }) => React.ReactNode;
  }
}
export function PieChart(props: PieChart.Props) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <RePieChart accessibilityLayer>{props.render({ Pie })}</RePieChart>
    </ResponsiveContainer>
  );
}
