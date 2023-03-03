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
  shorten?: boolean;
  disabled?: boolean;
  popoverAction?: {
    label: React.ReactNode;
    onClick: () => void;
  };
  popoverTitle?: React.ReactNode;
};

export default function IdentityBadge({
  address = "",
  shorten,
  label,
  disabled,
  compact,
  popoverTitle,
  isAccountConnected,
  networkType,
}: IdentityBadgeProps) {
  const isValidAddress = isAddress(address);
  const displayLabel =
    label || (isValidAddress && shorten ? shortenAddress(address) : address);
  const etherscanUrl = blockExplorerUrl("address", address, { networkType });

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
    <HStack>
      <IdentityBadgeBlockie />
      <Text as={"span"} title={address}>
        {displayLabel}
      </Text>
    </HStack>
  ) : (
    <Popover>
      <HStack>
        <PopoverTrigger>
          <Button
            leftIcon={isValidAddress ? <IdentityBadgeBlockie /> : undefined}
            size={"sm"}
            title={address}
          >
            {displayLabel}
          </Button>
        </PopoverTrigger>
      </HStack>
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
          {etherscanUrl ? (
            <Flex justify={"flex-end"}>
              <Link href={etherscanUrl}>See on Explorer</Link>
            </Flex>
          ) : null}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

IdentityBadge.defaultProps = {
  popoverTitle: "Address",
};
