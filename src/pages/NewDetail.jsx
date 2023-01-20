import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getNuwThunk } from '../store/slices/news.slice';

const NewDetail = () => {
    const news=useSelector(state=>state.new)
    const [unicoP,setUnicoP]=useState({})
    const [psugerensia,setPsugerencias]=useState([])
    const {id}=useParams();
    const navigate=useNavigate()
    useEffect(()=>{
        const newsp=news.find(newProdu=>newProdu.id===Number(id))
        setUnicoP(newsp)
        const sugerencias=news.filter(newSuger=>newSuger.category===newsp.category)
        setPsugerencias(sugerencias)
    },[news,id])
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getNuwThunk())
    },[])
    
    return (
        <div>
            <h1>{unicoP?.title}</h1>
            <img src={unicoP?.image} alt="" />
            <h3><b>Price :</b>{unicoP?.price}</h3>
            <p>{unicoP?.description}</p>
            <ul>
                {
                    psugerensia.map?.(pSug=>(
                        <div onClick={()=>navigate(`/new/${pSug.id}`)}>
                            <li><h3>{pSug.title}</h3></li>
                            <img src={pSug.image} alt="" />
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};

export default NewDetail;