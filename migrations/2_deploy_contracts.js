var MineFILToken = artifacts.require('./MineFILToken.sol');

module.exports = function (deployer) {
  deployer.deploy(MineFILToken)
};