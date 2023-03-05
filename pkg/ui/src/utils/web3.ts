import sha3 from "js-sha3";

const { keccak_256: keccak256 } = sha3;
const ADDRESS_REGEX = /^0x[0-9a-fA-F]{40}$/;
const TRANSACTION_REGEX = /^0x[A-Fa-f0-9]{64}$/;
const TRUST_WALLET_BASE_URL =
  "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum";
const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

/**
 *
 * Checks if the given string is an address.
 *
 * @param address - the given HEX address.
 */
export function isAddress(address: string): boolean {
  return ADDRESS_REGEX.test(address);
}

const ETHERSCAN_URL = "etherscan.io";
const POLYGON_URL = "polygonscan.com";
const GNOSIS_URL = "gnosisscan.io";

const NETWORK_TYPES_URLS = new Map([
  ["main", ETHERSCAN_URL],
  ["kovan", `kovan.${ETHERSCAN_URL}`],
  ["rinkeby", `rinkeby.${ETHERSCAN_URL}`],
  ["ropsten", `ropsten.${ETHERSCAN_URL}`],
  ["goerli", `goerli.${ETHERSCAN_URL}`],
  ["matic", POLYGON_URL],
  ["mumbai", `mumbai.${POLYGON_URL}`],
  ["harmony", `explorer.harmony.one`],
  ["harmonyTest", `explorer.pops.one`],
  ["gnosis", GNOSIS_URL],
]);

const URL_TYPES = new Map([
  ["block", "block"],
  ["transaction", "tx"],
  ["address", "address"],
  ["token", "token"],
]);

type GetBlockExplorerTypes = {
  type: string;
  value: string;
  networkType: string;
};

/**
 * @throws `network type not supported.`
 * This exception is thrown if the network type is not yet supported.
 * @throws `type not supported.`
 * This exception is thrown if the url type is not yet supported.
 */
function _getBlockExplorer({
  type,
  value,
  networkType,
}: GetBlockExplorerTypes): string | never {
  if (networkType === "private") {
    return "";
  }

  if (!NETWORK_TYPES_URLS.has(networkType)) {
    throw new Error("network type not supported.");
  }
  if (!URL_TYPES.has(type)) {
    throw new Error("type not supported.");
  }

  const subdomain = NETWORK_TYPES_URLS.get(networkType);
  const typePart = URL_TYPES.get(type);
  return `https://${subdomain}/${typePart}/${value}`;
}

type OptionsTypes = {
  networkType?: string;
};

/**
 * Generates an etherscan URL.
 *
 * @param type The type of URL (block, transaction, address or token).
 * @param value Identifier of the object, depending on the type (block number, transaction hash, …).
 * @param options The optional parameters.
 * @param options.networkType The Ethereum network type (main, kovan, rinkeby, ropsten, goerli, or private).
 * @returns The generated URL, or an empty string if the parameters are invalid.
 */
export function blockExplorerUrl(
  type: string,
  value: string,
  options?: OptionsTypes
): string {
  const { networkType = "main" } = options || {};

  try {
    return _getBlockExplorer({ type, value, networkType });
  } catch (err: any) {
    console.log(`blockExplorerUrl(): ${err.message}`);
    return "";
  }
}

/**
 *
 * Checks if the given string is a transaction
 *
 * @param address the given HEX address.
 */
export function isTransaction(transaction: string): boolean {
  return TRANSACTION_REGEX.test(transaction);
}

/**
 * Shorten an Ethereum address. `charsLength` allows to change the number of
 * characters on both sides of the ellipsis.
 *
 *  @example
 *  ```
 *  shortenAddress('0x19731977931271')    // 0x1973…1271`
 *  shortenAddress('0x19731977931271', 2) // 0x19…71
 *  shortenAddress('0x197319')            // 0x197319 (already short enough)
 *  ```
 *
 * @param address - The address to shorten.
 * @param preferCharsLength - The number of characters to change on both sides of the ellipsis.
 * @returns The shortened address.
 */
export function shortenAddress(
  address: string,
  preferCharsLength?: number
): string {
  const charsLength = preferCharsLength || 4;
  const prefixLength = 2; // "0x"

  if (!address) {
    return "";
  }
  if (address.length < charsLength * 2 + prefixLength) {
    return address;
  }

  return (
    address.slice(0, charsLength + prefixLength) +
    "…" +
    address.slice(-charsLength)
  );
}

/**
 * Alias for shortenAddress (to generalize its use)
 */
export const shortenTransaction = shortenAddress;

/**
 * Converts to a checksum address
 *
 * This function is taken from web3-utils:
 * https://github.com/ethereum/web3.js/blob/22df832303e349f8ae02f0392e56abe10e1dfaac/packages/web3-utils/src/index.js#L287-L315
 * And was adapted to use js-sha3 rather than soliditySha3.js from web3.js, in
 * order to avoid adding the BN.js and underscore dependencies.
 *
 * @param address the given HEX address
 */
function toChecksumAddress(address: string): string {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    throw new Error(
      'Given address "' + address + '" is not a valid Ethereum address.'
    );
  }

  address = address.toLowerCase().replace(/^0x/i, "");

  const addressHash = keccak256(address).replace(/^0x/i, "");
  let checksumAddress = "0x";

  for (let i = 0; i < address.length; i++) {
    // If ith character is 9 to f then make it uppercase
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += address[i].toUpperCase();
    } else {
      checksumAddress += address[i];
    }
  }

  return checksumAddress;
}

/**
 * Get the address of a token icon
 *
 * @param address The contract address of the token, or the zero address (0x000…) to get the Ethereum icon.
 * @returns The generated URL, or an empty string if the parameters are invalid.
 */
export function tokenIconUrl(address = ""): string {
  try {
    address = toChecksumAddress(address.trim());
  } catch (err) {
    return "";
  }

  if (address === EMPTY_ADDRESS) {
    return `${TRUST_WALLET_BASE_URL}/info/logo.png`;
  }

  return `${TRUST_WALLET_BASE_URL}/assets/${address}/logo.png`;
}
