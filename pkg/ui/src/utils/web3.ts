const ADDRESS_REGEX = /^0x[0-9a-fA-F]{40}$/;

/**
 *
 * Checks if the given string is an address
 *
 * @param address - the given HEX address
 */
export function isAddress(address: string): boolean {
  return ADDRESS_REGEX.test(address);
}
