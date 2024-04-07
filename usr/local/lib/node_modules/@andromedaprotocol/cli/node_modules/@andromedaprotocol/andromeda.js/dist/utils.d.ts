/**
 * Encodes data into a base64 string
 * @param data
 * @returns
 */
export declare function encode(data: any): string;
/**
 * Validates a given address. If an address prefix is provided it will also be validated.
 * @param addr
 * @param addressPrefix
 * @returns
 */
export declare function validateAddress(addr: string, addressPrefix?: string): boolean;
/**
 * Gets a TX URL from a given hash and explorer URL
 * @param hash
 * @param url
 * @returns
 */
export declare function getTxExplorerURL(hash: string, url: string): string;
