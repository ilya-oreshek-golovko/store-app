import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async(_, thunkAPI) => {
        try{
            const response = await axios(`${BASE_URL}/categories`);
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState : {
        list: []
    },
    reducers : {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    }
});


export default categoriesSlice.reducer;

