pragma solidity ^0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Avatar.sol";

contract TestAdoption {
 // The address of the adoption contract to be tested
 Avatar avatar = Avatar(DeployedAddresses.Avatar());

 // The id of the pet that will be used for testing
uint expectedPetId = 1;


 // The expected owner of adopted pet is this contract
 address expectedAdopter = address(this);


}