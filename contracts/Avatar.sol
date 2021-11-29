pragma solidity ^0.6.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Avatar is ERC721 {
  constructor() ERC721("Avatar", "AVATAR") public  {}
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

 }