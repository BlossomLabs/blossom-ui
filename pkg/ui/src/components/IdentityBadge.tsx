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
} from "@chakra-ui/react";
import { isAddress, shortenAddress } from "../utils";
import Blockie from "./Blockie";

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
}: IdentityBadgeProps) {
  const isValidAddress = isAddress(address);
  const displayLabel =
    label || (isValidAddress && shorten ? shortenAddress(address) : address);

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
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
