pragma solidity ^0.6.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

//Avatar is inherited from ERC721 contract
contract Avatar is ERC721 {
    //constructor has String Avatar
  AggregatorV3Interface internal priceFeed;

  constructor() ERC721("Avatar", "AVATAR") public  {
       priceFeed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
  }

  event AvatarNFTCreated (

    uint tokenId,
    string imageURL,
    uint date,
    address payable from
  );


   function mintAVATARNFT(string memory _tokenURI) external {
       uint _tokenId = totalSupply().add(1);
       _safeMint(msg.sender, _tokenId);
       _setTokenURI(_tokenId, _tokenURI);
       emit AvatarNFTCreated(_tokenId, _tokenURI, now, msg.sender);
    }

    function looping (uint x) public returns (bool) {
      for(uint i; i < x; i++){
          loops += 1;
      }
      return true;
  }
  

 }
   interface Token {
    enum TokenType { Fungible, NonFungible }
    struct Coin { string obverse; string reverse; }
    function transfer(address recipient, uint amount) external;
}