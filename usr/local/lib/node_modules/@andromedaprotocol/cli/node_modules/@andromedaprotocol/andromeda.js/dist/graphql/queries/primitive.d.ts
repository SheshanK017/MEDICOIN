/**
 * Queries details about a primitive given its contract address
 * @param contractAddress The contract address of the primitive
 * @returns
 */
export declare function queryPrimitive(contractAddress: string): Promise<string>;
/**
 * Queries the value of a given key from a given primitie contract
 * @param contractAddress The contract address of the primitive
 * @param key The key to query
 * @returns
 */
export declare function queryPrimitiveValue(contractAddress: string, key: string): Promise<{
    __typename?: "PrimitiveResponse" | undefined;
    key: string;
    value: any;
}>;
