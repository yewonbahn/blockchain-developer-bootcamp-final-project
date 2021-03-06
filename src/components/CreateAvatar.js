import logo from '../logo.svg';
import './App.css';
import Modal from './Modal.js';
import React, { useEffect, useState, useRef } from "react";
import html2canvas from 'html2canvas';
import { NFTStorage, File } from 'nft.storage';
import { apiKey } from '../APIKEYS';
import { useHistory } from 'react-router-dom'
const CreateAvatar=() =>{
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const [image, setImage] = useState('')
  const [newimage, setnewImage] = useState('')
  const [hash, setHash] = useState("0");

// const create=(e)=>{
//   var Buffer = require('buffer/').Buffer
//   var myImg;
//   e.preventDefault();
//   html2canvas(document.getElementById("backdrop"),{
//     scrollX: -window.scrollX,
//     scrollY: -window.scrollY,
   
  
//   }).then(function (canvas) {
//     myImg = canvas.toDataURL("image/png");
  
  
//     console.log(myImg);
//     var pngBuffer = Buffer(myImg);
//     console.log(pngBuffer);
//     const ipfsApi = require('ipfs-api');
//     const ipfs = ipfsApi('ipfs.infura.io', 5001, { protocol: "https" })
//     ipfs.files.add(pngBuffer, (err, result) => {// Upload buffer to IPFS
//       if (err) {
//         return "error";
//       }
//       console.log(result);
//       var fileHash = `${result[0].hash}`;
//       setHash(fileHash);
//       console.log(fileHash);
//       openModal();
 
//     });
//    });
// }

const create=async (event) =>{
  event.preventDefault()

  var myImg;
  event.preventDefault();
  html2canvas(document.getElementById("backdrop"),{
    scrollX: -window.scrollX,
    scrollY: -window.scrollY,
   
  
  }).then(async function (canvas) {
    myImg = canvas.toDataURL("image/png");
    var newImage = "";
    canvas.toBlob(myImg => {
      
      newImage = new File([myImg], "image.png")

      try {
        setLoading(true)
      
        console.log(newImage)
        const client = new NFTStorage({ token: apiKey })
        const metadata = client.store({
          name: "yewon",
          description: "example",
          image: new File([newImage], "image.png", { type: "image/png" }),
        })
        if (metadata) {
          
          console.log(metadata)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      
      }
    });
    // var pngBuffer = Buffer(myImg);
    console.log(new File([myImg], "image.png"))
    // try {
    //   setLoading(true)
    
    //   console.log(newImage)
    //   const client = new NFTStorage({ token: apiKey })
    //   const metadata = await client.store({
    //     name: "yewon",
    //     description: "example",
    //     image: new File([newImage], "image.png", { type: "image/png" }),
    //   })
    //   if (metadata) {
    //     history.push('/')
    //     console.log(metadata)
    //   }
    // } catch (error) {
    //   console.log(error)
    //   setLoading(false)
    
    // }
   });

   openModal();
}
  let state = {
    dress: 0,
    hair: 0,
    hat: 0,
    shoes: 0,
    accessory: 0,
    face: 0,
  };
  return (
    <div id="box">
    <div id="backdrop">
      <div id="face"></div>
      <div id="hat"></div>
      <div id="hair"></div>
      <div id="girl"></div>
      <div id="shoes"></div>
      <div id="dress"></div>
    </div>
    <div class="buttonBox">
      <button id="nexthair" onClick={(e)=>{
            let hair = document.querySelector("#hair");
            if (state.hair < 5) {
              state.hair++;
              hair.setAttribute("class", `hair${state.hair}`);
            } else if (state.hair === 5) {
              state.hair = 0;
              hair.setAttribute("class", `hair${state.hair}`);
            }
      }}>hair???</button>


      <button id="nextdress" onClick={(e)=>{
           
           let dress = document.querySelector("#dress");
     console.log(dress);
           if (state.dress < 7) {
             state.dress++;
             dress.setAttribute("class", `dress${state.dress}`);
           } else if (state.dress === 7) {
             state.dress = 0;
             dress.setAttribute("class", `dress${state.dress}`);
           }
      }}>dress???</button>


      <button id="nextshoes" onClick={(e)=>{
             let shoes = document.querySelector("#shoes");
    if (state.shoes < 3) {
      state.shoes++;
      shoes.setAttribute("class", `shoes${state.shoes}`);
    } else if (state.shoes === 3) {
      state.shoes = 0;
      shoes.setAttribute("class", `shoes${state.shoes}`);
    }
      }}>shoes???</button>
      <button id="nexthat" onClick={(e)=>{
       let hat = document.querySelector("#hat");
    if (state.hat < 4) {
      state.hat++;
      hat.setAttribute("class", `hat${state.hat}`);
    } else if (state.hat === 4) {
      state.hat = 0;
      hat.setAttribute("class", `hat${state.hat}`);
    }
      }}>accessory???</button>
      <button id="nextface" onClick={(e)=>{
           let face = document.querySelector("#face");
    if (state.face < 3) {
      state.face++;
      face.setAttribute("class", `face${state.face}`);
    } else if (state.face === 3) {
      state.face = 0;
      face.setAttribute("class", `face${state.face}`);
    }
      }}>face???</button>
    </div>
 
    <button onClick={create}>Create Avatar</button>
    <Modal open={modalOpen} close={closeModal} header="" hash={hash}>
          </Modal>
        
  </div>
  );
}

export default  CreateAvatar;
