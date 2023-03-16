import type { Story } from "@ladle/react";
import { Box } from "@chakra-ui/react";
import { TokenBadge } from "../";
import Provider from "../components/LadleThemeProvider";
import { type TokenBadgeProps } from "../types";

export const Default: Story<TokenBadgeProps> = (props) => (
  <Provider>
    <div>
      <TokenBadge {...props} />
    </div>
  </Provider>
);

Default.args = {
  address: "0x0000000000000000000000000000000000000000",
  name: "Ethereum",
  symbol: "ETH",
};

Default.argTypes = {
  compact: {
    options: [true, false],
    control: { type: "radio" }, // or type: inline-radio
    defaultValue: false,
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

export const LimitedWidth: Story<TokenBadgeProps> = (props) => (
  <Provider>
    <Box maxW={"250px"} display={"flex"}>
      <TokenBadge {...props} />
    </Box>
  </Provider>
);

LimitedWidth.args = {
  address: "0x960b236A07cf122663c4303350609A66A7B288C0",
  symbol: "ANT",
  name: "Aragon compact and very very very very long name",
  compact: true,
};

LimitedWidth.argTypes = {
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
