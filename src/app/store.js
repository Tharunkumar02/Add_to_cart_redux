import {configureStore} from '@reduxjs/toolkit';
import product from '../features/ProductSlice';
import cart from '../features/ProductSlice';


const store = configureStore({
    reducer: {
        product: product.productSlice.reducer,
        cart: cart.cartSlice.reducer
    }
})

export default store;