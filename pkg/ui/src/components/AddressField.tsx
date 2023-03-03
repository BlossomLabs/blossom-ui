import TextCopy from "./TextCopy";
import Blockie from "./Blockie";

type AddressFieldProps = {
  address: string;
  icon?: React.ReactNode;
};

export default function AddressField({ address, icon }: AddressFieldProps) {
  return (
    <TextCopy
      adornment={icon || <Blockie address={address} scale={2} />}
      value={address}
    />
  );
}
