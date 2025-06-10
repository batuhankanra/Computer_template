import { configureStore } from "@reduxjs/toolkit";
import category from './features/category'
import createProduct from './features/product/apiProduct'
import getProduct from './features/product/getApiProduct'
import modal from './features/modal/modal'

export const store=configureStore({
    reducer:{
        category,
        createProduct,
        getProduct,
        modal

    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
