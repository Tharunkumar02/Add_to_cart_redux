import {createSlice} from '@reduxjs/toolkit';
import { ProductsData } from '../ProductData';

const initialState = {
    products: ProductsData
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, action) => {
            state.cart.push(action.payload)
        },

        removeFomCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload.id)
        }
    }
})

export const {addtoCart, removeFomCart} = cartSlice.actions;
export default {productSlice, cartSlice}