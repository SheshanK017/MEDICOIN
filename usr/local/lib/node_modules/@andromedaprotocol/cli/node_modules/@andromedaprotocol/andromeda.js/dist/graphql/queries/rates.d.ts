/**
 * Queries a rates contract for its stored rate info
 * @param contractAddress
 * @returns
 */
export declare function queryPayments(contractAddress: string): Promise<{
    __typename?: "RateInfo" | undefined;
    description: string;
    is_additive: boolean;
    receivers: any[];
    rate: {
        __typename?: "Rate" | undefined;
        external: {
            __typename?: "ADORate" | undefined;
            address: string;
            key: string;
        };
        flat: {
            __typename?: "Coin" | undefined;
            amount: string;
            denom: string;
        };
        percent: {
            __typename?: "PercentRate" | undefined;
            decimal: number;
        };
    };
}[]>;
