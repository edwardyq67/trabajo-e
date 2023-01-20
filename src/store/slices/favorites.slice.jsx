import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { setIsLoading } from './isLoading';

export const favoritesSlice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        setFavorites:(state,action)=>{
            const favoite=action.payload
            return favoite
            }
     
    }
})
export const getFavoriteThunk = (e) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://fakestoreapi.com/carts/user/${e}`)
        .then((res) => dispatch(setFavorites(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}



export const {setFavorites  } = favoritesSlice.actions;

export default favoritesSlice.reducer;
