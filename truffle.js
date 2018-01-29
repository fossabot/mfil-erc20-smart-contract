require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");
var ropstenProvider = new HDWalletProvider(process.env["MNEMONIC"], "https://ropsten.infura.io/" + process.env["INFURA_KEY"]);
var mainNetProvider = new HDWalletProvider(process.env["MNEMONIC"], "https://mainnet.infura.io/" + process.env["INFURA_KEY"])
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        ropsten: {
            provider: ropstenProvider,
            gas: 3000000,
            gasPrice: 3000000000,
            network_id: '1',
        },
        mainnet: {
            provider: mainNetProvider,
            gas: 3000000,
            gasPrice: 3000000000,
            network_id: '2',
        }
    }
};