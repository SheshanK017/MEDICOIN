/**
 * Queries a splitter contract for its config
 * @param contractAddress
 * @returns
 */
export declare function queryConfig(contractAddress: string): Promise<{
    __typename?: "Splitter" | undefined;
    lock: any;
    recipients: {
        __typename?: "AddressPercent" | undefined;
        percent: string;
        recipient: any;
    }[];
}>;
