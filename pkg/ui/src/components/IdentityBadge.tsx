import { useCallback } from "react";
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
  Tag,
  PopoverFooter,
  Link,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { blockExplorerUrl, isAddress, shortenAddress } from "../utils";
import Blockie from "./Blockie";
import AddressField from "./AddressField";

type IdentityBadgeProps = {
  address?: string;
  isAccountConnected?: boolean;
  compact?: boolean;
  label?: string;
  networkType?: string;
  /**
   * @defaultValue `true`
   */
  shorten?: boolean;
  disabled?: boolean;
  popoverAction?: {
    label: React.ReactNode;
    onClick: () => void;
  };
  /**
   * @defaultValue `Address`
   */
  popoverTitle?: React.ReactNode;
};

/**
 *
 *	@param address - A valid etherum address.
 *	@param shorten - If true and entity is a valid address, reduces entity to only the first and last four characters (excluding the "0x" prefix) for display. i.e: address="0xcafe…5f2C"
 *	@param label - A label for the address. If available, label is displayed instead of the address on the badge.
 *	@param disabled - Disables the badge as a button and avoids prompting the popover on click.
 *	@param compact - Smaller version of the IdentityBadge. Should be used when the IdentityBadge is placed inline with text.
 *	@param popoverTitle - The title of the popover. You can pass anything that can be rendered, such as a num, string, DOM element, an array of them, or React fragments that contain them.
 *	@param isAccountConnected - If the given, assumes `address` is the same as the connected account and renders "you" in the popover.
 *	@param networkType - Checks the type of network to get an Etherscan URL from the entity.
 *	@param popoverAction  - The action of the popover.
 *	@param popoverAction.label  - The node rendered in the popover's action button.
 *	@param popoverAction.onClick  - The onclick handler for the popover's action button.
 *
 */
export default function IdentityBadge({
  address = "",
  shorten,
  label,
  disabled,
  compact,
  popoverTitle,
  isAccountConnected,
  networkType,
  popoverAction,
}: IdentityBadgeProps) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isValidAddress = isAddress(address);
  const displayLabel =
    label || (isValidAddress && shorten ? shortenAddress(address) : address);
  const etherscanUrl = blockExplorerUrl("address", address, { networkType });

  const handlePopoverActionClick = useCallback(() => {
    onClose();
    if (popoverAction && popoverAction.onClick) {
      popoverAction.onClick();
    }
  }, [onClose, popoverAction]);

  function IdentityBadgeBlockie() {
    return (
      <Blockie
        address={address}
        scale={compact ? 0.75 : 1}
        radius={compact ? "sm" : "none"}
      />
    );
  }

  return disabled ? (
    <HStack
      whiteSpace={"nowrap"}
      textOverflow={"ellipsis"}
      overflow={"hidden"}
      cursor={"default"}
    >
      <IdentityBadgeBlockie />
      <Text
        as={"span"}
        title={address}
        textOverflow={"ellipsis"}
        overflow={"hidden"}
        color={"badgeContent"}
      >
        {displayLabel}
      </Text>
    </HStack>
  ) : (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button
          leftIcon={isValidAddress ? <IdentityBadgeBlockie /> : undefined}
          title={address}
          onClick={onToggle}
          variant={"badge"}
        >
          {displayLabel}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <HStack>
            <Text>{popoverTitle}</Text>
            {isAccountConnected ? (
              <Tag
                size={"md"}
                variant="subtle"
                colorScheme="cyan"
                borderRadius={"full"}
                title="This is your Ethereum address"
              >
                you
              </Tag>
            ) : null}
          </HStack>
        </PopoverHeader>
        <PopoverBody>
          <AddressField address={address} />
        </PopoverBody>
        <PopoverFooter>
          <HStack justify={"space-between"}>
            {popoverAction ? (
              <Button onClick={handlePopoverActionClick}>
                {popoverAction.label}
              </Button>
            ) : null}
            {etherscanUrl ? (
              <Flex justify={"flex-end"} w={popoverAction ? "unset" : "full"}>
                <Link href={etherscanUrl} target={"_blank"}>
                  See on Explorer
                </Link>
              </Flex>
            ) : null}
          </HStack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

IdentityBadge.defaultProps = {
  popoverTitle: "Address",
  shorten: true,
};
