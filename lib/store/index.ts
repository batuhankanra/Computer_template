import { configureStore } from "@reduxjs/toolkit";
import category from './features/categories/getApiCategories'
import createProduct from './features/product/apiProduct'
import getProduct from './features/product/getApiProduct'
import modal from './features/modal/modal'
import categories from './features/categories/getApiCategories'
import apiCategories from './features/categories/apiCategories'

export const store=configureStore({
    reducer:{
        apiCategories,
        categories,
        category,
        createProduct,
        getProduct,
        modal

    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
