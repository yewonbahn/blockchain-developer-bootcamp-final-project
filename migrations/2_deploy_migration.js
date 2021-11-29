const MyAvatar = artifacts.require('Avatar')
module.exports = function (deployer) {
  deployer.deploy(MyAvatar)
}