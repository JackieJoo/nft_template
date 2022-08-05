import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config({ path: '.env' });

const config: HardhatUserConfig = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL || '',
      accounts: [process.env.RINKEBY_PRIVATE_KEY || ''],
    },
  },
};

export default config;
