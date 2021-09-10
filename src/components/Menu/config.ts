import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://mouse.farm/',
  },
  
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.mouse.farm/#/swap',
        icon: 'TradeIcon',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.mouse.farm/#/pool',
        icon: 'LiquidityIcon',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://mouse.farm/farms',
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/farmhubbsc",
        icon: 'GithubIcon', 
      },
      {
        label: "Docs",
        href: "https://docs.farmhub.community/",
        icon: 'BooksIcon',
      },
      // {
      //   label: "Blog",
      //   href: "https://farmhub.medium.com/",
      // },
    ],
  },
  {
    label: 'Audit by Solidity',
    icon: 'AuditIcon',
    href: 'https://solidity.finance/audits/Farmhub/',
  },
]

export default config
