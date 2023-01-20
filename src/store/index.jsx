import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './slices/favorites.slice'
import isLoadingSlice from './slices/isLoading'
import newsSlice from './slices/news.slice'


export default configureStore({
    reducer: {
        isLoading:isLoadingSlice,
        new:newsSlice,
        favorite:favoritesSlice
    }
})
