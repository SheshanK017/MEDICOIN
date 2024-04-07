import { ChainId, EthereumChainId } from '@injectivelabs/ts-types';
import { INJ_DENOM } from '@injectivelabs/utils';
export const mainnetChainInfo = {
    feeDenom: INJ_DENOM,
    chainId: ChainId.Mainnet,
    ethereumChainId: EthereumChainId.Mainnet,
    env: 'mainnet',
};
export const testnetChainInfo = {
    feeDenom: INJ_DENOM,
    chainId: ChainId.Testnet,
    ethereumChainId: EthereumChainId.Goerli,
    env: 'testnet',
};
export const devnetChainInfo = {
    feeDenom: INJ_DENOM,
    chainId: ChainId.Devnet,
    ethereumChainId: EthereumChainId.Goerli,
    env: 'devnet',
};
export const localChainInfo = {
    feeDenom: INJ_DENOM,
    chainId: ChainId.Devnet,
    ethereumChainId: EthereumChainId.Goerli,
    env: 'local',
};
//# sourceMappingURL=chainInfos.js.map