import { Button, Link, Text } from "@chakra-ui/react";
import { blockExplorerUrl, isTransaction, shortenTransaction } from "../utils";

type TransactionBadgeProps = {
  transaction: string;
  disabled?: boolean;
  /**
   * @defaultValue main
   */
  networkType?: string;
  /**
   * @defaultValue true
   */
  shorten?: boolean;
};

/**
 * TransactionBadge
 *
 * @param disabled - Disables the link.
 * @param networkType - Checks the type of network to get correct scan URL.
 * @param shorten - If true, only render the first and last four characters of the transaction hash (excluding the '0x' prefix).
 * @param transaction - The transaction hash. If this is not supplied or an invalid transaction hash is supplied, the badge will display "Invalid".
 */
export default function TransactionBadge({
  disabled,
  networkType,
  shorten,
  transaction,
}: TransactionBadgeProps) {
  const isTx = isTransaction(transaction);
  const transactionUrl = isTx
    ? blockExplorerUrl("transaction", transaction, { networkType })
    : "";

  const label = shorten ? shortenTransaction(transaction) : transaction;

  const isDisabled = disabled || !transactionUrl;

  return isDisabled ? (
    <Button disabled={true} variant={"badge"}>
      <Text as={"span"} textStyle={"body2"}>
        Invalid transaction
      </Text>
    </Button>
  ) : (
    <Link href={transactionUrl} isExternal title={transaction}>
      <Button size={"sm"} variant={"badge"}>
        <Text as={"span"} textStyle={"body2"}>
          {label}
        </Text>
      </Button>
    </Link>
  );
}

TransactionBadge.defaultProps = {
  networkType: "main",
  shorten: true,
};
