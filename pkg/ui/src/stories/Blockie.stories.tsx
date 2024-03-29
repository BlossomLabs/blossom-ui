import type { Story, StoryDefault } from "@ladle/react";
import { Blockie } from "../";
import Provider from "../components/LadleThemeProvider";
import { BlockieProps } from "../types";

const address = "0x05e5472AEc66eB811329CE0c7698A620b6c5CB35";

export const Default: Story = () => <Blockie address={address} />;
export const Custom: Story<BlockieProps> = (props) => <Blockie {...props} />;

Custom.args = {
  address,
};

Custom.argTypes = {
  scale: {
    control: { type: "range", min: 1, step: 1 },
    defaultValue: 2,
  },
  opacity: {
    control: { type: "range", min: 0, max: 1, step: 0.05 },
    defaultValue: 0.5,
  },
  radius: {
    defaultValue: "md",
    options: ["none", "sm", "base", "md", "lg", "xl", "2xl", "3xl", "full"],
    control: { type: "select" }, // or type: multi-select
  },
};

export default {
  decorators: [
    (Component) => (
      <Provider>
        <div>
          <Component />
        </div>
      </Provider>
    ),
  ],
} satisfies StoryDefault;
