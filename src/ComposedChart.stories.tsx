import { type Meta, type StoryObj } from "@storybook/react-vite";
import { faker } from "@faker-js/faker";

import { ComposedChart } from "./ComposedChart";
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
      <>
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
      </>
    );
  },
};
