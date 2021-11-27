import logo from './logo.svg';
import './App.css';
import Modal from './Modal.js';
import React, { useEffect, useState, useRef } from "react";
import html2canvas from 'html2canvas';
const App=() =>{

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const [image, setImage] = useState('')

  const [hash, setHash] = useState("0");

const create=(e)=>{
  var Buffer = require('buffer/').Buffer
  var myImg;
  e.preventDefault();
  html2canvas(document.getElementById("backdrop"),{
    scrollX: -window.scrollX,
    scrollY: -window.scrollY,
   
  
  }).then(function (canvas) {
    myImg = canvas.toDataURL("image/png");
  
  
    console.log(myImg);
    var pngBuffer = Buffer(myImg);
    console.log(pngBuffer);
    const ipfsApi = require('ipfs-api');
    const ipfs = ipfsApi('ipfs.infura.io', 5001, { protocol: "https" })
    ipfs.files.add(pngBuffer, (err, result) => {// Upload buffer to IPFS
      if (err) {
        return "error";
      }
      console.log(result);
      var fileHash = `${result[0].hash}`;
      setHash(fileHash);
      console.log(fileHash);
      openModal();
 
    });
   });
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
      }}>hair➡</button>


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
      }}>dress➡</button>


      <button id="nextshoes" onClick={(e)=>{
             let shoes = document.querySelector("#shoes");
    if (state.shoes < 3) {
      state.shoes++;
      shoes.setAttribute("class", `shoes${state.shoes}`);
    } else if (state.shoes === 3) {
      state.shoes = 0;
      shoes.setAttribute("class", `shoes${state.shoes}`);
    }
      }}>shoes➡</button>
      <button id="nexthat" onClick={(e)=>{
       let hat = document.querySelector("#hat");
    if (state.hat < 4) {
      state.hat++;
      hat.setAttribute("class", `hat${state.hat}`);
    } else if (state.hat === 4) {
      state.hat = 0;
      hat.setAttribute("class", `hat${state.hat}`);
    }
      }}>accessory➡</button>
      <button id="nextface" onClick={(e)=>{
           let face = document.querySelector("#face");
    if (state.face < 2) {
      state.face++;
      face.setAttribute("class", `face${state.face}`);
    } else if (state.face === 2) {
      state.face = 0;
      face.setAttribute("class", `face${state.face}`);
    }
      }}>face➡</button>
    </div>
    <div id="linksBox">
      <a href="https://www.instagram.com/the_lonelymoongirl/"
        ><img src="./images4/insta2.png" alt="insta" height="50px"
      /></a>
      <a href="https://www.amazon.co.uk/Lonely-Moongirl-Hazie/dp/1699887489"
        ><img src="./images4/amazon.jpg" height="50px"
      /></a>
    </div>
    <button onClick={create}>mint</button>
    <Modal open={modalOpen} close={closeModal} header="" hash={hash}>
          </Modal>
        
  </div>
  );
}

export default App;
