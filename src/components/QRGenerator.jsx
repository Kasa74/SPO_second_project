import React from "react";
import QRCode from 'react-qr-code'
import axios from 'axios'
import { useState } from "react";

const QRGenerator = () => {
    
    const [name, setName] = useState('')
    const getTheName = () => {
        axios.get("http://localhost:5000/api/ticket")
        .then(res => {
            console.log(res.data[res.data.length - 1].ticket_id)
            setName(res.data[res.data.length - 1].ticket_id)
        }).catch(err => {
            console.log(err)
        });
    }

    let path = "http://localhost:5000/api/ticket"

    getTheName()
    return(
        <div>
            <QRCode value=""/>
        </div>
    )
}

export default QRGenerator