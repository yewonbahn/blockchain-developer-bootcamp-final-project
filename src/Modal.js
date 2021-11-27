/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import "./modal.css";


const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

    const { open, close, header, hash } = props;
    const [nftName, setNftName] = useState("initial value")

    // 그림을 IPFS로부터 가져옴
    const getIPFS = () => {
        const ipfsApi = require('ipfs-api');
        const ipfs = ipfsApi('ipfs.infura.io', 5001, { protocol: "https" })
        const cidIPFS = hash;

        ipfs.files.get(cidIPFS, (err, result) => { // Download buffer from IPFS
            var imgFile = result[0].content.toString('utf8');
            document.getElementById("Captured").src = imgFile;
        });
    };

    function set() {
        setNftName(document.getElementById("input").value)
        console.log(nftName)
    }

   
        return (
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}> &times; </button>
                        </header>
                        <main>
                            <img id="Captured" />
                            {getIPFS()}
                            <div>
                                <div className="input ">NFT Name</div>
                                <input className="input2" type="text" id="input" onChange={set}></input>
                            
                            </div>
                        </main>
                        <footer>
                        </footer>
                    </section>
                ) : null}
            </div>
        )
    
}
export default Modal
