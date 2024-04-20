import React, { Component } from 'react';
import './Shopbird.css';
import { useNavigate } from "react-router-dom";


const Shopbirds = () => {

    const navigate = useNavigate();

        return (
            <div className="container">
                <div className="box1" onClick={() => navigate("/tours")}>
                    <div className="text" >EARLY BIRDS <br /> 20.04.28</div>
                </div>
                <div className="box2">
                    <div className="text-container">
                        <div className='text1'>PRIVATE SHOP</div>
                    </div>
                </div>
            </div>
        );
}

export default Shopbirds;
