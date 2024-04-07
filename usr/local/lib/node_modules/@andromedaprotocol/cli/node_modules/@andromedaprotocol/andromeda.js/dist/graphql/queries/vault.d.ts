import { IAndrStrategyType } from "@andromedaprotocol/gql";
export declare function queryBalance(contractAddress: string, address: string): Promise<{
    __typename?: "Coin" | undefined;
    amount: string;
    denom: string;
}[]>;
export declare function queryStrategyAddress(contractAddress: string, strategy: IAndrStrategyType): Promise<{
    __typename?: "AndrStrategy" | undefined;
    address: string;
    strategyType: import("@andromedaprotocol/gql/dist/__generated/node").IAndrStrategyType;
}>;
