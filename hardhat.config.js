require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");

const secret = require("./secret.json");
const INFURA_PROJECT_ID = secret.INFURA;
const PRIVATE_KEY = secret.PRIVATE_KEY;
const ETHERSCAN = secret.ETHERSCAN;
const XDAI_RPC = secret.XDAI_RPC;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.6.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 10000000
    },
    xdai: {
      url: XDAI_RPC,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 12499987,
      gasPrice: 10000000001,
      gasMultiplier: 1
    },
  },
  etherscan: {
    apiKey: ETHERSCAN,
  },
  tenderly: {
    username: "greenhornet",
    project: "vesting",
  },
};

