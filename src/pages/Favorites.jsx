import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFavoriteThunk } from '../store/slices/favorites.slice';
import ProFavorite from './ProFavorite';

const Favorites = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const favorite=useSelector(state=>state.favorite)
    useEffect(()=>{
        dispatch(getFavoriteThunk())
        
    },[])
    
    return (
        <div>
          
            {
                favorite.map(favoritoU=>(
                    
                        favoritoU.products.map(ProdF=>(
                            <ProFavorite key={ProdF.productId} favoritoU={ProdF.productId}/>
                        ))
                    
                ))
            }
        </div>
    );
};

export default Favorites;