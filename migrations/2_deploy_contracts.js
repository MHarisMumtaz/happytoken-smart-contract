const HalalToken = artifacts.require("HalalToken");

module.exports = function(deployer) {
  deployer.deploy(HalalToken);
};
