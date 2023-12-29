import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async(_, thunkAPI) => {
        try{
            // const response = await fetch("https://api.escuelajs.co/api/v1/products");
            // const data = await response.json();
            const response = await axios(`${BASE_URL}/products`);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list : []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
});

export default productsSlice.reducer;