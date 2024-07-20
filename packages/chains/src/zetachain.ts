import { Chain } from './types'

export const zetachain = {
  id: 7_000,
  name: 'ZetaChain',
  network: 'ZetaChain',
  nativeCurrency: {
    decimals: 18,
    name: 'Zeta',
    symbol: 'ZETA',
  },
  rpcUrls: {
    default: { http: ['https://zeta-chain.drpc.org'] },
    public: { http: ['https://zetachain-evm.blockpi.network/v1/rpc/public'] },
  },
  blockExplorers: {
    etherscan: { name: 'ZetaScan', url: 'https://explorer.zetachain.com' },
    default: { name: 'ZetaScan', url: 'https://explorer.zetachain.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11907934,
    },
  },
} as const satisfies Chain
