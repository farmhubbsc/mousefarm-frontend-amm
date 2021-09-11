import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://mouse.farmhttps://clever-curie-0b05e8.netlify.app/#/swap/',
  },
  
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://clever-curie-0b05e8.netlify.app/#/swap',
        icon: 'TradeIcon',
      },
      {
        label: 'Liquidity',
        href: 'https://clever-curie-0b05e8.netlify.app/#/swap',
        icon: 'LiquidityIcon',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://clever-curie-0b05e8.netlify.app/#/swap',
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
