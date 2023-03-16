import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  HStack,
  Text,
  Image,
  PopoverFooter,
  Link,
  Flex,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { blockExplorerUrl, isAddress, tokenIconUrl } from "../utils";
import { type TokenBadgeProps } from "../types";
import AddressField from "./AddressField";

/**
 *
 *	@param address - A valid etherum address.
 *	@param disabled - Disables the badge as a button and avoids prompting the popover on click.
 *	@param compact - Smaller version of the TokenBadge. Should be used when the TokenBadge is placed inline with text.
 *	@param networkType - Checks the type of network to get an Etherscan URL from the entity.
 *  @param labelStyle - Styles to apply to the label.
 *
 */
export default function TokenBadge({
  address = "",
  name = "",
  disabled,
  networkType = "main",
  symbol,
  labelStyle,
  ...props
}: TokenBadgeProps) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isValidAddress = isAddress(address);
  const etherscanUrl = blockExplorerUrl("token", address, { networkType });
  const iconSrc =
    isValidAddress && networkType === "main" ? tokenIconUrl(address) : "";
  const title = name && symbol ? `${name} (${symbol})` : symbol;

  function Label() {
    return (
      <HStack
        whiteSpace={"nowrap"}
        textOverflow={"ellipsis"}
        overflow={"hidden"}
        textStyle={"body2"}
        style={labelStyle}
      >
        {name ? (
          <Text
            as={"span"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            minW={"20%"}
          >
            {name}
          </Text>
        ) : null}

        <Text as={"span"}>{name ? `(${symbol})` : symbol}</Text>
      </HStack>
    );
  }

  function TokenIcon({ size = "base" }: { size?: "lg" | "base" }) {
    const isIconBig = size === "lg";

    return (
      <Center
        overflow={"hidden"}
        borderRadius={props.compact ? "sm" : "base"}
        boxSize={isIconBig ? "full" : 4}
      >
        <Image boxSize={isIconBig ? 9 : "full"} src={iconSrc} alt={title} />
      </Center>
    );
  }

  return disabled || !isValidAddress ? (
    <HStack cursor={"default"}>
      <TokenIcon />
      <Label />
    </HStack>
  ) : (
    <Popover isOpen={isOpen} onClose={onClose} variant={"badge"}>
      <PopoverTrigger>
        <Button
          leftIcon={isValidAddress ? <TokenIcon /> : undefined}
          title={`${title} − ${address || "No address"}`}
          onClick={onToggle}
          variant={"badge"}
          pl={2}
          {...props}
        >
          <Label />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>
          <AddressField
            address={address}
            icon={iconSrc ? <TokenIcon size={"lg"} /> : null}
          />
        </PopoverBody>
        <PopoverFooter>
          {etherscanUrl ? (
            <Flex justify={"flex-end"} w={"full"}>
              <Link href={etherscanUrl} target={"_blank"} textStyle={"body3"}>
                See on Explorer
              </Link>
            </Flex>
          ) : null}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
