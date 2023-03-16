import type { Story, StoryDefault } from "@ladle/react";
import Provider from "../components/LadleThemeProvider";
import { TextCopy } from "..";
import { TextCopyProps } from "../types";

export const Default: Story<TextCopyProps> = (props) => <TextCopy {...props} />;

Default.args = {
  value: "Copy this value!",
};

Default.argTypes = {
  monospace: {
    options: [true, false],
    control: { type: "radio" }, // or type: inline-radio
    defaultValue: false,
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
