import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import booksApi from "./features/books/booksApi";
import ordersApi from "./orders/ordersApi";  // Import the ordersApi slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,  // Add ordersApi to your store configuration
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),  // Ensure ordersApi middleware is applied
});
