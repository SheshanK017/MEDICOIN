/**
 * Queries a stored Keplr chain config by identifier
 * @param identifier The chain ID for the config to query
 * @returns
 */
export declare function queryKeplrConfig(identifier: string): Promise<{
    __typename?: "KeplrConfig" | undefined;
    chainId: string;
    coinType: number;
    chainName: string;
    rpc: string;
    rest: string;
    bip44: {
        __typename?: "Bip44" | undefined;
        coinType: number;
    };
    bech32Config: {
        __typename?: "Bech32Config" | undefined;
        bech32PrefixAccPub: string;
        bech32PrefixValPub: string;
        bech32PrefixAccAddr: string;
        bech32PrefixConsPub: string;
        bech32PrefixValAddr: string;
        bech32PrefixConsAddr: string;
    };
    currencies: {
        __typename?: "Currency" | undefined;
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    }[];
    feeCurrencies: {
        __typename?: "Currency" | undefined;
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    }[];
    gasPriceStep: {
        __typename?: "GasPriceStep" | undefined;
        average: number;
        low: number;
        high: number;
    };
    stakeCurrency: {
        __typename?: "Currency" | undefined;
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    };
}>;
/**
 * Queries a stored Keplr chain config by identifier
 * @param identifier The chain ID for the config to query
 * @returns
 */
export declare function QueryKeplrAllConfigs(): Promise<{
    __typename?: "KeplrConfig" | undefined;
    chainId: string;
    coinType: number;
    chainName: string;
    rpc: string;
    rest: string;
    bip44: {
        __typename?: "Bip44" | undefined;
        coinType: number;
    };
    bech32Config: {
        __typename?: "Bech32Config" | undefined;
        bech32PrefixAccPub: string;
        bech32PrefixValPub: string;
        bech32PrefixAccAddr: string;
        bech32PrefixConsPub: string;
        bech32PrefixValAddr: string;
        bech32PrefixConsAddr: string;
    };
    currencies: {
        __typename?: "Currency" | undefined;
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    }[];
    feeCurrencies: {
        __typename?: "Currency" | undefined;
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    }[];
    gasPriceStep: {
        __typename?: "GasPriceStep" | undefined;
        average: number;
        low: number;
        high: number;
    };
    stakeCurrency: {
        __typename?: "Currency" | undefined;
        coinDenom: string;
        coinGeckoId: string;
        coinDecimals: number;
        coinMinimalDenom: string;
    };
}[]>;
