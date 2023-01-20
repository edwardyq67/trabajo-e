import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFavoriteThunk } from '../store/slices/favorites.slice';

import { useNavigate } from 'react-router-dom';
const Login = () => {
    const dispatch=useDispatch()
    const [usuario,setUsuarios]=useState({})
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/users")
        .then((res)=>setUsuarios(res.data))
        
    },[])
    const navigate=useNavigate()
    const enviarUsuario=(e)=>{
        
        dispatch(getFavoriteThunk(e))
        
        navigate('/')
    }
   

    
 
    return (
        <div>
            login
            {
                usuario.map?.(usua=>(
                    <div key={usua.id} onClick={()=>enviarUsuario(usua.id)}>
                        <h2>{usua.name.firstname}</h2>
                        <h2>{usua.name.lastname}</h2>
                        <h2>{usua.email}</h2>
                        <h2><b>Num: </b>{usua.phone}</h2>
                    </div>
                    
                ))
            }
            
        </div>
    );
};

export default Login;