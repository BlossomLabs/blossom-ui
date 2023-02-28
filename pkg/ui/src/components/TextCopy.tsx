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

export default function TextCopy({ value }: { value: string }): JSX.Element {
  const { onCopy } = useClipboard(value);
  const [hasCopied, onClick] = useState(false);

  function handleOnClick() {
    onCopy();
    onClick(true);
    setTimeout(() => {
      onClick(false);
    }, 1500);
  }

  return (
    <Grid
      alignItems={"center"}
      border={"1px solid"}
      color={"blackAlpha.400"}
      borderRadius={"md"}
      pl={2}
      gridTemplateColumns={"max(calc(100% - 2.5rem)) auto"}
      overflow={"hidden"}
    >
      <GridItem>
        <Text whiteSpace={"nowrap"}>{value}</Text>
      </GridItem>
      <GridItem bgColor={"white"}>
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
          />
        </Tooltip>
      </GridItem>
    </Grid>
  );
}
