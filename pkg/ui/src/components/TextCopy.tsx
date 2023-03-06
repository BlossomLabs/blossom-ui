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

export default function TextCopy({
  value,
  adornment,
}: {
  value: string;
  adornment?: React.ReactNode;
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

  return (
    <Grid
      alignItems={"center"}
      border={"1px solid"}
      color={"blackAlpha.400"}
      borderRadius={"md"}
      overflow={"hidden"}
      gridTemplateColumns={`auto max(calc(100% - 2.5rem ${
        adornment ? "- 3rem" : ""
      })) auto`}
      maxH={12}
      maxW={"full"}
      w={"sm"}
    >
      <GridItem boxSize={"full"}>{adornment}</GridItem>
      <GridItem pl={2}>
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
            size={"md"}
          />
        </Tooltip>
      </GridItem>
    </Grid>
  );
}
