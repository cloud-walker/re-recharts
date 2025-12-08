import { type Meta, type StoryObj } from "@storybook/react-vite";
import { faker } from "@faker-js/faker";
import * as C from "recharts";

import { css } from "../styled-system/css";
import { PieChart } from "./PieChart";
export default {} satisfies Meta;

const data = faker.helpers.multiple(() => {
  return {
    date: faker.date.recent(),
    price: faker.number.float({ min: 0, max: 10000 }),
    volume: faker.number.int({ min: 0, max: 5000 }),
  };
});

export const Playground: StoryObj = {
  name: "PieChart",
  parameters: {
    layout: "fullscreen",
  },
  render() {
    return (
      <div
        className={css({
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          gridTemplateColumns: "1fr auto",
          height: "100%",
          gap: "4",
          padding: "4",
        })}
      >
        <header
          className={css({
            gridColumn: "span 2",
          })}
        >
          header
        </header>
        <PieChart
          render={({ Pie }) => (
            <Pie
              data={data.map((x) => ({ ...x, fill: faker.color.rgb() }))}
              dataKey="price"
              nameKey="date"
            />
          )}
        />
        <aside className={css({ width: "15rem" })}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          numquam pariatur, minima maiores ipsa excepturi sapiente hic
          repellendus? Id, a aliquam ut iusto nemo fugit eos nam veritatis hic
          enim?
        </aside>
        <footer
          className={css({
            gridColumn: "span 2",
          })}
        >
          footer
        </footer>
      </div>
    );
  },
};
