import { Chain } from './types'

export const zetachainAthensTestnet = {
  id: 7_001,
  name: 'ZetaChain Athens Testnet',
  network: 'ZetaChain Athens Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Zeta',
    symbol: 'ZETA',
  },
  rpcUrls: {
    default: { http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'] },
    public: { http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'] },
  },
  blockExplorers: {
    etherscan: { name: 'ZetaScan', url: 'https://athens.explorer.zetachain.com' },
    default: { name: 'ZetaScan', url: 'https://athens.explorer.zetachain.com' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11907934,
    },
  },
  testnet: true
} as const satisfies Chain
