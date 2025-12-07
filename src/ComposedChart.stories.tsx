import { type Meta, type StoryObj } from "@storybook/react-vite";
import { faker } from "@faker-js/faker";

import { ComposedChart } from "./ComposedChart";
import { css } from "../styled-system/css";
export default {} satisfies Meta;

const data = faker.helpers.multiple(() => {
  return {
    date: faker.date.recent(),
    price: faker.number.float({ min: 0, max: 10000 }),
    volume: faker.number.int({ min: 0, max: 5000 }),
  };
});

export const Playground: StoryObj = {
  name: "ComposedChart",
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
        <ComposedChart
          data={data}
          render={({ Line, Area, XAxis, YAxis }) => (
            <>
              <XAxis dataKey="date" tickFormatter={(d) => d.toISOString()} />
              <YAxis dataKey="price" tickFormatter={(n) => n.toString()} />

              <Line dataKey="price" />
              <Area dataKey="volume" />
            </>
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
