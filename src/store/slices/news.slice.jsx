import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading';

export const newsSlice = createSlice({
    name: 'news',
    initialState: [],
    reducers: {
        setNew:(state,action)=>{
            const news=action.payload
            return news
        }
        
    }
})
export const getNuwThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://fakestoreapi.com/products')
        .then((res) => dispatch(setNew(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterNameThunk = (search) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://fakestoreapi.com/products/category/${search}`)
        .then((res) => dispatch(setNew(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const categoryThunk = (numC) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://fakestoreapi.com/products/category/${numC}`)
        .then((res) => dispatch(setNew(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setNew } = newsSlice.actions;

export default newsSlice.reducer;
