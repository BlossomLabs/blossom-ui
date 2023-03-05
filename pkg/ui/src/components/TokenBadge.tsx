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
} from "@chakra-ui/react";
import { blockExplorerUrl, isAddress, tokenIconUrl } from "../utils";
import AddressField from "./AddressField";

type TokenBadgeProps = {
  symbol: string;
  name?: string;
  address?: string;
  compact?: boolean;
  /**
   * @defaultValue main
   */
  networkType?: string;
  disabled?: boolean;
};

/**
 *
 *	@param address - A valid etherum address.
 *	@param disabled - Disables the badge as a button and avoids prompting the popover on click.
 *	@param compact - Smaller version of the TokenBadge. Should be used when the TokenBadge is placed inline with text.
 *	@param networkType - Checks the type of network to get an Etherscan URL from the entity.
 *
 */
export default function TokenBadge({
  address = "",
  name = "",
  disabled,
  compact,
  networkType = "main",
  symbol,
}: TokenBadgeProps) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isValidAddress = isAddress(address);
  const etherscanUrl = blockExplorerUrl("token", address, { networkType });
  const iconSrc =
    isValidAddress && networkType === "main" ? tokenIconUrl(address) : "";
  const title = name && symbol ? `${name} (${symbol})` : symbol;

  function Label() {
    return (
      <HStack>
        {name ? <Text as={"span"}>{name}</Text> : null}
        <Text as={"span"}>{name ? `(${symbol})` : symbol}</Text>
      </HStack>
    );
  }

  function TokenIcon() {
    return <Image boxSize={4} src={iconSrc} alt={title} />;
  }

  return disabled || !isValidAddress ? (
    <HStack>
      <TokenIcon />
      <Label />
    </HStack>
  ) : (
    <Popover isOpen={isOpen} onClose={onClose}>
      <HStack>
        <PopoverTrigger>
          <Button
            leftIcon={isValidAddress ? <TokenIcon /> : undefined}
            size={"sm"}
            title={`${title} − ${address || "No address"}`}
            onClick={onToggle}
          >
            <Label />
          </Button>
        </PopoverTrigger>
      </HStack>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <HStack>
            <Text>{title}</Text>
          </HStack>
        </PopoverHeader>
        <PopoverBody>
          <AddressField
            address={address}
            icon={iconSrc ? <TokenIcon /> : null}
          />
        </PopoverBody>
        <PopoverFooter>
          {etherscanUrl ? (
            <Flex justify={"flex-end"} w={"full"}>
              <Link href={etherscanUrl} target={"_blank"}>
                See on Explorer
              </Link>
            </Flex>
          ) : null}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
