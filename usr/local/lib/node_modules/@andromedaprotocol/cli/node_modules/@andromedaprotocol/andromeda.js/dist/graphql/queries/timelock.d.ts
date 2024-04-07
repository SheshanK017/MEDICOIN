import { IAndrSearchOptions } from "@andromedaprotocol/gql/dist/__generated/node";
/**
 * Queries a timelock contract for locked funds given an owner/recipient tuple
 * @param contractAddress
 * @param owner
 * @param recipient
 * @returns
 */
export declare function queryTimelockLockedFunds(contractAddress: string, owner: string, recipient: string): Promise<{
    __typename?: "Escrow" | undefined;
    recipient: any;
    coins: {
        __typename?: "Coin" | undefined;
        amount: string;
        denom: string;
    }[];
    condition: {
        __typename?: "EscrowCondition" | undefined;
        expiration: any;
        miniumFunds: {
            __typename?: "Coin" | undefined;
            amount: string;
            denom: string;
        }[];
    };
}>;
/**
 * Queries a timelock contract for all locked funds for a given recipient
 * @param contractAddress
 * @param recipient
 * @param options
 * @returns
 */
export declare function queryRecipientLockedFunds(contractAddress: string, recipient: string, options: IAndrSearchOptions): Promise<{
    __typename?: "Escrow" | undefined;
    recipient: any;
    coins: {
        __typename?: "Coin" | undefined;
        amount: string;
        denom: string;
    }[];
    condition: {
        __typename?: "EscrowCondition" | undefined;
        expiration: any;
        miniumFunds: {
            __typename?: "Coin" | undefined;
            amount: string;
            denom: string;
        }[];
    };
}[]>;
