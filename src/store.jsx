import { configureStore } from "@reduxjs/toolkit";
import cartReduer from "./CartSlice"
const store = configureStore({
    reducer : cartReduer
});

export default store;