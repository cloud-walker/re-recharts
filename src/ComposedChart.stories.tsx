import { type Meta, type StoryObj } from "@storybook/react-vite";
import { faker } from "@faker-js/faker";

import { ComposedChart } from "./ComposedChart";
import { css } from "../styled-system/css";
export default {} satisfies Meta;

const data = faker.helpers.multiple(() => {
  return {
    date: faker.date.recent(),
    price: faker.number.float(),
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
        {/* <h1
          className={css({
            textStyle: "2xl",
          })}
        >
          Composed Chart
        </h1> */}
        <ComposedChart
          data={data}
          render={({ Line }) => (
            <>
              <Line dataKey="price" />
            </>
          )}
        />
      </>
    );
  },
};
