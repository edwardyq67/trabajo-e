import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProFavorite = ({favoritoU}) => {
    
    const [prodFU,setProdFU]=useState({})
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${favoritoU}`)
        .then(res=>setProdFU(res.data))
        .catch(error=>console.log(error.response))
    },[])
   
    return (
        <div>
            
            <h2>{prodFU.title}</h2>
            <img src={prodFU.image} alt="" />
        </div>
    );
};

export default ProFavorite;