import { type Meta, type StoryObj } from "@storybook/react-vite";
import { faker } from "@faker-js/faker";

import { ComposedChart } from "./ComposedChart";
export default {} satisfies Meta;

const data = faker.helpers.multiple(() => {
  return {
    date: faker.date.recent(),
    price: faker.number.float({ min: 0, max: 1000 }),
    volume: faker.number.int(),
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
          render={({ Line, XAxis, YAxis }) => (
            <>
              <XAxis dataKey="date" tickFormatter={(d) => d.toISOString()} />
              <YAxis dataKey="price" tickFormatter={(n) => n.toString()} />
              <Line dataKey="price" />
            </>
          )}
        />
      </>
    );
  },
};
