import type { Story, StoryDefault } from "@ladle/react";
import { Center, Text } from "@chakra-ui/react";
import { IdentityBadge } from "../";
import Provider from "../components/LadleThemeProvider";
import { type IdentityBadgeProps } from "../types";

export const Default: Story<IdentityBadgeProps> = (props) => (
  <IdentityBadge {...props} />
);

Default.args = {
  address: "0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c",
  label: "",
  popoverTitle: "",
};

Default.argTypes = {
  isAccountConnected: {
    options: [true, false],
    control: { type: "radio" }, // or type: inline-radio
    defaultValue: false,
  },
  compact: {
    options: [true, false],
    control: { type: "radio" }, // or type: inline-radio
    defaultValue: false,
  },
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

export const WithPopoverAction: Story<{
  onClick: () => void;
}> = ({ onClick }) => (
  <IdentityBadge
    label="Popeye"
    address="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c"
    isAccountConnected
    popoverAction={{
      label: (
        <Center>
          <Text>Add name</Text>
        </Center>
      ),
      onClick,
    }}
  />
);

WithPopoverAction.argTypes = {
  onClick: {
    action: "clicked",
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
