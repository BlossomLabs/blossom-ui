import {
  Grid,
  Text,
  GridItem,
  IconButton,
  useClipboard,
  Tooltip,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useState } from "react";

/**
 * @param adornment Allows to set an adornment that will get used on the left side of the text field (in left to right languages). The copy button is always displayed on the other side.
 * @param value The field content (single line).
 * @param monospace Set this to false to disable the use of the monospace font (e.g. for Ethereum addresses).
 */
export default function TextCopy({
  value,
  adornment,
  monospace = true,
}: {
  value: string;
  adornment?: React.ReactNode;
  monospace?: boolean;
}): JSX.Element {
  const { onCopy } = useClipboard(value);
  const [hasCopied, onClick] = useState(false);

  function handleOnClick() {
    onCopy();
    onClick(true);
    setTimeout(() => {
      onClick(false);
    }, 1500);
  }

  const columns = adornment
    ? "auto max(calc(100% - 2.5rem - 2.5rem)) auto"
    : "max(calc(100% - 2.5rem)) auto";

  return (
    <Grid
      alignItems={"center"}
      border={"1px solid"}
      color={"blackAlpha.400"}
      borderRadius={"md"}
      overflow={"hidden"}
      maxW={"full"}
      w={"sm"}
      maxH={10}
      gridTemplateColumns={columns}
      gridTemplateRows={"max(2.5rem)"}
    >
      {adornment ? <GridItem boxSize={"full"}>{adornment}</GridItem> : null}
      <GridItem pl={2}>
        <Text
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          textStyle={monospace ? "address2" : "body3"}
          color={"surfaceContent"}
        >
          {value}
        </Text>
      </GridItem>
      <GridItem>
        <Tooltip
          isOpen={hasCopied}
          hasArrow
          label={"Copied!"}
          placement={"top"}
        >
          <IconButton
            aria-label={"Copy text"}
            icon={<CopyIcon boxSize={4} color={"blackAlpha.400"} />}
            variant={"customIconButton"}
            onClick={handleOnClick}
            size={"md"}
          />
        </Tooltip>
      </GridItem>
    </Grid>
  );
}
