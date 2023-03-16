import type { Story } from "@ladle/react";
import Provider from "../components/LadleThemeProvider";
import { TextCopy } from "..";
import { TextCopyProps } from "../types";

export const Default: Story<TextCopyProps> = (props) => (
  <Provider>
    <div>
      <TextCopy {...props} />
    </div>
  </Provider>
);

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
