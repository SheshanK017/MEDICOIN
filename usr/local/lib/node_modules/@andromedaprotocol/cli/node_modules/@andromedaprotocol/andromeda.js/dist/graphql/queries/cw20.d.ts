/**
 * Queries the token info for a given token contract
 * @param contractAddress
 * @returns
 */
export declare function queryCW20TokenInfo(contractAddress: string): Promise<{
    __typename?: "TokenInfo" | undefined;
    decimals: number;
    name: string;
    symbol: string;
    total_supply: number;
}>;
