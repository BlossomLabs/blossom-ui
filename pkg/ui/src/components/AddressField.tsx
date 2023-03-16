import TextCopy from "./TextCopy";
import Blockie from "./Blockie";
import { AddressFieldProps } from "../types";

/**
 *
 * @param address Adress to display in the field.
 * @param icon Icon to display in the field. Can pass anything that can be rendered, such as num, string, DOM elements, an array of them, or fragments that contain them.
 */
export default function AddressField({ address, icon }: AddressFieldProps) {
  return (
    <TextCopy
      adornment={icon || <Blockie address={address} scale={1.7} />}
      value={address}
    />
  );
}
