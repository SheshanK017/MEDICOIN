import tokens, { testnetTokens } from '../tokens';
export const getTokensBySymbolForTestnet = () => Object.keys(tokens).reduce((result, symbol) => {
    const tokenSymbolToUpperCase = symbol.toUpperCase();
    const tokenMeta = testnetTokens()[symbol] || tokens[symbol];
    return {
        ...result,
        [tokenSymbolToUpperCase]: tokenMeta,
    };
}, {});
//# sourceMappingURL=testnet.js.map