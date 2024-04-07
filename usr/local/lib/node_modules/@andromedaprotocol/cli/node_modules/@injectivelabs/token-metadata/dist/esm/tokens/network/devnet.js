import tokens, { devnetTokens } from '../tokens';
export const getTokensBySymbolForDevnet = () => Object.keys(tokens).reduce((result, symbol) => {
    const tokenSymbolToUpperCase = symbol.toUpperCase();
    const tokenMeta = devnetTokens()[symbol] || tokens[symbol];
    return {
        ...result,
        [tokenSymbolToUpperCase]: tokenMeta,
    };
}, {});
export const getTokensBySymbolForDevnet1 = () => Object.keys(tokens).reduce((result, symbol) => {
    const tokenSymbolToUpperCase = symbol.toUpperCase();
    const tokenMeta = devnetTokens()[symbol] || tokens[symbol];
    return {
        ...result,
        [tokenSymbolToUpperCase]: tokenMeta,
    };
}, {});
export const getTokensBySymbolForDevnet2 = () => Object.keys(tokens).reduce((result, symbol) => {
    const tokenSymbolToUpperCase = symbol.toUpperCase();
    const tokenMeta = devnetTokens()[symbol] || tokens[symbol];
    return {
        ...result,
        [tokenSymbolToUpperCase]: tokenMeta,
    };
}, {});
//# sourceMappingURL=devnet.js.map