/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import "./modal.css";


const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

    const { open, close, header, hash } = props;
    const [nftName, setNftName] = useState("initial value")
   
        return (
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}> &times; </button>
                        </header>
                        <main>
                        
                            <div>
                                <div className="input ">Character creation is complete!<br/>
                                Go to Home and try minting!</div>
                            
                
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
