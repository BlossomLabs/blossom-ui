import type { Story } from "@ladle/react";
import { AddressField } from "../";
import Provider from "../components/LadleThemeProvider";
import { AddressFieldProps } from "../types";

export const Default: Story<AddressFieldProps> = (props) => (
  <Provider>
    <div>
      <AddressField {...props} />
    </div>
  </Provider>
);

Default.args = {
  address: "0x2c9341a52cfa3f2c2554ca1803134137b9366b3c",
};
