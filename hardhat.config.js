const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@atixlabs/hardhat-time-n-mine");
require("hardhat-deploy");
require("hardhat-gas-reporter");


require('./tasks/demo');
require('./tasks/swap');
require('./tasks/topup');
require('./tasks/redeem');
require('./tasks/buy_pts');
require('./tasks/accounts');
require('./tasks/reg_member');
require('./tasks/update_pts');
require('./tasks/upgrade_tier');
require('./tasks/set_allowance');

const mnemonic = process.env.MNEMONIC

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.9"
            }
        ]
    },

    gasReporter: {
        enabled: true
    },

    networks: {
        development: {
            url: "http://127.0.0.1:8545",     // Localhost (default: none)
            accounts: {
                mnemonic: mnemonic,
                count: 10
            },
            live: false, 
            saveDeployments: true
        },
        bttc_test: {
            url: 'https://loyaltyworkshop-23907.morpheuslabs.io/JuZnSNlYrYIgBbh3HYhrjoTURNgogg',
            accounts: [
                process.env.DEPLOYER,
                process.env.ACCOUNT
            ],
            timeout: 20000,
            chainId: 1029
        },
    },

    paths: {
        sources: "./contracts",
        tests: "./tests",
        cache: "./build/cache",
        artifacts: "./build/artifacts",
        deployments: "./deployments"
    },

    etherscan: {
        apiKey: process.env.BTTC_API_KEY,
        customChains: [
            {
                network: "BitTorrent Chain Testnet",
                chainId: 1029,
                urls: {
                    apiURL: "https://api-testnet.bttcscan.com/api/",
                    browserURL: "https://testnet.bttcscan.com/"
                }
            },
            {
                network: "BitTorrent Chain Mainnet",
                chainId: 199,
                urls: {
                    apiURL: "https://api.bttcscan.com/api/",
                    browserURL: "https://bttcscan.com/"
                }
            },
        ]
    }
}