import type { Story } from "@ladle/react";
import { TransactionBadge } from "../";
import Provider from "../components/LadleThemeProvider";
import { type TransactionBadgeProps } from "../types";

export const Default: Story<TransactionBadgeProps> = (props) => (
  <Provider>
    <div>
      <TransactionBadge {...props} />
    </div>
  </Provider>
);

Default.args = {
  transaction:
    "0xbffb1572c2b820ffd1ce420382a242b8df030fb8a206908703ca39e36ec78646",
};

Default.argTypes = {
  shorten: {
    options: [true, false],
    control: { type: "radio" }, // or type: inline-radio
    defaultValue: true,
  },
  disabled: {
    options: [true, false],
    control: { type: "radio" }, // or type: inline-radio
    defaultValue: false,
  },
  networkType: {
    options: [
      "main",
      "kovan",
      "rinkeby",
      "ropsten",
      "goerli",
      "matic",
      "mumbai",
      "harmony",
      "harmonyTest",
      "gnosis",
    ],
    control: { type: "select" }, // or type: multi-select
  },
};
