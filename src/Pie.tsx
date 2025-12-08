import { Cell, Pie as RePie } from "recharts";
import type { StringOnly, UnknownDataPoint } from "./types";

export declare namespace Pie {
  interface Props<TPoint extends UnknownDataPoint> {
    data: TPoint[];
    dataKey: StringOnly<keyof TPoint>;
    nameKey: StringOnly<keyof TPoint>;
    renderCell?: (props: {
      Cell: typeof Cell;
      point: TPoint;
      index: number;
    }) => React.ReactNode;
  }
}
export function Pie<TPoint extends UnknownDataPoint>(props: Pie.Props<TPoint>) {
  return (
    <RePie
      data={props.data}
      dataKey={props.dataKey}
      nameKey={props.nameKey}
      isAnimationActive={false}
    >
      {props.renderCell &&
        props.data.map((point, index) =>
          props.renderCell?.({ Cell, point, index })
        )}
    </RePie>
  );
}
